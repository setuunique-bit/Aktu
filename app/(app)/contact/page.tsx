import type { Metadata } from "next";
import { Mail, MapPin, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | AKTU Student Overview",
  description: "Get in touch with the AKTU Student Overview team for suggestions, bug reports, or queries.",
  robots: { index: true, follow: true },
};

export default function ContactUs() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 bg-white min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have a suggestion, found a broken link, or just want to say hi? We'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Reach Out</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Email Us</p>
                  <a href="mailto:admin@aktu-erp.in" className="text-blue-600 hover:underline">admin@aktu-erp.in</a>
                  <p className="text-sm text-gray-500 mt-1">We usually respond within 24-48 hours.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-gray-600">Saharanpur, Uttar Pradesh<br/>India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 flex items-start gap-3">
             <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
             <p className="text-sm text-yellow-800">
               <strong>Note:</strong> We cannot help with official university account issues, forgotten ERP passwords, or grading errors. Please contact your college administration for official matters.
             </p>
          </div>
        </div>

        {/* Simple Contact Form (UI only - links to email for now) */}
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
          <form action="mailto:admin@aktu-erp.in" method="GET" className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input 
                type="text" 
                name="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="e.g. Broken Link on Syllabus Page"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea 
                name="body"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
                placeholder="How can we help?"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Open in Email App
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}