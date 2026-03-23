import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Disclaimer | AKTU Student Overview",
  description: "Official disclaimer stating aktu-erp.in is an independent, unofficial platform.",
  robots: { index: true, follow: true },
};

export default function Disclaimer() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 bg-white min-h-screen">
      <div className="mb-10 text-center">
        <div className="flex justify-center mb-4">
          <AlertTriangle className="w-12 h-12 text-red-600" />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Disclaimer</h1>
      </div>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <section className="bg-red-50 p-6 rounded-lg border border-red-200">
          <h2 className="text-xl font-bold text-red-900 mb-3">Not Affiliated with AKTU</h2>
          <p className="text-red-800 font-medium text-lg leading-relaxed">
            <strong>aktu-erp.in</strong> is an independent, privately-run informational web portal. We are absolutely NOT affiliated with, endorsed by, or in any way officially connected to Dr. A.P.J. Abdul Kalam Technical University (AKTU), Uttar Pradesh, the UP Government, or any of its affiliated colleges.
          </p>
          <p className="mt-4 text-red-800">
            The official university website is <a href="https://aktu.ac.in" target="_blank" rel="nofollow" className="underline font-bold">aktu.ac.in</a>. All official ERP and OneView actions must be performed on the official university domains.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Purpose of this Website</h2>
          <p>
            This website was created purely as a navigational tool to help engineering and management students quickly find public resources, syllabus PDFs, and official login portals. The names, logos, and marks of AKTU are the property of their respective owners and are used here purely for identification and educational reference purposes under Fair Use.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Accuracy of Information</h2>
          <p>
            While we try to keep information like the syllabus and circulars up to date, the university frequently changes its policies. We make no guarantees regarding the accuracy of exam dates, grading structures, or syllabus contents. Always confirm with your college administration.
          </p>
        </section>
      </div>
      
      <div className="mt-12 pt-8 border-t border-gray-200 text-center">
         <Link href="/" className="text-blue-600 hover:underline font-medium">&larr; Return Home</Link>
      </div>
    </div>
  );
}