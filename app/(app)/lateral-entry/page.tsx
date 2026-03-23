import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Map, Target, HelpCircle, AlertCircle, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "AKTU Lateral Entry (LEET) Admission 2026 | Complete B.Tech Guide",
  description: "The ultimate guide for BTEUP diploma students transitioning to AKTU B.Tech via Lateral Entry. Learn about CUET eligibility, bridge courses, and branch changes.",
  keywords: [
    "AKTU Lateral Entry",
    "AKTU LEET 2026",
    "BTEUP to AKTU transition",
    "B.Tech Lateral Entry UP",
    "CUET Lateral Entry AKTU",
    "AKTU Bridge Courses"
  ],
  robots: { index: true, follow: true },
};

export default function LateralEntryGuide() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 bg-white min-h-screen">
      {/* Header Section */}
      <div className="mb-12 border-b border-gray-200 pb-8">
        <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
          Admission Guide
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          The Complete Guide to AKTU Lateral Entry (B.Tech LEET)
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Everything you need to know about skipping the first year, transitioning from a diploma to a degree, and surviving your 3rd semester at Dr. A.P.J. Abdul Kalam Technical University.
        </p>
      </div>

      <article className="prose prose-lg prose-blue max-w-none text-gray-700 space-y-10">
        
        {/* Section 1: Introduction */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Award className="w-6 h-6 text-blue-600" />
            What is Lateral Entry (LEET)?
          </h2>
          <p>
            Lateral Entry in Engineering & Technology (LEET) is a fast-track admission pathway that allows students who have completed a 3-year engineering diploma or a B.Sc. degree to enter directly into the <strong>second year (3rd Semester)</strong> of a B.Tech program. 
          </p>
          <p className="mt-4">
            At AKTU, this pathway is highly popular. It saves you a full academic year and allows you to bypass the foundational first-year subjects (such as basic Physics, Chemistry, and Electrical Engineering) so you can dive straight into your core departmental subjects.
          </p>
        </section>

        {/* Section 2: Eligibility & CUET */}
        <section className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-600" />
            Eligibility & The CUET Exam
          </h2>
          <p>
            Historically, UPSEE (Uttar Pradesh State Entrance Examination) was the gateway for LEET. However, AKTU now conducts lateral entry admissions through the <strong>CUET (Common University Entrance Test)</strong>.
          </p>
          <ul className="list-disc pl-6 space-y-3 mt-4 text-gray-800">
            <li><strong>For Diploma Holders:</strong> You must have passed a 3-year diploma in engineering from an AICTE-approved institution (like BTEUP) with a minimum aggregate (usually 45% for General/OBC and 40% for SC/ST).</li>
            <li><strong>For B.Sc. Graduates:</strong> You must have passed B.Sc. from a recognized university with Mathematics as a subject in the 12th standard.</li>
            <li><strong>Domain Subjects:</strong> When filling out the CUET form, you must select the specific domain subjects required by AKTU for lateral entry (typically Engineering Graphics/Computer Science and General Test, but always verify current year brochures).</li>
          </ul>
        </section>

        {/* Section 3: The Branch Change Strategy (SEO Goldmine) */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The BTEUP to AKTU Transition & Branch Changes</h2>
          <p>
            A massive percentage of lateral entry students come from the Board of Technical Education Uttar Pradesh (BTEUP). The transition from a polytechnic environment to an AKTU-affiliated engineering college is significant. The syllabus is vastly deeper, the mathematics is highly theoretical, and the exams require strategic answer-writing.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-600 p-5 mt-6 rounded-r-lg">
            <h3 className="text-lg font-bold text-blue-900 mb-2">Changing Branches: The Cross-Discipline Leap</h3>
            <p className="text-blue-800 text-sm md:text-base leading-relaxed">
              Many students use Lateral Entry to pivot their careers toward high-demand fields. For instance, shifting from a <strong>Diploma in Civil Engineering</strong> to a <strong>B.Tech in Computer Science and Engineering (CSE)</strong> is a popular but intense move. 
              <br/><br/>
              Because you skip the first year, you miss out on foundational courses like 'Programming for Problem Solving' (C Language). You will be thrown directly into 3rd-semester Data Structures and Object-Oriented Programming (OOPs). If you are making a cross-branch leap, spending the summer after your diploma mastering basic coding concepts is absolutely essential to survive the 3rd semester.
            </p>
          </div>
        </section>

        {/* Section 4: Bridge Courses */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Map className="w-6 h-6 text-blue-600" />
            Navigating AKTU Bridge Courses
          </h2>
          <p>
            To ensure lateral entry students are on equal footing with regular students, AKTU mandates clearing specific <strong>audit (non-credit) bridge courses</strong>. While their marks aren't added to your final CGPA, failing to clear them will prevent you from getting your final degree.
          </p>
          <ul className="space-y-4 mt-6">
            <li className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <strong className="text-gray-900">Engineering Mathematics (Maths IV):</strong> Diploma math is highly practical. AKTU B.Tech math is theoretical and complex. Do not take this subject lightly; it is the most common back-paper for LEET students.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <strong className="text-gray-900">Universal Human Values (UHV):</strong> A compulsory theoretical subject. It is highly scoring if you understand the concepts and write point-wise answers.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <strong className="text-gray-900">Environmental Studies:</strong> Another mandatory non-credit course that is easily cleared using Quantum series books.
              </div>
            </li>
          </ul>
        </section>

        {/* Section 5: FAQs (For Rich Snippets) */}
        <section className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden mt-12">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-gray-600" />
              Frequently Asked Questions (FAQ)
            </h2>
          </div>
          <div className="p-6 space-y-6">
            <div>
              <h3 className="font-bold text-gray-900">Is it hard to score a high SGPA in Lateral Entry?</h3>
              <p className="text-gray-600 mt-1 text-sm">The 3rd semester is usually the hardest because you are adapting to the AKTU exam pattern. Once you understand how to use previous year questions (PYQs) and write answers with proper diagrams, scoring an 8.0+ SGPA becomes highly manageable.</p>
            </div>
            <hr className="border-gray-100" />
            <div>
              <h3 className="font-bold text-gray-900">Can B.Sc students take admission in any B.Tech branch?</h3>
              <p className="text-gray-600 mt-1 text-sm">Yes, B.Sc graduates can choose any branch, provided they clear the required entrance cut-offs and have studied Mathematics at the 10+2 level. However, they must also clear Engineering Graphics / Engineering Drawing as a bridge course.</p>
            </div>
            <hr className="border-gray-100" />
            <div>
              <h3 className="font-bold text-gray-900">Do companies differentiate between regular and lateral entry students during placements?</h3>
              <p className="text-gray-600 mt-1 text-sm">No. Top IT and core companies visiting AKTU campuses care about your skills, CGPA, and coding proficiency. Your lateral entry status does not negatively impact your placement opportunities.</p>
            </div>
          </div>
        </section>

      </article>

      <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col items-center justify-center text-center space-y-4">
         <p className="text-gray-500 text-sm">Ready to check the syllabus for your new branch?</p>
         <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-flex items-center gap-2 shadow-md">
            <BookOpen className="w-5 h-5" />
            Go to Student Dashboard
         </Link>
      </div>
    </div>
  );
}