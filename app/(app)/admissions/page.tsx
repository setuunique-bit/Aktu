import type { Metadata } from "next";
// FIX: Import the Footer component you created earlier
import Footer from "../../../components/Footer"

import {
  BookOpen,
  GraduationCap,
  Code,
  Beaker,
  Briefcase,
  Cpu,
  ArrowRight,
  HelpCircle,
  Calendar, // Added for "Important Dates" section
} from "lucide-react";

// 1. BEST KEYWORDS FOR SEO (High Search Volume)
export const metadata: Metadata = {
  title: "AKTU Admission 2026 Date | UPTAC Registration & Course Fees",
  description:
    "Official update on AKTU Admission 2026. Check UPTAC counselling dates, B.Tech fee structure, MBA syllabus, and direct admission process for private colleges.",
  keywords: [
    "AKTU Admission 2026 Last Date",     // High urgency keyword
    "UPTAC Counselling 2026 Registration", // Official process keyword
    "AKTU Fee Structure 2026",           // Money-related keyword (Very high search)
    "AKTU B.Tech Syllabus Download",     // Resource keyword
    "Direct Admission in AKTU Colleges", // Alternative path keyword
  ],
  openGraph: {
    title: "AKTU Admission 2026 - Dates & Fees",
    description: "Complete guide to UPTAC Counselling and Direct Admissions.",
    type: "article",
  },
};

export default function Admissions() {
  // 2. UPDATED SCHEMA (Includes "Important Dates" to appear in Google Snippets)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the last date for AKTU admission 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The UPTAC counselling registration typically starts in June 2026 after JEE Mains results are declared.",
            },
          },
          {
            "@type": "Question",
            "name": "What is the fee for B.Tech in AKTU private colleges?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The average tuition fee ranges from ₹80,000 to ₹1.2 Lakh per year, excluding hostel charges.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Inject SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="max-w-4xl mx-auto space-y-10 pt-6 px-4 flex-grow w-full">
        {/* Header */}
        <header className="text-center space-y-3 border-b border-gray-100 pb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            AKTU Admission 2026: Dates, Fees & Process
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Get the latest updates on <strong>UPTAC Counselling</strong>, 
            <strong> Fee Structure</strong>, and admission deadlines for Dr. A.P.J. Abdul Kalam Technical University.
          </p>
        </header>

        {/* NEW SECTION: IMPORTANT DATES (Google loves "Dates" content) */}
        <section className="bg-blue-50 p-5 rounded-xl border border-blue-100">
          <h2 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Expected Admission Schedule 2026
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
             <DateBox label="JEE Mains Exam" value="Jan & April 2026" />
             <DateBox label="CUET (UG/PG) Exam" value="May 2026" />
             <DateBox label="UPTAC Registration" value="June 2026 (Tentative)" />
          </div>
        </section>

        {/* 1. ENGINEERING (B.Tech) */}
        <section aria-label="Engineering Course Details">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Cpu className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Engineering (B.Tech)</h2>
              <p className="text-xs text-gray-500 font-medium">4 Years • Avg Fee: ₹1 Lakh/Yr</p>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-600 px-5 py-3 flex justify-between items-center text-white">
              <span className="text-sm font-semibold">Path: JEE Mains</span>
              <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded">Counselling Code: UPTAC</span>
            </div>
            
            <div className="p-5 space-y-4">
              <p className="text-sm text-gray-600 leading-relaxed">
                Admission to top colleges like <strong>IET Lucknow</strong> and <strong>JSS Noida</strong> is based strictly on JEE Mains All India Rank.
              </p>
              
              <div>
                <h3 className="text-sm font-bold text-gray-800 mb-2">Popular Branches:</h3>
                <div className="flex flex-wrap gap-2">
                  <BranchTag label="CSE (Core)" />
                  <BranchTag label="CSE (AI & ML)" />
                  <BranchTag label="IT" />
                  <BranchTag label="Electronics" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. MANAGEMENT (MBA) */}
        <section aria-label="MBA Course Details">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 bg-green-50 rounded-lg">
              <Briefcase className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Management (MBA)</h2>
              <p className="text-xs text-gray-500 font-medium">2 Years • Avg Fee: ₹90k/Yr</p>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-green-600 px-5 py-3 flex justify-between items-center text-white">
              <span className="text-sm font-semibold">Path: CUET (PG)</span>
              <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded">Code: MBA</span>
            </div>
            
            <div className="p-5">
              <p className="text-sm text-gray-600 leading-relaxed">
                Direct admission is available in many private colleges for remaining seats. 
                Top specializations include <strong>Marketing, HR, and Finance</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* 3. PHARMACY (B.Pharm) */}
        <section aria-label="Pharmacy Course Details">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 bg-orange-50 rounded-lg">
              <Beaker className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Pharmacy (B.Pharm)</h2>
              <p className="text-xs text-gray-500 font-medium">4 Years • Avg Fee: ₹95k/Yr</p>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
             <div className="bg-orange-500 px-5 py-3 flex justify-between items-center text-white">
              <span className="text-sm font-semibold">Path: CUET (UG)</span>
              <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded">PCB / PCM Group</span>
            </div>
            
            <div className="p-5">
              <p className="text-sm text-gray-600 leading-relaxed">
                 Mandatory course for drug license. Admission via CUET (UG). 
                 Top colleges: <strong>DIPSAR (via central)</strong> and AKTU affiliated institutes.
              </p>
            </div>
          </div>
        </section>

        {/* 5. FAQ SECTION (Targeting "Fee" & "Last Date" queries) */}
        <section className="bg-gray-50 p-6 rounded-2xl border border-gray-200 mt-10">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-gray-600" />
            Admission FAQs 2026
          </h2>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-sm font-bold text-gray-800">What is the AKTU B.Tech Fee Structure?</h3>
              <p className="text-xs text-gray-600 mt-1">
                Govt colleges charge approx ₹60,000 - ₹80,000 per year. Private colleges in Noida/Ghaziabad charge between ₹1.1 Lakh to ₹1.6 Lakh per year.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-sm font-bold text-gray-800">Can I get Direct Admission?</h3>
              <p className="text-xs text-gray-600 mt-1">
                Yes, 15% of seats in private colleges are reserved for "Management Quota" admission based on 12th Class marks (PCM).
              </p>
            </div>
          </div>
        </section>

        {/* Lateral Entry Info */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 text-center mt-8">
          <h3 className="font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
            <ArrowRight className="w-4 h-4 text-blue-600" /> Lateral Entry (B.Tech 2nd Year)
          </h3>
          <p className="text-xs text-gray-600 max-w-lg mx-auto leading-relaxed">
            Diploma & B.Sc graduates can join directly in 2nd Year. 
            Separate counselling is held for <strong>CUET (UG) Lateral Entry</strong> candidates.
          </p>
        </div>
      </main>

      {/* FOOTER ADDED HERE */}
      <Footer />
    </div>
  );
}

// ---------------------------------------------------------
// Helper Components
// ---------------------------------------------------------

function BranchTag({ label }: { label: string }) {
  return (
    <span className="bg-gray-50 border border-gray-200 text-gray-600 px-3 py-1 rounded-md text-[10px] md:text-xs font-semibold hover:border-gray-400 hover:bg-gray-100 transition-colors cursor-default">
      {label}
    </span>
  );
}

function DateBox({ label, value }: { label: string, value: string }) {
  return (
     <div className="bg-white p-3 rounded-lg border border-blue-100 text-center">
        <p className="text-xs text-gray-500 font-semibold uppercase">{label}</p>
        <p className="text-sm font-bold text-blue-800 mt-1">{value}</p>
     </div>
  );
}