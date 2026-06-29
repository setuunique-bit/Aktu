import type { Metadata } from 'next';
import Link from 'next/link';
import FaqSchema from "@/components/faqSchema";
import TableOfContents from "@/components/TableOfContents";
import * as cheerio from 'cheerio';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface Circular {
  date: string;
  title: string;
  link: string;
  category: 'Academic' | 'Examination' | 'Scholarship' | 'Placement' | 'General';
}

const tocItems = [
  { title: "What is an AKTU Circular?",        href: "#What-Is-A-Circular" },
  { title: "Importance of University Notices",  href: "#Importance" },
  { title: "Types of AKTU Notifications",       href: "#Types-Of-Notices" },
  { title: "Live Circular Fetch Engine",         href: "#Fetch-Architecture" },
  { title: "Accessing Circulars via ERP Portal", href: "#Access-Methods" },
  { title: "Update Cycle & Check Frequency",    href: "#Update-Frequency" },
  { title: "Critical Student Categories",        href: "#Critical-Categories" },
  { title: "Benefits of Regular Monitoring",     href: "#Benefits" },
  { title: "FAQs",                               href: "#faqs" },
];

export const metadata: Metadata = {
  title: "AKTU Circular 2026 | Latest AKTU Notices, Updates & Notifications",
  description: "Stay completely updated with the latest official AKTU Circulars, semester examination notices, academic calendars, scholarship announcements, and university updates via AKTU ERP.",
  keywords: [
    "AKTU Circular","AKTU Notices","AKTU University Updates","AKTU ERP Login",
    "ERP Login AKTU","AKTU Student Login","ERP AKTU Portal","AKTU Dashboard","AKTU University",
  ],
  alternates: { canonical: "/circular" },
  openGraph: {
    title: "AKTU Circular 2026 | Latest University Notices & Updates",
    description: "Access real-time automated data streams fetching official circulars directly from the university database.",
    type: "article",
  },
};

function deriveCategory(title: string): Circular['category'] {
  const t = title.toLowerCase();
  if (t.includes('exam') || t.includes('date sheet') || t.includes('datesheet') || t.includes('admit') || t.includes('result'))
    return 'Examination';
  if (t.includes('scholarship') || t.includes('stipend') || t.includes('fellowship'))
    return 'Scholarship';
  if (t.includes('placement') || t.includes('internship') || t.includes('recruitment') || t.includes('campus'))
    return 'Placement';
  if (t.includes('academic') || t.includes('syllabus') || t.includes('attendance') || t.includes('calendar') || t.includes('fee') || t.includes('rdc'))
    return 'Academic';
  return 'General';
}

/** Robust Date Parser to handle multiple variations of dates pushed by the university */
function extractDateInfo(raw: string): { display: string; ms: number } | null {
  const text = raw.trim();
  
  // Pattern 1: DD-MM-YYYY or DD/MM/YYYY
  const dmyMatch = text.match(/^(\d{2})[-/](\d{2})[-/](\d{4})$/);
  if (dmyMatch) {
    const d = new Date(`${dmyMatch[3]}-${dmyMatch[2]}-${dmyMatch[1]}`);
    if (!isNaN(d.getTime())) {
      return {
        display: d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
        ms: d.getTime(),
      };
    }
  }

  // Pattern 2: Javascript native fallback (e.g. DD-MMM-YYYY)
  const d = new Date(text);
  if (!isNaN(d.getTime()) && text.length >= 8) {
    return {
      display: d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
      ms: d.getTime(),
    };
  }

  return null;
}

const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/125.0 Safari/537.36";
const ERP_CIRCULAR_URL = "https://erp.aktu.ac.in/Webpages/Public/Circular/CircularForWebsite.aspx";

