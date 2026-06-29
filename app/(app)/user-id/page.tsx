import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import FaqSchema from "@/components/faqSchema";
import TableOfContents from "@/components/TableOfContents";

const tocItems = [
    { title: "What is the User ID?", href: "#What-Is-It" },
    { title: "Why Every Student Needs It", href: "#Why-You-Need-It" },
    { title: "User ID vs Roll Number", href: "#Difference" },
    { title: "Where to Find Your ID", href: "#Where-to-Find" },
    { title: "How Freshers Receive Their ID", href: "#Freshers" },
    { title: "Step-by-Step Login Process", href: "#Login-Process" },
    { title: "Recover Lost ID & Reset Password", href: "#Recovery" },
    { title: "Common Login Issues", href: "#Common-Issues" },
    { title: "Dashboard Features", href: "#Dashboard-Features" },
    { title: "Security Tips", href: "#Security" },
    { title: "FAQs", href: "#faqs" },
];

export const metadata: Metadata = {
  title: 'AKTU ERP User ID Guide 2026 | Find, Recover & Login to ERP AKTU',
  description: 'Learn what an AKTU ERP User ID is, how to recover lost credentials, reset passwords, and access the official AKTU ERP Login portal successfully.',
  keywords: [
    "AKTU ERP User ID", "ERP Login AKTU", "AKTU Student Login", "AKTU ERP Portal", 
    "AKTU Dashboard", "AKTU University", "Recover AKTU Password", "AKTU Enrollment Number",
    "AKTU Admit Card", "AKTU Result", "AKTU Circular"
  ],
  alternates: { canonical: "/user-id" },
  openGraph: {
    title: "AKTU ERP User ID Guide 2026",
    description: "Complete guide to finding your User ID and accessing the AKTU ERP portal.",
    type: "article",
  },
};

