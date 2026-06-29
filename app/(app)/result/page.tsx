import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import FaqSchema from "@/components/faqSchema";
import TableOfContents from "@/components/TableOfContents";

const tocItems = [
    { title: "Result System Overview", href: "#Result-System" },
    { title: "AKTU ERP vs One View", href: "#ERP-vs-One-View" },
    { title: "How to Check Result Online", href: "#How-to-Check" },
    { title: "Marksheet Details", href: "#Marksheet-Details" },
    { title: "SGPA & CGPA Grading", href: "#Grading-System" },
    { title: "Result Status Codes", href: "#Status-Codes" },
    { title: "Challenge Evaluation", href: "#Revaluation" },
    { title: "Back Paper Results", href: "#Back-Paper" },
    { title: "Common Result Issues", href: "#Common-Issues" },
    { title: "DigiLocker & PDF Download", href: "#DigiLocker" },
    { title: "FAQs", href: "#faqs" },
];

export const metadata: Metadata = {
  title: "AKTU Result 2026 | Check Semester Result via AKTU ERP Login",
  description:
    "Check AKTU Result 2026 online through AKTU ERP Login and AKTU One View. Learn how to view semester results, SGPA, CGPA, carry-over papers, revaluation status, and mark sheets.",
  keywords: [
    "AKTU Result",
    "AKTU Result 2026",
    "AKTU One View",
    "AKTU ERP Login",
    "Check AKTU Result",
    "AKTU Semester Result",
    "AKTU SGPA",
    "AKTU CGPA",
    "AKTU Marksheet",
    "AKTU Back Paper Result",
  ],
  alternates: {
    canonical: "/result",
  },
  openGraph: {
    title: "AKTU Result 2026",
    description:
      "Check AKTU semester results online using AKTU One View and ERP Login.",
    type: "article",
  },
};