export async function fetchLiveCirculars(): Promise<Circular[]> {
  let viewstate = '', viewstategenerator = '', eventvalidation = '';
  let cookies = '';

  // ── Step 1: GET the page to grab ASP.NET hidden fields & Cookies ────────
  try {
    const getRes = await fetch(ERP_CIRCULAR_URL, {
      cache: 'no-store',
      headers: { 'User-Agent': UA, 'Accept': 'text/html' },
    });
    
    if (getRes.ok) {
      // Capture the ASP.NET Session cookie required for valid Postbacks
      const setCookie = getRes.headers.get('set-cookie');
      if (setCookie) cookies = setCookie.split(';')[0];

      const html = await getRes.text();
      const $ = cheerio.load(html);
      viewstate          = $('#__VIEWSTATE').val()          as string ?? '';
      viewstategenerator = $('#__VIEWSTATEGENERATOR').val() as string ?? '';
      eventvalidation    = $('#__EVENTVALIDATION').val()    as string ?? '';
    }
  } catch (error) { 
    console.error('GET request failed', error);
  }

  // ── Step 2: POST to sort by newest first ────────────────────────────────
  if (viewstate) {
    const formBody = new URLSearchParams({
      '__EVENTTARGET':        'ctl00$ContentPlaceHolder1$GridView1',
      '__EVENTARGUMENT':      'Sort$PostedOn', 
      '__VIEWSTATE':          viewstate,
      '__VIEWSTATEGENERATOR': viewstategenerator,
      '__EVENTVALIDATION':    eventvalidation,
      'ctl00$ContentPlaceHolder1$txtSearch': '',
    });

    try {
      const postRes = await fetch(ERP_CIRCULAR_URL, {
        method: 'POST',
        cache: 'no-store',
        headers: {
          'User-Agent': UA,
          'Content-Type': 'application/x-www-form-urlencoded',
          'Referer': ERP_CIRCULAR_URL,
          'Origin': 'https://erp.aktu.ac.in',
          'Cookie': cookies, // Required to bypass forged request rejection
        },
        body: formBody.toString(),
      });

      if (postRes.ok) {
        const html = await postRes.text();
        const circulars = parseCircularTable(html);

        if (circulars.length > 0) {
          circulars.sort((a, b) => b._ms - a._ms);
          return circulars.slice(0, 15).map(({ _ms, ...c }) => c);
        }
      }
    } catch (error) { 
      console.error('POST request failed', error);
    }
  }

  // ── Step 3: Fall back — parse the original GET response ─────────────────
  try {
    const getRes = await fetch(ERP_CIRCULAR_URL, {
      cache: 'no-store',
      headers: { 'User-Agent': UA },
    });
    if (getRes.ok) {
      const html = await getRes.text();
      const circulars = parseCircularTable(html);
      if (circulars.length > 0) {
        circulars.sort((a, b) => b._ms - a._ms);
        return circulars.slice(0, 15).map(({ _ms, ...c }) => c);
      }
    }
  } catch (error) {
     console.error('Fallback GET failed', error);
  }

  console.error('❌ AKTU ERP circular page fetch failed.');
  return [];
}

/** Parses the table using Dynamic Column Discovery */
function parseCircularTable(html: string): Array<Circular & { _ms: number }> {
  const $ = cheerio.load(html);
  const results: Array<Circular & { _ms: number }> = [];

  $('table tr').each((_, row) => {
    // Only search direct children to prevent hitting nested layout tables
    const cells = $(row).children('td');
    if (cells.length < 2) return;

    let title = '';
    let rawDate = '';
    let link = '';
    let ms = 0;

    // Dynamically discover columns instead of relying on fixed array indices
    cells.each((_, el) => {
      const text = $(el).text().trim().replace(/\s+/g, ' ');
      
      const dateInfo = extractDateInfo(text);
      if (dateInfo) {
        rawDate = dateInfo.display;
        ms = dateInfo.ms;
      } 
      // If it's not a date, not just a number (S.No), and hasn't been set yet, it's the title
      else if (text.length > 8 && !title && text.toLowerCase() !== 'title' && !/^\d+$/.test(text)) {
        title = text;
      }

      const aTag = $(el).find('a').attr('href');
      if (aTag && !link) {
        link = aTag;
      }
    });

    if (!title || !rawDate) return; 

    // Resolve relative links securely
    if (link && !link.startsWith('http')) {
      try { 
        link = new URL(link, 'https://erp.aktu.ac.in/').toString(); 
      } catch { 
        link = ERP_CIRCULAR_URL; 
      }
    }
    if (!link) link = ERP_CIRCULAR_URL; // Fallback to landing page if no PDF is attached

    results.push({
      title,
      link,
      date: rawDate,
      category: deriveCategory(title),
      _ms: ms,
    });
  });

  return results;
}

// ─── Page component ───────────────────────────────────────────────────────────