export default function UserIdPage() {
  const faqs = [
    {
      question: "What is my AKTU ERP User ID?",
      answer: "For students, your AKTU ERP User ID is your 11-digit or 13-digit university Enrollment Number, which is provided by your college registrar after your admission is confirmed."
    },
    {
      question: "How is the User ID different from my Roll Number?",
      answer: "The User ID (Enrollment Number) is used strictly for logging into the ERP portal to manage administrative tasks, fee payments, and exam forms. Your Roll Number is used specifically for examinations and checking your AKTU Result on the One View portal."
    },
    {
      question: "What is the default password for first-time AKTU ERP Login?",
      answer: "For newly admitted students, the default password is usually a combination of your registered mobile number's last four digits and your Date of Birth (DDMMYYYY), or a specific string provided by your college."
    },
    {
      question: "How do I recover a lost AKTU ERP User ID?",
      answer: "If you lose your ID, check your previous college fee receipts, your physical university ID card, or contact your college's examination cell or ERP coordinator to retrieve your enrollment number."
    },
    {
      question: "Why am I not receiving the OTP during login?",
      answer: "OTP delays are usually caused by network carrier issues or high traffic on the university servers. Ensure your registered mobile number is active. If your number has changed, you must submit a written application to your college to update it in the ERP."
    },
    {
      question: "Can I access my AKTU Admit Card without my User ID?",
      answer: "No. The admit card is securely hosted inside the student dashboard. You must have a valid User ID and password to log in and download it."
    }
  ];

  return (
    /* bg-white and text-gray-800 explicitly added to prevent system dark mode interference */
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white text-gray-800">
      <div className="flex flex-col lg:flex-row gap-8 py-6">
        
        <main className="flex-1 min-w-0 text-gray-800 leading-relaxed text-justify">
          
          {/* Header Section */}
          <section id="Header">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003366] mb-6 tracking-tight">
              AKTU ERP User ID: What Is It, How to Find It & Recover Login Credentials
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
  <span>
    Last Updated: June 22, 2026
  </span>

</div>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 sm:p-6 rounded-lg mb-8 shadow-sm">
              <p className="mb-3">
                Navigating your academic journey at Dr APJ Abdul Kalam Technical University is impossible without digital access. At the center of this digital ecosystem is your <strong>AKTU ERP User ID</strong>. Accessing the <strong>ERP Login AKTU</strong> portal is the gateway to your entire college life, from the day you enroll as a fresher to the day you download your final degree. This master key unlocks the <strong>AKTU Student Login</strong> dashboard, allowing you to manage your profile, track your attendance, pay examination fees, and download crucial documents.
              </p>
              <p>
                Despite its importance, thousands of students confuse their User ID with their examination Roll Number, leading to login lockouts, missed deadlines, and unneeded anxiety. Whether you are a newly admitted B.Tech student trying to log in for the first time, or a final-year MBA candidate who has forgotten their password, this comprehensive guide will explain everything you need to know about the <strong>AKTU ERP Portal</strong>. We cover how to locate your ID, the exact steps to reset your credentials, and how to troubleshoot the mandatory 2026 OTP verification system.
              </p>
            </div>

            {/* Visual Interface Example */}
            <div className="my-8 text-center border border-gray-200 p-4 bg-gray-50 rounded shadow-sm">
              <p className="text-sm text-gray-600 mb-4 font-semibold">Official AKTU ERP Login Screen</p>
<Image
  src="result.png"
  alt="AKTU ERP Login Portal Dashboard Screenshot"
  width={1024}
  height={498}
  className="mx-auto rounded border"
  priority
/>
              <p className="text-xs text-gray-500 mt-2">Always verify the domain name <a href="https://erp.aktu.ac.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">erp.aktu.ac.in</a> before entering your credentials.</p>
            </div>
          </section>

          {/* What is the User ID */}
          <section id="What-Is-It">
            <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">
              What is the AKTU ERP User ID?
            </h2>
            <p className="mb-4">
              When we talk about the <strong>AKTU ERP User ID</strong>, we are referring to the permanent, unique digital identifier assigned to you by the university headquarters in Lucknow. For students, this ID is synonymous with your <strong>University Enrollment Number</strong>. It is typically an 11-digit or 13-digit alphanumeric code that remains unchanged throughout the duration of your course.
            </p>
            <p className="mb-4">
              The university uses this specific ID to track your entire academic lifecycle. Every time your college uploads your attendance, every time you pay a fee, and every time you submit an exam form, the data is tagged to this specific User ID. It is distinct from the credentials used by faculty members or college registrars, who have their own specific administrative User IDs to access the back-end of the <strong>AKTU Dashboard</strong>.
            </p>
          </section>

          {/* Why You Need It */}
          <section id="Why-You-Need-It">
            <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">
              Why Every Student Needs an ERP User ID in 2026
            </h2>
            <p className="mb-4">
              Dr APJ Abdul Kalam Technical University operates one of the largest technical university networks in Asia, managing hundreds of affiliated colleges. To streamline operations, almost all administrative tasks have been digitized. Without your User ID, you are effectively disconnected from the university's grid. Here is why logging into the <strong>AKTU ERP Portal</strong> is strictly mandatory:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-3 mb-6">
              <li><strong>Examination Form Submission:</strong> You cannot sit for your mid-semester or end-semester exams without filling out the exam form. This form is only available inside your personal dashboard.</li>
              <li><strong>Downloading Hall Tickets:</strong> As detailed in our <Link href="/admit-card" className="text-blue-600 font-semibold hover:underline">AKTU Admit Card</Link> guide, your exam hall ticket is generated dynamically and securely hosted inside the ERP portal. Public downloads are not allowed.</li>
              <li><strong>Mandatory ABC ID Linking:</strong> Starting in the recent academic sessions, the Ministry of Education requires all students to link their Academic Bank of Credits (ABC ID / APAAR) to their university profile. This linking happens exclusively through the ERP login.</li>
              <li><strong>Challenge Evaluation:</strong> If you are unhappy with your <Link href="/result" className="text-blue-600 font-semibold hover:underline">AKTU Result</Link>, the only way to request a revaluation (scrutiny) and pay the associated fees is through your student account.</li>
              <li><strong>Direct Circular Updates:</strong> While general news is posted publicly, critical personalized updates regarding your specific branch or college are sent as secure notifications to your dashboard.</li>
            </ul>
          </section>

          {/* User ID vs Roll Number */}
          <section id="Difference">
            <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">
              The Crucial Difference Between User ID and Roll Number
            </h2>
            <p className="mb-4">
              The number one reason students face the dreaded "Invalid Credentials" error on the login page is mixing up their User ID with their Roll Number. While both are unique to you, the university servers use them for completely different databases.
            </p>
            
            <div className="overflow-x-auto mb-6 rounded-lg border border-gray-300 shadow-inner">
              <table className="min-w-[600px] w-full border-collapse bg-white">
                <thead>
                  <tr className="bg-[#f4f6f8]">
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold text-[#003366]">Feature</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold text-[#003366]">User ID (Enrollment Number)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold text-[#003366]">Examination Roll Number</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Primary Purpose</td>
                    <td className="border border-gray-300 px-4 py-3">Logging into the main AKTU ERP portal for administrative tasks and profile management.</td>
                    <td className="border border-gray-300 px-4 py-3">Sitting for exams, filling OMR sheets, and checking results.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Length & Format</td>
                    <td className="border border-gray-300 px-4 py-3">Typically 11 to 13 alphanumeric characters (often starting with the year of admission).</td>
                    <td className="border border-gray-300 px-4 py-3">Always a strict 13-digit numeric code.</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Portal Used On</td>
                    <td className="border border-gray-300 px-4 py-3"><code>erp.aktu.ac.in</code></td>
                    <td className="border border-gray-300 px-4 py-3"><code>erp.aktu.ac.in/WebPages/OneView/OneView.aspx</code></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Password Requirement</td>
                    <td className="border border-gray-300 px-4 py-3">Requires a secure alphanumeric password and an OTP for 2FA.</td>
                    <td className="border border-gray-300 px-4 py-3">No password required. Accessed via Date of Birth and Captcha only.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mb-4">
              <strong>Rule of Thumb:</strong> If the screen asks for a "Password," you must use your Enrollment Number (User ID). If the screen asks for your "Date of Birth," you should use your Roll Number.
            </p>
          </section>

          {/* Where to Find */}
          <section id="Where-to-Find">
            <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">
              Where to Find Your AKTU ERP User ID
            </h2>
            <p className="mb-4">
              If you are unsure what your Enrollment Number is, you do not need to panic. The university prints this identifier on several physical and digital documents that you already possess. You can locate your ID on:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-6">
              <li><strong>College Identity Card:</strong> Most affiliated colleges print both the Roll Number and the Enrollment Number directly on the front or back of the physical student ID card.</li>
              <li><strong>Previous Semester Marksheets:</strong> If you are in your second year or higher, look at any previous printed marksheet. The enrollment number is printed at the top left, right next to your personal details.</li>
              <li><strong>Fee Receipts:</strong> Check the official fee payment receipts provided by your college's accounts department during your admission process.</li>
              <li><strong>Registration Forms:</strong> The initial counseling and registration forms from UPSEE/CUET counseling will contain your preliminary registration data, which translates to your enrollment ID.</li>
            </ul>
          </section>

          {/* Freshers */}
          <section id="Freshers">
            <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">
              How Freshers Receive Their User ID
            </h2>
            <p className="mb-4">
              First-year students often experience anxiety because they do not have prior marksheets or admit cards. The process for freshers works slightly differently. During the first few weeks of the academic session, you will not have an active ERP account. 
            </p>
            <p className="mb-6">
              Your college registrar is responsible for uploading your admission data, counseling documents, and previous educational certificates to the central university node. Once the university verifies your documents, they generate an official Enrollment Number. Your college's ERP coordinator will then distribute this <strong>AKTU ERP User ID</strong> to your class, usually via an official email, a notice board printout, or directly from your class mentor. Until this happens, you cannot create an account on your own.
            </p>
          </section>

          {/* Step-by-Step Login Process */}
          <section id="Login-Process">
            <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">
              Step-by-Step AKTU ERP Login Process
            </h2>
            <p className="mb-4">
              Once you have your ID and default password from your college, logging in is a straightforward but highly secure process. The university has recently implemented Two-Factor Authentication (2FA) to protect student data from unauthorized access.
            </p>
            <ol className="list-decimal pl-5 sm:pl-6 space-y-3 mb-6">
              <li><strong>Launch the Portal:</strong> Open a modern web browser and navigate directly to <code>https://erp.aktu.ac.in</code>. Ensure you are not on a phishing site.</li>
              <li><strong>Select Your Role:</strong> On the left side of the login screen, you will see a dropdown menu. It defaults to 'Select User Type'. Click it and select <strong>"Student"</strong>. If you select 'Institute' or 'Admin', your credentials will be rejected.</li>
              <li><strong>Enter Your User ID:</strong> Carefully type in your 11 or 13-digit Enrollment Number.</li>
              <li><strong>Input Password:</strong> Type your password. If it is your first time logging in, you will be prompted to create a new, strong password immediately after the first successful login.</li>
              <li><strong>Solve the Captcha:</strong> Enter the letters and numbers exactly as they appear in the distorted image box to prove you are human.</li>
              <li><strong>OTP Verification (2FA):</strong> Click "Login". The system will immediately dispatch a 6-digit One-Time Password to your registered mobile number and your registered email address. Enter this OTP into the pop-up box to gain access to your <strong>AKTU Dashboard</strong>.</li>
            </ol>
          </section>

          {/* Recovery */}
          <section id="Recovery">
            <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">
              How to Recover a Lost ERP User ID & Reset Your Password
            </h2>
            <p className="mb-4">
              Human error happens, and forgetting passwords is the most common reason students visit their college's IT department. Fortunately, the <strong>AKTU Student Login</strong> system has a robust self-service recovery mechanism.
            </p>
            
            <h3 className="text-lg font-semibold mt-4 mb-2">Recovering a Lost User ID</h3>
            <p className="mb-4">
              Unlike a password, you cannot automatically "reset" a forgotten User ID via an email link. Because the ID is your permanent enrollment record, the only way to recover it if you have lost all physical documents is to approach your college's administrative office. Provide them with your name, father's name, branch, and admission year, and the registrar can look up your Enrollment Number in the institutional database.
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-2">Steps to Reset Your Password</h3>
            <p className="mb-4">
              If you know your User ID but have forgotten your password, follow these steps:
            </p>
            <ol className="list-decimal pl-5 sm:pl-6 space-y-3 mb-6">
              <li>Navigate to the main login page at <code>erp.aktu.ac.in</code>.</li>
              <li>Look directly below the login button and click on the <strong>"Password Recovery"</strong> or <strong>"Forgot Password?"</strong> link.</li>
              <li>The system will ask you to provide your <strong>User ID (Enrollment Number)</strong>, your registered mobile number, and your registered email address. These must exactly match the data stored in your profile.</li>
              <li>If the data matches, the system will send a secure password reset link to your email inbox.</li>
              <li>Click the link, create a new alphanumeric password (using at least one capital letter, one number, and one special character), and save the changes. You can now log in normally.</li>
            </ol>
          </section>

          {/* Common Issues */}
          <section id="Common-Issues">
            <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">
              Common Login Issues and Technical Solutions
            </h2>
            <p className="mb-4">
              Even with the correct credentials, you might encounter technical friction when trying to access your student profile. Here are the most frequent roadblocks and how to bypass them:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-3 mb-6">
              <li><strong>OTP Not Arriving:</strong> This is the most widespread issue, especially during the days when exam forms are released. The university's SMS gateway can become congested. If the text message fails, immediately check your registered email inbox (including the spam folder), as the OTP is delivered there simultaneously. If both fail, wait 15 minutes before requesting a new code to avoid triggering a spam-lock.</li>
              <li><strong>"Invalid User ID or Password" Error:</strong> First, ensure Caps Lock is off. Second, double-check that you selected "Student" from the user type dropdown. If it defaults back to 'Institute', it will reject your student ID. Third, ensure you aren't accidentally typing your Roll Number.</li>
              <li><strong>Mobile Number Changed:</strong> If you lost your old SIM card or changed your phone number, you will not be able to receive the 2FA OTP. You cannot update this yourself from the outside. You must write an application to your college Director or Registrar, asking them to update your mobile number in the central ERP via their administrative login.</li>
              <li><strong>Account Locked:</strong> If you enter the wrong password more than three to five times consecutively, the system will temporarily lock your account to prevent brute-force hacking. Simply wait 30 to 60 minutes for the automatic timer to reset, or use the 'Forgot Password' link to bypass the lock.</li>
            </ul>
          </section>

          {/* Dashboard Features */}
          <section id="Dashboard-Features">
            <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">
              Exploring the AKTU ERP Dashboard Features
            </h2>
            <p className="mb-4">
              Once you successfully log in using your <strong>AKTU ERP User ID</strong>, you unlock a comprehensive suite of academic tools. The dashboard acts as your digital campus. Familiarize yourself with these key sections:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-3 mb-6">
              <li><strong>My Profile:</strong> This section contains your digitized personal data, including your photograph, signature, Aadhaar details, and the newly mandated ABC ID linking status. Ensure this data is 100% accurate, as it prints directly onto your final degree.</li>
              <li><strong>Examination Dashboard:</strong> The most critical tab during the end of the semester. This is where you fill out exam forms, select your elective subjects, pay your examination fees via the integrated payment gateway, and eventually download your admit card.</li>
              <li><strong>Result Dashboard:</strong> A secure archive of your past academic performance. While One View is great for quick checks, the ERP result dashboard allows you to apply for Challenge Evaluation and track the status of your re-checking requests.</li>
              <li><strong>Circulars & Notifications:</strong> A personalized inbox that mirrors the <Link href="/circular" className="text-blue-600 font-semibold hover:underline">AKTU Circular</Link> page, but highlights notices specifically relevant to your course code and current semester.</li>
            </ul>
          </section>

          {/* Security */}
          <section id="Security">
            <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">
              Security Best Practices for Your Student Portal
            </h2>
            <p className="mb-4">
              Your <strong>AKTU ERP Portal</strong> contains highly sensitive personal, academic, and financial data. Treat your User ID and password with the same level of security as your banking details. 
            </p>
            <p className="mb-6">
              Never share your password with friends or juniors, even if they offer to "fill out your exam form for you." Cybercafes near college campuses are notorious for logging keystrokes; if you must use a public computer to download your admit card, ensure you log out completely and clear the browser cache before leaving. Lastly, make it a habit to change your portal password at the beginning of every new academic year to minimize unauthorized access risks.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mt-8 mb-4 border-b pb-2">
              Related AKTU ERP Resources
            </h2>
            <p className="mb-4">
              Mastering your university administration means knowing where to find the right information. Check out our other comprehensive guides below:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-8">
              <li>
                <Link href="/admit-card" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors underline">
                  AKTU Admit Card Guide: Login Steps, Exam Rules, and Error Solutions
                </Link>
              </li>
              <li>
                <Link href="/result" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors underline">
                  AKTU Result 2026: Check SGPA, CGPA, and Marksheets via One View
                </Link>
              </li>
              <li>
                <Link href="/circular" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors underline">
                  AKTU Circular & Notices: Stay Updated with University Announcements
                </Link>
              </li>
            </ul>
          </section>

          {/* FAQ Schema Component */}
          <section id="faqs" className="mt-12 border-t border-gray-300 pt-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mb-6">Frequently Asked Questions (FAQs)</h2>
            <FaqSchema faqs={faqs} />
          </section>

        </main>

       
          <TableOfContents 
            items={tocItems}
            buttonUrl="https://erp.aktu.ac.in/"
            buttonText="Login to AKTU ERP"
          />
       

      </div>
    </div>
  );
}