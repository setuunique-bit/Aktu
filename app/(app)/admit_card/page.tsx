
import type { Metadata } from 'next';
import Link from 'next/link';
import FaqSchema from "@/components/faqSchema";
import Image from 'next/image';
import TableOfContents from "@/components/TableOfContents";

const tocItems = [
    { title: "What is AKTU Admit Card?", href: "#What-is-AKTU-Admit-Card?" },
    { title: "Importance of AKTU Admit Card", href: "#Importance-of-AKTU-Admit-Card" },
    { title: "Who Can Download AKTU ERP Admit Card?", href: "#Who-Can-Download-AKTU-ERP-Admit-Card?" },
    { title: "AKTU ERP Login Process", href: "#AKTU-ERP-Login-Process" },
    { title: "Steps to Download AKTU Admit Card", href: "#Steps-to-Download-AKTU-Admit-Card" },
    { title: "Details Mentioned on Admit Card", href: "#Details-Mentioned-on-Admit-Card" },
    { title: "Common Login Issues & Troubleshooting", href: "#Common-AKTU-ERP-Login-Issues-and-Solutions" },
    { title: "What to Do If Admit Card Is Missing", href: "#What-to-Do-If-Admit-Card-Is-Not-Available" },
    { title: "Benefits of Using AKTU ERP Portal", href: "#Benefits-of-Using-AKTU-ERP-Portal" },
    { title: "Documents Required for Exam Day", href: "#Documents-Required-Along-With-AKTU-Hall-Ticket" },
    { title: "Exam Day Guidelines", href: "#Exam-Day-Guidelines" },
    { title: "FAQs", href: "#faqs" },
];

export const metadata: Metadata = {
    title: "AKTU ERP Admit Card 2026 Download | ERP Login AKTU Admit Card PDF",
    description: "Download AKTU ERP Admit Card 2026 from the official ERP Login AKTU portal. Check admit card release dates, login process, exam center details, troubleshooting tips, and exam instructions.",
    keywords: [
        "AKTU ERP Admit Card", "ERP Login AKTU", "AKTU Admit Card 2026", "AKTU Admit card",
        "AKTU Student Login", "AKTU ERP Login", "Download AKTU Admit Card", "AKTU ERP Portal",
        "AKTU Exam Admit Card", "AKTU Login", "AKTU One View", "AKTU Result", "AKTU Circular", "AKTU ERP User ID"
    ],
    alternates: { canonical: "/admit-card" },
    openGraph: {
        title: "AKTU ERP Admit Card 2026 Download",
        description: "Complete guide to download your AKTU ERP Admit Card through the ERP Login AKTU portal.",
        type: "article",
        images: [{ url: "/images/aktu-admit-card.webp", width: 1200, height: 630, alt: "AKTU ERP Admit Card 2026" }],
    },
};

export default function AdmitCardPage() {
    const faqs = [
        {
            question: "When will the AKTU Admit Card 2026 be released?",
            answer: "Dr APJ Abdul Kalam Technical University usually releases semester exam admit cards about 7 to 10 days before your first paper begins. Keep an eye on the official AKTU Circular updates for exact dates."
        },
        {
            question: "What is the User ID for ERP Login AKTU?",
            answer: "Your AKTU ERP User ID is the unique university enrollment number given to you by your college during admission. Remember, this is different from the examination Roll Number you use to check scores on the AKTU One View portal."
        },
        {
            question: "How can I login to AKTU ERP?",
            answer: "Simply visit erp.aktu.ac.in, choose 'Student' from the dropdown, enter your enrollment number as your AKTU ERP User ID, type in your password, solve the captcha, and verify your login with the OTP sent to your phone."
        },
        {
            question: "Can I appear for the exam without my admit card?",
            answer: "Absolutely not. Exam center invigilators will not allow any student to enter the hall without a physically printed AKTU Admit card and a valid original photo ID."
        },
        {
            question: "What should I do if details are incorrect on my admit card?",
            answer: "If you notice a misspelled name, wrong subject code, or missing paper, don't try to fix it yourself. Contact your college's examination cell immediately so they can update it in the central university database."
        },
        {
            question: "Is the AKTU ERP Login mandatory for downloading the admit card?",
            answer: "Yes, the university only issues admit cards through your personal, secure student dashboard. There are no public download links available."
        },
        {
            question: "Why is my AKTU admit card blank or not showing up?",
            answer: "A blank admit card usually means your college has put a hold on your account due to unpaid fees, low attendance, or because you haven't linked your mandatory 12-digit APAAR/ABC ID to your student profile."
        }
    ];

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 background-colur:white">
            <div className="flex flex-col lg:flex-row gap-8">
                <main className="flex-1 min-w-0 text-gray-800 leading-relaxed text-justify">
                    
                    {/* Header Section */}
                    <section id='Admit-Card-2026'>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003366] mb-6 tracking-tight">
                            AKTU ERP Admit Card 2026: Download Admit Card, Login Process & Important Instructions
                        </h1>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
  <span>
    Last Updated: June 22, 2026
  </span>