export default async function CircularPage() {
  const liveCirculars = await fetchLiveCirculars();

  const faqs = [
    { question: "Where can I find AKTU Circulars?", answer: "Official circulars are published at aktu.ac.in and inside your ERP dashboard after logging in via the AKTU ERP Portal." },
    { question: "How often does the university update the circular database?", answer: "The university pushes notifications dynamically. During exam windows, new notices can appear multiple times a day." },
    { question: "Can I download official notification PDFs directly to my phone?", answer: "Yes. Clicking any View PDF link delivers the file directly from the university's FMS server to your downloads folder." },
    { question: "Why can't I see the circular specific to my branch exam schedule?", answer: "Branch-specific schedules are often locked to institute-level access. Log in via your AKTU Student Login to view them." },
    { question: "What should I do if a circular deadline clashes with a college event?", answer: "University directives always take legal precedence over internal college activities. Follow the university deadline." },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white text-gray-800">
      <div className="flex flex-col lg:flex-row gap-8 py-6">
        <main className="flex-1 min-w-0 text-gray-800 leading-relaxed text-justify">

          <section id="Header">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003366] mb-6 tracking-tight">
              AKTU Circular 2026: Latest Notifications, Notices &amp; University Updates
            </h1>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 sm:p-6 rounded-lg mb-8 shadow-sm">
              <p className="mb-3">
                Staying informed is the foundation of structural academic success. The official <strong>AKTU Circular</strong> ecosystem serves as the primary communications node for Dr APJ Abdul Kalam Technical University. Every administrative change—from semester timelines to admit card distributions—is formally pushed through this registry network.
              </p>
              <p>
                For students across B.Tech, MBA, MCA, B.Pharm, and architectural branches, missing an announcement can cause registration delays or exam lockouts. This handbook explains how to navigate the <strong>ERP Login AKTU</strong> console and stay aligned with essential <strong>AKTU University Updates</strong>.
              </p>
            </div>
          </section>

          <section id="Live-Board" className="my-8">
            <div className="flex justify-between items-end mb-4 border-b pb-2">
              <h2 className="text-xl sm:text-2xl font-bold text-[#003366]">Live Automated Notice Board</h2>
              <span className="text-xs font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full animate-pulse border border-green-300">
                Live Sync Active
              </span>
            </div>
            <p className="mb-4 text-sm text-gray-600">
              Notices fetched directly from the official AKTU ERP server and sorted newest-first.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-300 shadow-sm mb-6 bg-white">
              <table className="min-w-[650px] w-full border-collapse">
                <thead>
                  <tr className="bg-[#f4f6f8] border-b border-gray-300 text-left">
                    <th className="p-3 font-bold text-[#003366] w-36">Date</th>
                    <th className="p-3 font-bold text-[#003366] w-28">Category</th>
                    <th className="p-3 font-bold text-[#003366]">Official Notification Title</th>
                    <th className="p-3 font-bold text-[#003366] w-28 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {liveCirculars.length > 0 ? (
                    liveCirculars.map((item, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 transition-colors">
                        <td className="p-3 text-sm font-semibold text-gray-600 whitespace-nowrap">{item.date}</td>
                        <td className="p-3 text-xs">
                          <span className={`px-2 py-1 rounded-full font-bold ${
                            item.category === 'Examination' ? 'bg-red-100 text-red-800 border border-red-200' :
                            item.category === 'Academic'    ? 'bg-green-100 text-green-800 border border-green-200' :
                            item.category === 'Scholarship' ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' :
                            item.category === 'Placement'   ? 'bg-purple-100 text-purple-800 border border-purple-200' :
                                                              'bg-gray-200 text-gray-800 border border-gray-300'
                          }`}>{item.category}</span>
                        </td>
                        <td className="p-3 text-sm font-medium text-gray-800">{item.title}</td>
                        <td className="p-3 text-center">
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-1.5 bg-[#003366] text-white text-xs font-bold rounded hover:bg-[#002244] transition-colors shadow-sm"
                          >
                            View PDF
                          </a>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="p-8 text-center">
                        <p className="text-gray-500 font-semibold mb-3">Circulars could not be loaded automatically at this time.</p>
                        <a
                          href="https://aktu.ac.in/circulars.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-6 py-2.5 bg-[#003366] text-white text-sm font-bold rounded hover:bg-[#002244] transition-colors"
                        >
                          View All Circulars on Official AKTU Website →
                        </a>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          <section id="What-Is-A-Circular">
            <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">What is an AKTU Circular?</h2>
            <p className="mb-4">An <strong>AKTU Circular</strong> is the legally binding policy document released by the Registrar, Vice-Chancellor, or Controller of Examinations at Lucknow. Because the university operates a decentralized affiliate structure spanning hundreds of colleges, these notices act as the central source of truth for the entire institution.</p>
            <p className="mb-6">When a policy change is introduced—such as modifying your <strong>AKTU ERP Registration</strong> steps or announcing a grace mark revision—it is not valid until an official signed document appears on the university&apos;s digital directory.</p>
          </section>

          <section id="Importance">
            <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">The Critical Importance of University Notices</h2>
            <p className="mb-4">Many students rely on informal group chats or unverified social channels. Tracking the official registry directly is non-negotiable for several reasons:</p>
            <ul className="list-disc pl-6 mb-6 space-y-3">
              <li><strong>Absolute Legal Validity:</strong> If a deadline is updated officially, your college cannot enforce older terms.</li>
              <li><strong>Error Reduction:</strong> Third-party blogs often re-post stale data. The live database protects you from wrong exam dates.</li>
              <li><strong>Direct Financial Deadlines:</strong> Late submission fees escalate exponentially based on fixed timelines in the notice records.</li>
            </ul>
          </section>

          <section id="Types-Of-Notices">
            <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">Types of AKTU Notifications Explained</h2>
            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">1. Academic Circulars</h3>
            <p className="mb-3">University calendar, syllabus updates, attendance criteria, and enrollment deadlines.</p>
            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">2. Examination Circulars</h3>
            <p className="mb-3">Date sheets, exam centers, form submission extensions, and <Link href="/admit-card" className="text-blue-600 font-semibold hover:underline">AKTU Admit Card</Link> download instructions.</p>
            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">3. Scholarship Notices</h3>
            <p className="mb-3">UP Post-Matric Scholarship guidelines, category updates, and student verification timelines.</p>
            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">4. Internship and Placement Updates</h3>
            <p className="mb-3">Pool campus drives, off-campus opportunities, training bootcamps, and industrial internship openings.</p>
            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-4">5. Holiday Notifications &amp; Admission Announcements</h3>
            <p className="mb-6">Weather closures, holiday declarations, UPTAC counseling schedules, and lateral entry conditions.</p>
          </section>

          <section id="Access-Methods">
            <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">How to Access AKTU Circulars Through the ERP Portal</h2>
            <p className="mb-4">Personalized or branch-specific directives require identity verification via the <strong>ERP AKTU Portal</strong>:</p>
            <ol className="list-decimal pl-6 space-y-3 mb-6">
              <li>Navigate to <code>erp.aktu.ac.in</code>.</li>
              <li>Set the role to <strong>&quot;Student&quot;</strong>.</li>
              <li>Enter your 11-digit or 13-digit <Link href="/user-id" className="text-blue-600 font-semibold hover:underline">AKTU ERP User ID</Link>.</li>
              <li>Enter your password and complete the captcha.</li>
              <li>Enter the 6-digit OTP sent to your registered mobile number.</li>
              <li>Open the <strong>&quot;Notification Board&quot;</strong> panel on your <strong>AKTU ERP Dashboard</strong>.</li>
            </ol>
          </section>

          <section id="Update-Frequency">
            <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">How Often Are Circulars Updated?</h2>
            <p className="mb-4">Notices are uploaded the moment they are signed off by department officials — there is no fixed daily window.</p>
            <p className="mb-6">During high-stakes periods like an <Link href="/result" className="text-blue-600 font-semibold hover:underline">AKTU Result</Link> rollout or exam form window, the feed can update multiple times a day.</p>
          </section>

          <section id="Critical-Categories">
            <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">Important Circular Categories Students Must Follow</h2>
            <div className="overflow-x-auto mb-6 rounded-lg border border-gray-300 shadow-sm bg-white">
              <table className="min-w-[600px] w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="p-3 border-b border-gray-300 font-bold text-[#003366] w-1/3">Notice Stream</th>
                    <th className="p-3 border-b border-gray-300 font-bold text-[#003366]">What Missing It Means For You</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr><td className="p-3 font-semibold bg-gray-50">Exam Form Windows</td><td className="p-3">Missing the deadline blocks your entry on exam attendance lists, leading to a lost semester.</td></tr>
                  <tr><td className="p-3 font-semibold bg-gray-50">Challenge Evaluation Openings</td><td className="p-3">The window to view scanned answer scripts is typically only 14 days.</td></tr>
                  <tr><td className="p-3 font-semibold bg-gray-50">APAAR / ABC ID Sync Mandates</td><td className="p-3">Failing to link your ID prevents credit transfers and delays your final degree.</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="Benefits">
            <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">The Real Benefits of Regular Notification Auditing</h2>
            <p className="mb-4">Checking your notification feed every few days keeps you ahead of deadlines — giving you time to collect documents, fix fee payment issues, and adjust your study plan.</p>
            <p className="mb-6">It also eliminates panic. When postponement rumors spread, you can verify the truth in seconds from the official source.</p>
            <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">Related AKTU ERP Resources</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><Link href="/user-id" className="text-blue-600 underline hover:text-blue-800 font-semibold">How to Locate and Recover Your Lost AKTU ERP User ID</Link></li>
              <li><Link href="/admit-card" className="text-blue-600 underline hover:text-blue-800 font-semibold">Step-by-Step AKTU Admit Card Download Procedures &amp; Center Rules</Link></li>
              <li><Link href="/result" className="text-blue-600 underline hover:text-blue-800 font-semibold">Understanding Your AKTU Result Performance Metrics &amp; CGPA Conversion</Link></li>
            </ul>
          </section>

          <section id="faqs"><FaqSchema faqs={faqs} /></section>

          <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">Conclusion</h2>
          <p className="mb-8">Staying aligned with official channels is essential for managing your technical education. By checking the official feed and logging in via your secure system panel, you can ensure a smooth path through every semester milestone.</p>
        </main>

        
          <TableOfContents items={tocItems} buttonUrl="https://erp.aktu.ac.in" buttonText="Login to AKTU Dashboard" />
        
      </div>
    </div>
  );
}