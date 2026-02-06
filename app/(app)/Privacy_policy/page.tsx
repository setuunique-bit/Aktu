import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | AKTU OneView",
  description: "Privacy Policy for AKTU OneView. Learn how we collect, use, and protect your data.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 bg-white sm:rounded-lg sm:shadow-sm sm:my-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
      <p className="text-gray-600 mb-8">Last Updated: {currentDate}</p>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
          <p>
            Welcome to <strong>AKTU OneView</strong> ("we," "our," or "us"). We are committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website 
            <strong> aktu-erp.in</strong>. By using our website, you consent to the data practices described in this statement.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Information We Collect</h2>
          <p className="mb-2">We may collect information in the following ways:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Log Data:</strong> When you visit our site, our servers automatically record data that your browser sends. 
              This may include your IP address, browser type, pages visited, and time spent on those pages.
            </li>
            <li>
              <strong>Cookies:</strong> We use cookies to improve user experience, analyze site traffic, and serve personalized content.
            </li>
          </ul>
        </section>

        <section className="bg-blue-50 p-4 rounded-md border border-blue-100">
          <h2 className="text-xl font-semibold text-blue-900 mb-3">3. Google AdSense & DoubleClick Cookie</h2>
          <p className="text-sm text-blue-800">
            This website uses <strong>Google AdSense</strong> to display advertisements. 
            Google, as a third-party vendor, uses cookies to serve ads on our site.
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2 text-sm text-blue-800">
            <li>
              Google's use of the <strong>DoubleClick cookie</strong> enables it and its partners to serve ads to our users 
              based on their visit to our site and/or other sites on the Internet.
            </li>
            <li>
              You may opt out of the use of the DoubleClick cookie for interest-based advertising by visiting 
              <a href="https://adssettings.google.com" target="_blank" rel="nofollow noopener" className="underline ml-1 font-medium">
                Google Ads Settings
              </a>.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Google Analytics</h2>
          <p>
            We use Google Analytics to understand how visitors engage with our site. Google Analytics collects information anonymously. 
            It reports website trends without identifying individual visitors. You can opt out of Google Analytics 
            by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">Google Analytics Opt-out Browser Add-on</a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Third-Party Links</h2>
          <p>
            Our website contains links to other websites (such as the official AKTU portal). If you click on a third-party link, 
            you will be directed to that site. Note that these external sites are not operated by us. We strongly advise you to 
            review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, 
            privacy policies, or practices of any third-party sites or services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Children's Privacy</h2>
          <p>
            Our services do not address anyone under the age of 13. We do not knowingly collect strictly personal 
            identifiable information from children under 13.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
            Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section className="pt-6 border-t border-gray-200 mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h2>
          <p>
            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at:
          </p>
          <p className="mt-2 font-medium text-blue-600">
            {/* REPLACE THIS WITH YOUR ACTUAL EMAIL */}
            setuunique@gmail.com
          </p>
        </section>
      </div>
    </div>
  );
}