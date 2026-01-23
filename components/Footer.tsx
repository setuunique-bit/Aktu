"use client";

import Link from "next/link";
import { GraduationCap, ExternalLink, Heart } from "lucide-react";

export default function Footer() {
  // SEO: Structured Data to tell Google this is an Organization/Service
  const currentYear = new Date().getFullYear();
  
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "AKTU Student Overview",
    "description": "Unofficial resource portal for Dr. A.P.J. Abdul Kalam Technical University students providing ERP, OneView, and Syllabus access.",
    "url": "https://your-domain.com", // Replace with your actual domain later
    "foundingDate": "2026",
    "areaServed": "India",
  };

  return (
    <footer aria-label="Site Footer" className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-12 rounded-t-3xl relative overflow-hidden">
      
      {/* SEO: Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm relative z-10">
        
        {/* Column 1: Brand & Rich Keywords */}
        <div className="space-y-4">
          <Link href="/" className="inline-block" aria-label="AKTU Student Hub Home">
            <h3 className="text-white text-lg font-bold flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-blue-400" />
              AKTU Student Hub
            </h3>
          </Link>
          <p className="leading-relaxed text-gray-400 text-xs">
            Your fastest unofficial gateway to <strong>Dr. A.P.J. Abdul Kalam Technical University (AKTU)</strong>. 
            We simplify access to <strong>AKTU OneView Results {currentYear}</strong>, ERP Dashboard, 
            and <strong>B.Tech/MBA Syllabus</strong> for all semesters.
          </p>
        </div>

        {/* Column 2: Official Quick Links (Semantic <nav>) */}
        <nav className="space-y-3" aria-label="Official Resources">
          <h4 className="text-white font-semibold">Official Resources</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link 
                href="https://erp.aktu.ac.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Open Official AKTU ERP Portal"
                className="hover:text-blue-400 transition-colors flex items-center gap-2"
              >
                <ExternalLink className="w-3 h-3" /> AKTU ERP Login
              </Link>
            </li>
            <li>
              <Link 
                href="https://oneview.aktu.ac.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Check AKTU OneView Results"
                className="hover:text-blue-400 transition-colors flex items-center gap-2"
              >
                <ExternalLink className="w-3 h-3" /> OneView Results
              </Link>
            </li>
            <li>
              <Link 
                href="https://aktu.ac.in/circulars.html" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Read Latest AKTU Circulars"
                className="hover:text-blue-400 transition-colors flex items-center gap-2"
              >
                <ExternalLink className="w-3 h-3" /> Latest Circulars
              </Link>
            </li>
          </ul>
        </nav>

        {/* Column 3: Site Links & Disclaimer */}
        <nav className="space-y-3" aria-label="Legal and Support">
          <h4 className="text-white font-semibold">Legal & Support</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/privacy-policy" className="hover:text-blue-400 transition-colors" title="View Privacy Policy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-blue-400 transition-colors" title="View Terms of Use">
                Terms of Use
              </Link>
            </li>
            <li className="text-gray-500 pt-2 text-[10px] leading-tight">
              ⚠️ <strong>Disclaimer:</strong> We are not affiliated with AKTU or UPTU. 
              This is a student-made utility tool. All logos & trademarks belong to their respective owners.
            </li>
          </ul>
        </nav>
      </div>

      {/* Bottom Bar: Copyright */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center relative z-10">
        <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
          © {currentYear} AKTU Student Hub. Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for Engineers.
        </p>
      </div>
    </footer>
  );
}