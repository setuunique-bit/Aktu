import type { Metadata } from "next";
import Link from "next/link";
import { Code, GraduationCap, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | AKTU Student Overview",
  description: "Learn more about the mission behind AKTU Student Overview and how we help engineering students.",
  robots: { index: true, follow: true },
};

export default function AboutUs() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 bg-white min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">About Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Simplifying the university experience for thousands of engineering and management students across Uttar Pradesh.
        </p>
      </div>

      <div className="space-y-12 text-gray-700 leading-relaxed">
        {/* The Story Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="mb-4">
            Navigating university portals, hunting for the right syllabus, and keeping track of circulars can be overwhelming. <strong>aktu-erp.in</strong> was born out of a genuine need to organize this chaos. 
          </p>
          <p>
            As a current B.Tech Computer Science student who previously navigated the Board of Technical Education (BTEUP) for a Diploma in Civil Engineering, I understand firsthand the challenges students face. Whether it's the confusion of lateral entry admissions or just trying to check OneView results without server timeouts, the struggle is real. This platform was built to provide a fast, reliable, and mobile-friendly hub for all crucial university links.
          </p>
        </section>

        {/* The Mission Section */}
        <section className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 text-center">
            <div className="flex justify-center mb-4"><GraduationCap className="w-10 h-10 text-blue-600" /></div>
            <h3 className="font-bold text-gray-900 mb-2">Student First</h3>
            <p className="text-sm text-gray-600">Built by a student, for students. We prioritize fast access to the tools you actually need before exams.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl border border-green-100 text-center">
            <div className="flex justify-center mb-4"><Code className="w-10 h-10 text-green-600" /></div>
            <h3 className="font-bold text-gray-900 mb-2">Modern Tech</h3>
            <p className="text-sm text-gray-600">Driven by a passion for full-stack development and cloud computing to ensure this site stays incredibly fast.</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 text-center">
            <div className="flex justify-center mb-4"><Users className="w-10 h-10 text-purple-600" /></div>
            <h3 className="font-bold text-gray-900 mb-2">Community Driven</h3>
            <p className="text-sm text-gray-600">We continuously update our resources based on what the campus community is searching for.</p>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Transparency Note</h2>
          <p className="text-sm">
            Please note that this is an independent, unofficial platform. We curate public links and resources to help peers. Always verify critical academic dates and official notices on the official AKTU university website.
          </p>
        </section>
      </div>
      
      <div className="mt-12 pt-8 border-t border-gray-200 text-center">
         <Link href="/contact" className="text-blue-600 hover:underline font-medium">
            Get in touch with us &rarr;
         </Link>
      </div>
    </div>
  );
}