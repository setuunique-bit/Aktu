import Script from "next/script";

type FaqItem = {
  question: string;
  answer: string;
};

export default function FaqSchema({ faqs }: { faqs: FaqItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section
        id="faq"
        className="mt-16 rounded-2xl bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8 border border-blue-100"
      >
        <div className="mb-8 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-3">
            Help Center
          </span>

          <h2 className="text-3xl font-bold text-[#003366]">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Find answers to the most common questions about AKTU ERP Login,
            Admit Card Download, Results, Registration, and Student Services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-5 font-semibold text-gray-900">
                <span>{faq.question}</span>

                <span className="ml-4 text-blue-600 text-xl transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="px-5 pb-5 border-t border-gray-100">
                <p className="pt-4 text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}