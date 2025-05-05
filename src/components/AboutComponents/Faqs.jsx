import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What types of items do you remove?",
    answer:
      "We remove almost anything—furniture, appliances, yard waste, construction debris, electronics, mattresses, and more. If it’s non-hazardous and fits in our truck, we’ll take it!",
  },
  {
    question: "What happens to the items you pick up?",
    answer:
      "What sets EcoClean Junk Removal apart is our commitment to eco-friendly disposal. We prioritize donating items that can be repurposed or reused to support families in need throughout Chicagoland. Anything that can’t be donated is responsibly recycled or creatively repurposed to minimize waste and protect the environment.",
  },
  {
    question: "How is your pricing structured?",
    answer:
      "We charge based on how much space your items take up in our truck. Pricing is pro-rated by load size—¼ load, ½ load, ¾ load, and full truckload. Labor, cleanup, and haul-away are included in the price.",
  },
  {
    question: "Do you offer same-day or next-day service?",
    answer:
      "Yes! We offer convenient same-day and next-day junk removal to meet your scheduling needs.",
  },
  {
    question: "Do I need to move the items myself?",
    answer:
      "Not at all. Our team handles all the heavy lifting, loading, and cleanup so you don’t have to lift a finger.",
  },
  {
    question: "Are there any items you don’t take?",
    answer:
      "We do not handle hazardous materials like paint, chemicals, or asbestos. If you're unsure, just give us a call and we’ll let you know.",
  },
  {
    question: "How do I schedule a pickup?",
    answer:
      "Scheduling is easy! Call us, text us, or book online. We’ll give you a free estimate and set up a convenient time for your removal.",
  },
  {
    question: "What areas do you service?",
    answer:
      "We proudly serve the greater Chicagoland area. Contact us to confirm if we service your specific location.",
  },
];
const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 shadow-sm transition"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-left text-lg font-medium"
            >
              <span>{faq.question}</span>
              {activeIndex === index ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            {activeIndex === index && (
              <div className="mt-3 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