</div>
                        <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-lg mb-8 shadow-sm">
                            <p className="mb-3">
                                Preparing for your semester exams? The most crucial document you need to secure your seat in the exam hall is your <strong>AKTU ERP Admit Card 2026</strong>. Whether you are pursuing a B.Tech, MBA, MCA, B.Pharm, M.Tech, or B.Arch, you can easily download your official hall ticket right from the <strong>ERP Login AKTU</strong> digital dashboard.
                            </p>
                            <p>
                                Your admit card holds all your vital exam details—including specific exam dates, reporting times, paper codes, exam center locations, and your personal verification info. Getting access requires clearing a few basic hurdles, like submitting your exam forms and paying your fees. This comprehensive guide will walk you through the <strong>AKTU Student Login</strong> process, help you troubleshoot common portal errors, and keep you up to speed with the latest <strong>AKTU University Updates</strong>.
                            </p>
                        </div>
                        
                    </section>

                    {/* What is Section */}
                    <section id='What-is-AKTU-Admit-Card?'>
                        <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">
                            What is the AKTU ERP Admit Card?
                        </h2>
                        <p className="mb-4">
                            Simply put, the AKTU ERP Admit Card is your official VIP pass for exam season. Issued electronically by <strong>Dr APJ Abdul Kalam Technical University</strong>, this digital document proves that you are a legitimate student cleared to take your semester exams. 
                        </p>
                        <p className="mb-4">
                            Unlike general news posted on the public <Link href="/circular" className="text-blue-600 font-semibold hover:underline">AKTU Circular</Link> page, your admit card is entirely personalized. It is linked directly to your enrollment number, acting as an official record that your exam forms, attendance, and college assessments are fully approved by the university.
                        </p>
 <div className="my-8 text-center border p-4 bg-white rounded shadow-sm">
              <p className="text-sm text-gray-600 mb-4 font-semibold">Official AKTU Login Interface Dashboard Example</p>
              {/* Note: Removed '/public' from the src path because Next.js automatically maps the public folder to the root '/' */}
             <Image
  src="/admitcard.png"
  alt="AKTU ERP Login Portal Dashboard"
  width={1024}
  height={498}
  className="mx-auto rounded border"