export default function ResultPage() {
  const faqs = [
    {
      question: "How can I check AKTU Result online?",
      answer: "Students can check AKTU results through the AKTU One View portal using their 13-digit roll number, or by logging into the AKTU ERP portal using their enrollment number."
    },
    {
      question: "What is AKTU One View?",
      answer: "AKTU One View is the official, lightweight result portal designed specifically for viewing semester examination results, SGPA, and CGPA without needing a password."
    },
    {
      question: "Can I check AKTU Result through ERP Login?",
      answer: "Yes, students can access comprehensive academic records, including detailed semester results and internal marks, through the secure student dashboard on the ERP portal."
    },
    {
      question: "What is the formula to convert AKTU CGPA to percentage?",
      answer: "According to AKTU guidelines, the formula to convert your CGPA into a percentage is: Percentage = (CGPA * 10) - 7.5."
    },
    {
      question: "What does PWG mean in AKTU Result?",
      answer: "PWG stands for Pass With Grace. It means the student failed a subject by a very small margin (usually 1 to 5 marks) and the university awarded grace marks to pass them."
    },
    {
      question: "How can I apply for Challenge Evaluation (Revaluation)?",
      answer: "If you are unsatisfied with your marks, you can apply for Challenge Evaluation through your AKTU ERP Login. Stage 1 involves paying a fee to view your scanned answer copy, and Stage 2 involves paying for a complete re-evaluation."
    },
    {
      question: "Are carry-over (back paper) results published separately?",
      answer: "Yes, AKTU Back Paper Result declarations usually happen a few weeks after the main regular semester results are published."
    },
    {
      question: "Why is my AKTU result showing as 'Withheld'?",
      answer: "Results are typically withheld if a student has unpaid college fees, was caught under UFM (Unfair Means), or if their mandatory ABC (Academic Bank of Credits) ID is not linked in their ERP profile."
    }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-8">
        
        <main className="flex-1 min-w-0 text-gray-800 leading-relaxed text-justify">
          
          {/* Header Section */}
          <section id="Header">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003366] mb-6 tracking-tight">
              AKTU Result 2026: Check Semester Results Through AKTU ERP Login & One View
            </h1>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
  <span>
    Last Updated: June 22, 2026
  </span>

</div>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 sm:p-6 rounded-lg mb-8 shadow-sm">
              <p className="mb-3">
                The declaration of the <strong>AKTU Result 2026</strong> is one of the most highly anticipated academic events for students enrolled at Dr APJ Abdul Kalam Technical University. Whether you are navigating your first year or heading toward your final semester, checking your academic progress is a critical part of your university journey. Students can securely check their semester results, calculate their SGPA and CGPA, track carry-over paper scores, and monitor their overall academic performance online through two primary platforms: the <strong>AKTU One View</strong> portal and the comprehensive <strong>AKTU ERP Login</strong> dashboard.
              </p>
              <p>
                Whether you are pursuing a B.Tech, MBA, MCA, B.Pharm, B.Arch, M.Tech, or any other affiliated professional course across hundreds of colleges in Uttar Pradesh, the grading system remains centralized. This exhaustive guide explains everything you need to know about how to seamlessly <strong>Check AKTU Result</strong>, decode your digital mark sheets, understand the complex credit-based grading formulas, and confidently navigate the revaluation and scrutiny processes if your scores don't match your expectations.
              </p>
            </div>
            
            {/* Visual Interface Section Added Here */}
            <div className="my-8 text-center border p-4 bg-white rounded shadow-sm">
              <p className="text-sm text-gray-600 mb-4 font-semibold">Official AKTU Login Interface Dashboard Example</p>
              {/* Note: Removed '/public' from the src path because Next.js automatically maps the public folder to the root '/' */}
             <Image
  src="/result.png"
  alt="AKTU ERP Login Portal Dashboard"
  width={1024}
  height={498}
  className="mx-auto rounded border"
/>
              <p className="text-xs text-gray-500 mt-2">Always ensure you are logging in via the official <a href="https://erp.aktu.ac.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">erp.aktu.ac.in</a> domain.</p>
            </div>
            
          </section>

          {/* Introduction to AKTU Result System */}
          <section id="Result-System">
            <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">
              Understanding the AKTU Semester Result System
            </h2>
            <p className="mb-4">
              Dr APJ Abdul Kalam Technical University conducts examinations in two major cycles: the Odd Semester (typically held in December/January) and the Even Semester (typically held in May/June). Because the university evaluates answer scripts for millions of students, the <strong>AKTU Semester Result</strong> is usually published in phases. Final-year students often receive their results first to facilitate their transition into corporate placements or higher education, followed by third-year, second-year, and finally, first-year students.
            </p>
            <p className="mb-6">
              The entire evaluation mechanism is digitized. Once external examiners complete the evaluation of physical answer booklets at various nodal centers, the marks are uploaded directly to the university's central database. These external marks are then mathematically combined with the internal sessional marks and practical marks uploaded by your respective college faculties. The final computed grade is what reflects on your <strong>AKTU Marksheet</strong>.
            </p>
          </section>

          {/* Differentiating the Portals */}
          <section id="ERP-vs-One-View">
            <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">
              What is the AKTU ERP Result Portal?
            </h2>
            <p className="mb-4">
              The <strong>AKTU ERP Result Portal</strong> (officially accessible at <a href="https://erp.aktu.ac.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">erp.aktu.ac.in</a>) is the official, secure digital ecosystem created by the university to manage the lifecycle of a student's academic records. Through the <strong>AKTU ERP Login</strong> system, you do much more than just view a simple grade card. You gain access to a unified dashboard that tracks your examination forms, daily attendance records pushed by your college, digital fee receipts, enrollment verification data, and historical academic data spanning your entire degree duration.
            </p>
            <p className="mb-6">
              However, a common point of confusion for many students is the difference between the main ERP portal and <strong>AKTU One View</strong>. While both systems fetch data from the same central university database, they serve entirely different user experiences and functional purposes. AKTU One View was engineered specifically to handle the massive, instantaneous web traffic surges that occur on result declaration days. It acts as a lightweight, read-only interface that bypasses complex security logins.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-3">
              Key Features of the AKTU ERP Portal
            </h3>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-6">
              <li><strong>Comprehensive Result Archive:</strong> View past and present semester examination results, including historical data for back papers.</li>
              <li><strong>Performance Metrics:</strong> Access detailed breakdowns of your <strong>AKTU SGPA</strong> (Semester Grade Point Average) and <strong>AKTU CGPA</strong> (Cumulative Grade Point Average).</li>
              <li><strong>Form Management:</strong> Fill out and submit examination forms for upcoming regular and carry-over subjects.</li>
              <li><strong>Challenge Evaluation:</strong> Initiate the official process for rechecking or re-evaluating your answer scripts directly from the dashboard.</li>
              <li><strong>Digital Documents:</strong> Download provisional degree certificates, migration certificates, and official transcripts.</li>
              <li><strong>Profile Security:</strong> Update crucial contact information, link mandatory digital identities (like the ABC ID), and manage passwords.</li>
            </ul>

            <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-3">
              AKTU ERP Portal vs AKTU One View: A Detailed Comparison
            </h3>
            <div className="overflow-x-auto mb-6 rounded-lg border border-gray-300 shadow-inner">
              <table className="min-w-[600px] w-full border-collapse">
                <thead>
                  <tr className="bg-[#f4f6f8]">
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold text-[#003366]">Feature / Parameter</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold text-[#003366]">AKTU ERP Login Portal</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold text-[#003366]">AKTU One View Portal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Authentication Method</td>
                    <td className="border border-gray-300 px-4 py-3">Requires Enrollment Number, secure Password, and OTP verification.</td>
                    <td className="border border-gray-300 px-4 py-3">Requires only the 13-digit University Roll Number and a simple Captcha.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Primary Purpose</td>
                    <td className="border border-gray-300 px-4 py-3">Full academic lifecycle management, form submissions, and secure profile tracking.</td>
                    <td className="border border-gray-300 px-4 py-3">Instant, lightweight access to semester results during high-traffic declaration days.</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Historical Data Access</td>
                    <td className="border border-gray-300 px-4 py-3">Deep archive; can view internal college marks, practical breakdowns, and registration status.</td>
                    <td className="border border-gray-300 px-4 py-3">Displays a consolidated view of all semesters completed to date in a single scrollable page.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Revaluation Requests</td>
                    <td className="border border-gray-300 px-4 py-3">Yes. Students must use this portal to apply and pay for Challenge Evaluation.</td>
                    <td className="border border-gray-300 px-4 py-3">No. It is strictly a read-only platform; no actionable forms are available here.</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Traffic Handling</td>
                    <td className="border border-gray-300 px-4 py-3">Can experience lag or temporary lockouts during peak result declaration hours.</td>
                    <td className="border border-gray-300 px-4 py-3">Highly optimized to handle millions of queries simultaneously without crashing.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Step-by-Step Guide */}
          <section id="How-to-Check">
            <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">
              How to Check AKTU Result Online in 2026
            </h2>
            <p className="mb-4">
              Depending on your current requirement—whether you are rushing to see your grades the minute they are announced, or you are carefully analyzing your internal marks for a scholarship application—you can choose between two primary methods to <strong>Check AKTU Result</strong> online. Follow these detailed, step-by-step instructions to ensure a smooth experience.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-3">
              Method 1: Checking via the AKTU One View Portal (Fastest Method)
            </h3>
            <p className="mb-4">
              When the university releases a circular announcing the publication of results, the main website experiences an enormous surge in traffic. The <strong>AKTU One View</strong> interface is specifically optimized for these moments.
            </p>
            <ol className="list-decimal pl-5 sm:pl-6 space-y-3 mb-6">
              <li><strong>Access the Official Link:</strong> Open a secure web browser and navigate directly to the official URL: <a href="https://erp.aktu.ac.in/WebPages/OneView/OneView.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">erp.aktu.ac.in/WebPages/OneView/OneView.aspx</a>.</li>
              <li><strong>Enter Roll Number:</strong> Input your unique 13-digit university Roll Number. Double-check the digits, as a single error will yield a "Record Not Found" message.</li>
              <li><strong>Solve the Captcha:</strong> Carefully read and enter the alphanumeric security captcha code displayed on the screen. This prevents bot traffic from overwhelming the servers.</li>
              <li><strong>Submit Query:</strong> Click the "Proceed" or "Search" button.</li>
              <li><strong>Navigate Semesters:</strong> Your academic dashboard will appear. Scroll down to find individual dropdown menus for each semester you have completed. Click the "+" icon next to the relevant semester to expand your grade sheet.</li>
              <li><strong>Review and Print:</strong> Your subject-wise grades, internal marks, external marks, and total <strong>AKTU SGPA</strong> will be visible. Use the "Print" button at the top of the page to save a PDF copy for your personal records.</li>
            </ol>
            
          

            <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-3">
              Method 2: Checking via the AKTU ERP Login (Detailed Method)
            </h3>
            <p className="mb-4">
              If you need to view your results alongside your attendance data, or if you need to apply for a back paper based on your recent scores, you must use the secure <strong>AKTU ERP Login</strong> pathway.
            </p>
            <ol className="list-decimal pl-5 sm:pl-6 space-y-3 mb-6">
              <li><strong>Visit the ERP Portal:</strong> Go to the main ERP landing page at <a href="https://erp.aktu.ac.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">erp.aktu.ac.in</a>.</li>
              <li><strong>Select User Classification:</strong> From the dropdown menu on the login panel, select "Student".</li>
              <li><strong>Enter Credentials:</strong> Input your university Enrollment Number (this acts as your User ID) and your secure account password.</li>
              <li><strong>Two-Factor Authentication (2FA):</strong> Complete the security captcha and click login. A One-Time Password (OTP) will be sent to the mobile number and email address linked to your profile. Enter this OTP to grant access.</li>
              <li><strong>Navigate the Dashboard:</strong> Once inside your student dashboard, look at the left-hand navigation menu. Scroll down and click on the "Result Dashboard" or "Examination" section.</li>
              <li><strong>View Marksheet:</strong> Select the specific semester from the provided list. Here, you will find a highly detailed view of your performance, including credit allocations and status codes.</li>
            </ol>
          </section>

          {/* Anatomy of the Marksheet */}
          <section id="Marksheet-Details">
            <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">
              Information Available on Your AKTU Marksheet
            </h2>
            <p className="mb-4">
              The digital <strong>AKTU Marksheet</strong> contains several data points that determine your academic standing. It is crucial to review these details carefully upon downloading your result, as discrepancies must be reported to your college's examination controller immediately.
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-3 mb-6">
              <li><strong>Personal Identifiers:</strong> Your full legal name, father's name, institution name, course branch, and enrollment number.</li>
              <li><strong>Subject Codes and Titles:</strong> Each subject has a unique alphanumeric code (e.g., KCS-501 for a Computer Science 5th-semester subject). Ensure these codes match the subjects you actually studied and appeared for.</li>
              <li><strong>Internal Marks (Sessional):</strong> These are the marks awarded by your college faculty based on mid-semester class tests (CTs), assignments, class performance, and attendance.</li>
              <li><strong>External Marks (Theory):</strong> These are the marks you scored in the final end-semester written examination, evaluated by external university examiners.</li>
              <li><strong>Practical Marks:</strong> Scores awarded during your end-semester laboratory viva-voce and practical file submissions.</li>
              <li><strong>Total Marks & Letter Grades:</strong> The combined total of internal and external marks, mapped to a specific letter grade (A+, A, B, C, etc.).</li>
              <li><strong>Result Status Code:</strong> A critical indicator showing whether you have passed, failed, or been promoted under specific conditions.</li>
            </ul>
          </section>

          {/* Grading System */}
          <section id="Grading-System">
            <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">
              Decoding the AKTU Grading System: SGPA and CGPA
            </h2>
            <p className="mb-4">
              AKTU follows a Choice Based Credit System (CBCS). This means your academic performance is not just a simple average of your marks; it is a weighted average based on the "credits" assigned to each subject. A heavy core subject (like Data Structures or Thermodynamics) carries more credits (often 3 or 4) than a soft-skills lab (often 1 or 2 credits). Therefore, scoring highly in high-credit subjects has a massive impact on your final <strong>AKTU SGPA</strong>.
            </p>
            
            <h3 className="text-lg font-semibold mt-4 mb-2">Understanding SGPA (Semester Grade Point Average)</h3>
            <p className="mb-4">
              Your SGPA reflects your performance in a single specific semester. It is calculated by multiplying the grade points you earned in a subject by the credits assigned to that subject, adding these totals together for all subjects, and dividing by the total number of credits in the semester.
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-2">Understanding CGPA (Cumulative Grade Point Average)</h3>
            <p className="mb-4">
              Your <strong>AKTU CGPA</strong> is the overall reflection of your performance across all completed semesters. It provides a holistic view of your degree progress and is the primary metric viewed by recruiters during campus placements and universities during postgraduate admissions.
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-2">How to Convert AKTU CGPA to Percentage</h3>
            <p className="mb-4">
              Many corporate employers and government job applications require your marks in a percentage format rather than a 10-point CGPA scale. AKTU has an official, mathematically defined formula for this conversion. To find your percentage, multiply your CGPA by 10, and then subtract 7.5 from the total.
            </p>
            <blockquote className="bg-gray-100 p-4 border-l-4 border-gray-400 italic mb-6 rounded">
              <strong>Official Conversion Formula:</strong> Percentage = (CGPA x 10) - 7.5<br/>
              <strong>Example Calculation:</strong> If your CGPA is 8.2, the calculation is (8.2 x 10) - 7.5 = 82 - 7.5 = 74.5%.
            </blockquote>
          </section>

          {/* Result Status Codes */}
          <section id="Status-Codes">
            <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">
              Understanding Result Status Codes
            </h2>
            <p className="mb-4">
              At the bottom of your One View page, you will see a final "Result Status". Understanding these acronyms is vital for knowing your next steps.
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-3 mb-6">
              <li><strong>PASS:</strong> You have successfully cleared all subjects in the semester with the minimum required passing marks.</li>
              <li><strong>PCP (Promoted with Carry Over Paper):</strong> You have failed in one or more subjects, but you have earned enough overall credits to be promoted to the next semester. You will need to take an <strong>AKTU Back Paper Result</strong> exam for the failed subjects in the upcoming corresponding semester (odd with odd, even with even).</li>
              <li><strong>PWG (Pass With Grace):</strong> You fell short of the passing mark in a subject by a very narrow margin. The university has applied statutory grace marks to push your score to the minimum passing threshold. You do not need to rewrite this exam.</li>
              <li><strong>FAIL:</strong> You have not accumulated the required minimum credits to be promoted to the next academic year. This results in a "Year Back," requiring you to repeat the entire academic year.</li>
              <li><strong>UFM (Unfair Means):</strong> You were caught violating examination rules (e.g., cheating, using unauthorized devices). Your result is withheld, and a disciplinary committee will decide your academic fate.</li>
            </ul>
          </section>

          {/* Revaluation & Scrutiny */}
          <section id="Revaluation">
            <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">
              Revaluation and Scrutiny Process (Challenge Evaluation)
            </h2>
            <p className="mb-4">
              If you look at your <strong>AKTU Semester Result</strong> and firmly believe that your external marks do not reflect the quality of the answers you provided, the university offers a formal grievance mechanism known as "Challenge Evaluation". This is a strict, two-stage process that you must initiate through your ERP portal.
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-2">Stage 1: Viewing the Scanned Answer Script</h3>
            <p className="mb-4">
              Before you can demand a re-evaluation, AKTU requires you to actually look at your graded paper. Through the ERP portal, you pay a non-refundable fee (typically around ₹300 per subject). The university will then upload a high-resolution, digitally scanned PDF of your original answer booklet, complete with the examiner's tick marks and score allotments. You must review this PDF carefully. If you spot calculation errors, unchecked pages, or clearly under-marked answers, you can proceed to the next stage.
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-2">Stage 2: Applying for Challenge Evaluation</h3>
            <p className="mb-6">
              If you decide to challenge the grading after reviewing your scanned copy, you must apply for Stage 2. This involves paying a much larger fee (typically around ₹2,500 per subject). Your answer booklet is entirely stripped of its previous marks and assigned to two new, independent subject-matter experts for a fresh evaluation. The average of these two new scores becomes your final mark. According to AKTU rules, if your marks increase by a specific margin (usually 20% of the maximum marks), the university refunds a significant portion of your ₹2,500 fee. However, if the marks decrease, the new lower marks will be reflected on your updated marksheet.
            </p>
          </section>

          {/* Back Paper Information */}
          <section id="Back-Paper">
            <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">
              AKTU Back Paper Result & Carry Over Examinations
            </h2>
            <p className="mb-4">
              Failing a subject results in a Carry Over Paper (COP), commonly known as a back paper. Students must clear these back papers to successfully obtain their final degree.
            </p>
            <p className="mb-6">
              Exams for carry-over subjects are typically conducted alongside the regular semester exams. For example, if you fail a subject in the 3rd semester (an odd semester), you will re-write that exam alongside your regular 5th-semester exams. Once evaluated, the <strong>AKTU Back Paper Result</strong> is usually announced slightly later than the regular semester results. It is important to note that clearing a back paper will improve your SGPA for that specific past semester, which consequently recalculates and improves your overall CGPA. Final year students are sometimes offered a "Special Carry Over Examination" shortly after their 8th-semester results to help them help them clear any remaining backlogs without wasting an entire year before placements.
            </p>
          </section>

          {/* Common Issues */}
          <section id="Common-Issues">
            <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">
              Common Issues While Checking Results
            </h2>
            <p className="mb-4">
              The result declaration period is highly stressful, and technical or administrative glitches can add to the anxiety. Here are the most common issues students face and how to resolve them:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-3 mb-6">
              <li><strong>Server Crashes:</strong> Because hundreds of thousands of students hit the AKTU One View portal simultaneously, the server may display a "503 Service Unavailable" or "Gateway Timeout" error. The only solution is patience. Try checking during off-peak hours, such as late at night or early in the morning.</li>
              <li><strong>Result "Withheld":</strong> This is a terrifying status, but it usually has an administrative fix. For 2026, the most common reason for a withheld result is a failure to link your mandatory ABC (Academic Bank of Credits) ID in your ERP profile. It can also occur if your college hasn't submitted your internal practical marks to the university, or if you have outstanding tuition fees. Contact your college registrar immediately.</li>
              <li><strong>Marked 'Absent' While Present:</strong> Occasionally, a student who sat for an exam is marked absent on their digital marksheet. This usually happens if the attendance sheet at the exam center wasn't digitized properly. You must submit a written application to your college along with a copy of your admit card signed by the invigilator on the day of the exam.</li>
              <li><strong>Incorrect Name/Details:</strong> If your name or your parent's name is spelled incorrectly on the result portal, it will be printed incorrectly on your final degree. Raise a grievance ticket through the ERP portal and submit copies of your 10th-grade certificate for rectification.</li>
            </ul>
          </section>

          {/* DigiLocker and Download PDF */}
          <section id="DigiLocker">
            <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">
              How to Download Result PDF & DigiLocker Integration
            </h2>
            <p className="mb-4">
              While the AKTU One View printout is sufficient for checking your scores, it is legally considered a "provisional" web result. For official purposes—such as applying for a passport, sitting for competitive government exams, or corporate background verification—you need authenticated documents.
            </p>
            <p className="mb-6">
              AKTU has fully integrated its academic records with the Government of India's DigiLocker initiative. Once the final evaluation cycle and challenge evaluations are complete, the university pushes digital, legally verified copies of your semester mark sheets and your final degree certificate directly to your personal DigiLocker account. You can download the DigiLocker app, verify your identity, and access your digitally signed <strong>AKTU Marksheet</strong> anywhere in the world. Physical mark sheets are printed and sent to your respective colleges roughly 3 to 4 months after the online declaration of results.
            </p>
          </section>

          {/* Related Resources */}
          <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">
            Related AKTU ERP Resources
          </h2>
          <p className="mb-4">
            Managing your university life requires staying on top of several administrative tasks. Explore our related guides below to ensure you never miss a deadline or get locked out of your student portal:
          </p>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-8">
            <li>
              <Link href="/admit_card" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors underline">
                AKTU ERP Admit Card Download: Pre-Exam Instructions & Error Solutions
              </Link>
            </li>
            <li>
              <Link href="/user-id" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors underline">
                How to Find and Recover Your AKTU ERP User ID and Password
              </Link>
            </li>
            <li>
              <Link href="/circular" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors underline">
                Latest AKTU Circulars: Stay Updated on Timetables and Notifications
              </Link>
            </li>
          </ul>

          {/* FAQ Schema Component */}
          <section id="faqs" className="mt-12 border-t border-gray-300 pt-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mb-6">Frequently Asked Questions (FAQs)</h2>
            <FaqSchema faqs={faqs} />
          </section>

        </main>

        
          <TableOfContents 
            items={tocItems}
            buttonUrl="https://erp.aktu.ac.in/WebPages/OneView/OneView.aspx"
            buttonText="Check AKTU Result"/>
         

      </div>
    </div>
  );
}