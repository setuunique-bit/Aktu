import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../../components/Footer";
import {
  MapPin,
  Building2,
  Users,
  Calendar,
  Phone,
  Mail,
  Globe,
  Award,
  UserCheck,
  Landmark,
} from "lucide-react";

// SEO METADATA: Targeting "Vice Chancellor", "Address", "Registrar"
export const metadata: Metadata = {
  title: "University Profile | Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
  description:
    "Official profile of AKTU (formerly UPTU). Details on Vice Chancellor Prof. J.P. Pandey, Registrar Ms. Reena Singh, Jankipuram Campus Address, and Contact Numbers.",
  keywords: [
    "AKTU Vice Chancellor Name",
    "AKTU Registrar Contact",
    "AKTU Official Address Jankipuram",
    "AKTU Head Office Pin Code",
    "UPTU History",
  ],
};

export default function UniversityInfo() {
  // SCHEMA: EducationalOrganization for Google Knowledge Graph
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    "name": "Dr. A.P.J. Abdul Kalam Technical University",
    "alternateName": ["AKTU", "UPTU"],
    "url": "https://aktu.ac.in",
    "foundingDate": "2000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sec-11, Jankipuram Vistar",
      "addressLocality": "Lucknow",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "226031",
      "addressCountry": "IN",
    },
    "employees": [
      {
        "@type": "Person",
        "name": "Prof. J.P. Pandey",
        "jobTitle": "Vice Chancellor",
      },
      {
        "@type": "Person",
        "name": "Ms. Reena Singh",
        "jobTitle": "Registrar",
      },
    ],
  };

  return (
    <article className="bg-white min-h-screen pb-12">
       
      {/* Inject Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto space-y-12 pt-6">
        {/* 1. Header Section */}
        <header className="text-center space-y-4 border-b border-gray-100 pb-8">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider">
            <Landmark className="w-3 h-3" />
            State University (Govt. of U.P.)
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Dr. A.P.J. Abdul Kalam Technical University
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            Formerly known as <strong>Uttar Pradesh Technical University (UPTU)</strong>. 
            Established in 2000, it is the largest technical university in Asia 
            affiliating over 750 colleges across Uttar Pradesh.
          </p>
        </header>

        {/* 2. Key Authorities (Leadership) */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-blue-600" />
            University Leadership
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Vice Chancellor Card */}
            <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <span className="text-xl font-bold text-blue-700">VC</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Prof. J.P. Pandey</h3>
                  <p className="text-sm text-blue-600 font-medium">Hon&apos;ble Vice Chancellor</p>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                    Leading the university&apos;s academic and administrative vision. 
                    Contact: <span className="font-mono text-gray-700">vc@aktu.ac.in</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Registrar Card */}
            <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <span className="text-xl font-bold text-green-700">R</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Ms. Reena Singh (IAS)</h3>
                  <p className="text-sm text-green-600 font-medium">Registrar</p>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                    Responsible for administration, affiliations, and records. 
                    Contact: <span className="font-mono text-gray-700">registrar@aktu.ac.in</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Official Contact & Location */}
        <section className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-red-600" />
            Headquarters & Contact
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Postal Address</p>
                <p className="text-gray-600 leading-relaxed">
                  Sec-11, Jankipuram Vistar,<br />
                  Lucknow, Uttar Pradesh,<br />
                  India - <span className="font-mono font-bold text-gray-800">226031</span>
                </p>
              </div>
              
              <div>
                <p className="font-semibold text-gray-900 mb-1">General Helpline</p>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>0522-2771079</span>
                </div>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-1">Student Welfare</p>
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:dean.sw@aktu.ac.in" className="hover:text-blue-600 hover:underline">
                    dean.sw@aktu.ac.in
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map Embed (Placeholder visual) */}
            <div className="bg-white p-2 rounded-xl border border-gray-200 h-full min-h-[150px] flex flex-col items-center justify-center text-center">
               <div className="bg-blue-50 p-3 rounded-full mb-2">
                 <MapPin className="w-6 h-6 text-blue-600" />
               </div>
               <p className="text-xs font-medium text-gray-900">Jankipuram Vistar Campus</p>
               <a 
                 href="https://maps.google.com/?q=AKTU+Lucknow+226031" 
                 target="_blank"
                 className="text-xs text-blue-600 underline mt-1"
               >
                 View on Google Maps
               </a>
            </div>
          </div>
        </section>

        {/* 4. University Statistics */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-600" />
            Institutional Overview
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatBox label="Established" value="2000" />
            <StatBox label="Affiliated Colleges" value="750+" />
            <StatBox label="Students" value="4 Lakh+" />
            <StatBox label="Main Campus" value="Lucknow" />
          </div>
        </section>

        {/* 5. Constituent Institutes */}
        <section className="space-y-4">
           <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-indigo-600" />
            Constituent Institutes
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            These are the direct government institutes run within the university departments:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="https://ietlucknow.ac.in/" target="_blank" className="block p-4 rounded-lg border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all group">
               <h3 className="font-bold text-gray-900 group-hover:text-blue-700">IET Lucknow</h3>
               <p className="text-xs text-gray-500">Institute of Engineering & Technology</p>
            </Link>
            <Link href="https://foa.aktu.ac.in/" target="_blank" className="block p-4 rounded-lg border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all group">
               <h3 className="font-bold text-gray-900 group-hover:text-blue-700">FOAP Lucknow</h3>
               <p className="text-xs text-gray-500">Faculty of Architecture & Planning</p>
            </Link>
             <Link href="#" className="block p-4 rounded-lg border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all group">
               <h3 className="font-bold text-gray-900 group-hover:text-blue-700">CAS Lucknow</h3>
               <p className="text-xs text-gray-500">Centre for Advanced Studies</p>
            </Link>
             <Link href="#" className="block p-4 rounded-lg border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all group">
               <h3 className="font-bold text-gray-900 group-hover:text-blue-700">UPID Noida</h3>
               <p className="text-xs text-gray-500">U.P. Institute of Design</p>
            </Link>
          </div>
        </section>
         <div><Footer/></div>
      </div>
    </article>
   
  );
  
}


// Helper Component for Stats
function StatBox({ label, value }: { label: string, value: string }) {
  return (
    <div className="bg-white p-4 rounded-xl border border-gray-200 text-center shadow-sm">
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mt-1">{label}</p>
    </div>
  );
}