/>
              <p className="text-xs text-gray-500 mt-2">Always ensure you are logging in via the official <a href="https://erp.aktu.ac.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">erp.aktu.ac.in</a> domain.</p>
            </div>
                    </section>

                    {/* Importance Section */}
                    <section id="Importance-of-AKTU-Admit-Card">
                        <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">
                            Importance of the AKTU Admit Card
                        </h2>
                        <p className="mb-4">
                            Showing up to your exam center without your admit card is a guaranteed way to be turned away at the gate. Here is why this single piece of paper is so important:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-3">
                            <li>
                                <strong>Proof of Identity:</strong> It confirms to the external invigilators and the university's flying squad that you are an officially registered candidate.
                            </li>
                            <li>
                                <strong>Your Personal Timetable:</strong> It lists your exact exam center, paper codes, and test times, ensuring you don't show up on the wrong day or at the wrong college.
                            </li>
                            <li>
                                <strong>Carry-Over Details:</strong> If you are taking any Carry Over Papers (COP) or specific electives, the card clearly highlights them so you are handed the correct question paper.
                            </li>
                        </ul>
                    </section>

                    {/* Eligibility Section */}
                    <section id="Who-Can-Download-AKTU-ERP-Admit-Card?">
                        <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">
                            Who Can Download the AKTU ERP Admit Card?
                        </h2>
                        <p className="mb-4">
                            The <strong>AKTU ERP Portal</strong> won't generate an admit card for just anyone. Your student profile needs to meet a few mandatory requirements before the download link activates:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li><strong>Exam Form Submitted:</strong> You must have filled out and submitted your semester exam form on the ERP portal before the deadline.</li>
                            <li><strong>Fees Paid:</strong> Your exam fee status must show as "Success" with no pending dues.</li>
                            <li><strong>Good Attendance:</strong> You need to meet the university's minimum attendance rule (usually 75%), unless your college has granted an official waiver.</li>
                            <li><strong>ABC ID Linked:</strong> As per the latest rules, you must link your 12-digit Academic Bank of Credits (ABC ID / APAAR) to your profile.</li>
                        </ul>
                    </section>

                    {/* Login Process */}
                    <section id="AKTU-ERP-Login-Process">
                        <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">
                            AKTU ERP Login Process: Step-by-Step
                        </h2>
                        <p className="mb-4">
                            Logging into your dashboard is easy once you know the exact steps. To avoid any "invalid password" errors, just follow this routine:
                        </p>
                        <ol className="list-decimal pl-6 space-y-3 mb-6">
                            <li>
                                <strong>Visit the Official Website:</strong> Open a web browser and go straight to <code>erp.aktu.ac.in</code>.
                            </li>
                            <li>
                                <strong>Select Your User Type:</strong> On the login page, click the dropdown menu and select "Student".
                            </li>
                            <li>
                                <strong>Enter Your ID:</strong> Type your 11-digit or 13-digit university enrollment number into the <Link href="/user-id" className="text-blue-600 font-semibold hover:underline">AKTU ERP User ID</Link> box. (Do not use your exam roll number!)
                            </li>
                            <li>
                                <strong>Type Your Password:</strong> Enter your secret password. If you are a fresher logging in for the first time, check with your college for the default password format.
                            </li>
                            <li>
                                <strong>Verify and Login:</strong> Solve the quick image captcha, hit login, and enter the OTP sent to your registered mobile number.
                            </li>
                        </ol>
                    </section>

                    {/* Download Steps */}
                    <section id="Steps-to-Download-AKTU-Admit-Card">
                        <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">
                            Steps to Download AKTU Admit Card
                        </h2>
                        <p className="mb-4">
                            Once you are inside the student dashboard, grabbing your admit card takes less than a minute. Here is what to do:
                        </p>
                        <ol className="list-decimal pl-6 space-y-2 mb-6">
                            <li>Look at the main menu on the left side of your dashboard screen.</li>
                            <li>Scroll down and click on the <strong>"Examination Dashboard"</strong> tab.</li>
                            <li>Click the link that says <strong>"Admit Card / Hall Ticket Download"</strong>.</li>
                            <li>Your hall ticket will appear on the screen. Double-check your subjects, then click the "Print" or "Save as PDF" button. Make sure your browser isn't blocking pop-ups!</li>
                        </ol>
                    </section>

                    {/* Table Details */}
                    <section id="Details-Mentioned-on-Admit-Card">
                        <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">
                            Details Mentioned on Admit Card
                        </h2>
                        <p className="mb-4">
                            Even a small typo on your admit card can cause headaches on exam day. As soon as you hit download, verify the following details:
                        </p>
                        <div className="overflow-x-auto mb-6 rounded-lg border border-gray-300 shadow-inner">
                            <table className="min-w-[600px] w-full border-collapse">
                                <thead>
                                    <tr className="bg-gray-100 text-left">
                                        <th className="p-3 border-b border-gray-300 font-bold text-[#003366]">Information Type</th>
                                        <th className="p-3 border-b border-gray-300 font-bold text-[#003366]">What to Check</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="p-3 font-semibold bg-gray-50 w-1/3">Personal Details</td>
                                        <td className="p-3">Your full name, father's name, clear passport photo, and your scanned signature.</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-semibold bg-gray-50">Academic Info</td>
                                        <td className="p-3">Your official Roll Number, Enrollment Number, course branch, and current semester.</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-semibold bg-gray-50">Exam Center Details</td>
                                        <td className="p-3">The name of the college where you'll give your exams, along with its specific Center Code.</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-semibold bg-gray-50">Subjects & Timings</td>
                                        <td className="p-3">A list of your subjects, exact paper codes, dates, and reporting times.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Troubleshooting Section */}
                    <section id="Common-AKTU-ERP-Login-Issues-and-Solutions">
                        <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">
                            Common AKTU ERP Login Issues and Solutions
                        </h2>
                        <p className="mb-4">
                            Technology isn't perfect, and you might run into a few glitches during peak exam season. Here is how to handle the most common login problems:
                        </p>
                        <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Forgot Your Password?</h3>
                        <p className="mb-3">
                            If the system says "Invalid Credentials", just click the "Forgot Password" link on the login page. The ERP will send a secure reset link to the email address registered with your college.
                        </p>
                        <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">OTP Not Arriving?</h3>
                        <p className="mb-3">
                            When thousands of students log in at once, SMS gateways can slow down. If your mobile OTP doesn't arrive instantly, wait a couple of minutes before clicking "Resend." Clicking too fast might temporarily lock your account!
                        </p>
                        <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Admit Card Link Missing?</h3>
                        <p className="mb-4">
                            If you log in and the examination dashboard looks empty, try clearing your browser cache and cookies, or try logging in from an "Incognito" or private window.
                        </p>
                    </section>

                    {/* What to do if missing */}
                    <section id="What-to-Do-If-Admit-Card-Is-Not-Available">
                        <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">
                            What to Do If Admit Card Is Missing
                        </h2>
                        <p className="mb-4">
                            Is your entire friend group bragging about their downloaded admit cards while your dashboard is completely empty? Don't panic! Take these steps:
                        </p>
                        <ul className="list-decimal pl-6 mb-6 space-y-2">
                            <li>Go to the fee section on your ERP dashboard and make sure your exam payment didn't bounce. It should say "Successful".</li>
                            <li>Call your college's exam cell to verify that they have forwarded your exam form to the university.</li>
                            <li>Check with your HOD or registrar to ensure your admit card hasn't been blocked due to short attendance or unpaid college tuition.</li>
                        </ul>
                    </section>

                    {/* Benefits Section */}
                    <section id="Benefits-of-Using-AKTU-ERP-Portal">
                        <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">
                            Benefits of Using the AKTU ERP Portal
                        </h2>
                        <p className="mb-4">
                            The <strong>AKTU Login</strong> dashboard isn't just for downloading hall tickets; it's a one-stop-shop for managing your whole college life online:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li><strong>Everything in One Place:</strong> You can fill out exam forms, check fee receipts, and monitor your attendance securely.</li>
                            <li><strong>Easy Result Access:</strong> The dashboard gives you direct, verified links to check your <Link href="/result" className="text-blue-600 font-semibold hover:underline">AKTU Result</Link> as soon as scores are announced.</li>
                            <li><strong>Direct University Updates:</strong> You get instant notifications regarding schedule changes, holidays, and official circulars straight from the university administration.</li>
                        </ul>
                    </section>

                    {/* Documents Required */}
                    <section id="Documents-Required-Along-With-AKTU-Hall-Ticket">
                        <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">
                            Documents Required Along With AKTU Admit Card
                        </h2>
                        <p className="mb-4">
                            To breeze through the security check at your exam center, make sure you pack the following items in your bag the night before:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li>A clear, printed copy of your <strong>AKTU Exam Admit Card</strong>.</li>
                            <li>Your original College ID card with a recognizable photo.</li>
                            <li>A valid government-issued photo ID (like an Aadhaar card, Voter ID, or driving license).</li>
                            <li>All your necessary stationery (pens, pencils, scales)—but remember, smart devices are strictly banned!</li>
                        </ul>
                    </section>

                    {/* Guidelines */}
                    <section id="Exam-Day-Guidelines">
                        <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">
                            Exam Day Guidelines
                        </h2>
                        <p className="mb-4">
                            Playing by the rules is crucial to avoid any Unfair Means (UFM) penalties. Always aim to reach your assigned exam center at least 45 minutes before the exam starts so you can find your seating arrangement without stressing.
                        </p>
                        <p className="mb-6">
                            Leave your smartwatches, Bluetooth earphones, and digital notes at home. When filling out your OMR sheets and answer booklets, stick to standard blue or black ballpoint pens to ensure the scanners read your data perfectly.
                        </p>

                        <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">
                            Related AKTU ERP Resources
                        </h2>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li><Link href="/user-id" className="text-blue-600 underline hover:text-blue-800 font-semibold">How to Find and Recover Your AKTU ERP User ID</Link></li>
                            <li><Link href="/result" className="text-blue-600 underline hover:text-blue-800 font-semibold">Check Your Semester Grades via the AKTU One View Portal</Link></li>
                            <li><Link href="/circular" className="text-blue-600 underline hover:text-blue-800 font-semibold">Stay Updated with the Latest AKTU Circulars & Notices</Link></li>
                        </ul>
                    </section>

                    {/* FAQs Mapping */}
                    <section id="faqs">
                        <FaqSchema faqs={faqs} />
                    </section>

                    {/* Conclusion */}
                    <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">Conclusion</h2>
                    <p className="mb-8">
                        Getting your admit card sorted early is one of the easiest ways to reduce exam stress. Make sure your profile is fully updated, your ABC ID is linked, and your fees are cleared so you can hit that <strong>Download AKTU Admit Card</strong> button without any hiccups. Keep a few spare printed copies of your hall ticket safely in your bag, follow the university guidelines, and best of luck with your semester exams!
                    </p>
                </main>

                {/* Sticky Navigation Component */}
                <TableOfContents 
                    items={tocItems}
                    buttonUrl="https://erp.aktu.ac.in"
                    buttonText="Download Admit Card"
                />
            </div>
        </div>
    );
}
