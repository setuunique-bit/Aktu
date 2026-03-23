import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | AKTU Student Overview",
  description: "Terms and conditions for using the AKTU Student Overview website.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfUse() {
  const lastUpdated = "March 23, 2026";

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 bg-white min-h-screen">
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Terms of Use</h1>
        <p className="text-gray-500">Last Updated: {lastUpdated}</p>
      </div>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        {/* Section 1 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing and using <strong>aktu-erp.in</strong> (the "Website"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this Website.
          </p>
        </section>

        {/* Section 2 - CRUCIAL FOR ADSENSE */}
        <section className="bg-blue-50 p-6 rounded-lg border border-blue-100">
          <h2 className="text-xl font-semibold text-blue-900 mb-3">2. Important Disclaimer (Not Official)</h2>
          <p className="text-blue-800">
            <strong>aktu-erp.in is an independent, unofficial informational portal.</strong> We are NOT affiliated, associated, authorized, endorsed by, or in any way officially connected with Dr. A.P.J. Abdul Kalam Technical University (AKTU), Uttar Pradesh, or any of its subsidiaries or its affiliates. The official AKTU website can be found at <a href="https://aktu.ac.in" target="_blank" rel="nofollow noreferrer" className="text-blue-600 underline">aktu.ac.in</a>.
          </p>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Use of Information</h2>
          <p>
            The content provided on this Website is for general informational and educational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the Website or the information, products, services, or related graphics contained on the Website for any purpose.
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Any reliance you place on such information is therefore strictly at your own risk.</li>
            <li>We recommend students always verify examination dates, results, and circulars with the official AKTU portal.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. External Links</h2>
          <p>
            Through this Website, you are able to link to other websites which are not under the control of <strong>aktu-erp.in</strong>. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
          </p>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Advertisements and Monetization</h2>
          <p>
            This Website may use Google AdSense and other third-party advertising companies to serve ads when you visit. These companies may use aggregated information (not including your name, address, email address, or telephone number) about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.
          </p>
        </section>

        {/* Section 6 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Use at any time. We do so by posting and drawing attention to the updated terms on the Website. Your decision to continue to visit and make use of the Website after such changes have been made constitutes your formal acceptance of the new Terms of Use.
          </p>
        </section>

        {/* Section 7 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at: <br />
            <a href="mailto:admin@aktu-erp.in" className="text-blue-600 hover:underline font-medium">admin@aktu-erp.in</a>
          </p>
        </section>

      </div>
      
      <div className="mt-12 pt-8 border-t border-gray-200 text-center">
         <Link href="/" className="text-blue-600 hover:underline font-medium">
            &larr; Return to Home
         </Link>
      </div>
    </div>
  );
}