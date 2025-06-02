import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-white text-gray-800 font-sans">
      <div className="border-b border-gray-200 pb-6 mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          EcoClean Junk Removal
        </h1>
        <h2 className="text-3xl font-semibold text-gray-800">
          Terms & Conditions
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          Last Updated: April 29, 2025
        </p>
      </div>

      <div className="prose max-w-none">
        <ol className="space-y-8 list-decimal list-outside ml-5">
          <li className="pl-2">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Service Agreement
            </h3>
            <p className="text-gray-700 leading-relaxed">
              By scheduling a service with EcoClean Junk Removal ("we," "us,"
              "our"), you ("client," "customer") agree to the terms outlined
              below. These terms govern all junk removal services provided by
              EcoClean Junk Removal.
            </p>
          </li>

          <li className="pl-2">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Pricing & Payment
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Prices are based on volume—how much space your items occupy in our
              truck (e.g., ¼, ½, ¾, or full load). Final pricing is confirmed
              on-site after reviewing the items. Labor, loading, cleanup, and
              haul-away are included in our standard rates. Payment is due upon
              completion of service. We accept cash, credit/debit cards, and
              electronic payments.
            </p>
          </li>

          <li className="pl-2">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Cancellations & Rescheduling
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Please provide at least 24 hours' notice for cancellations or
              rescheduling. Cancellations made less than 24 hours in advance may
              be subject to a cancellation fee.
            </p>
          </li>

          <li className="pl-2">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Item Acceptance
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We accept most non-hazardous materials, including furniture,
              appliances, yard waste, and general junk.
            </p>
            <p className="font-semibold text-gray-800 mt-3">
              We do not accept:
            </p>
            <ul className="list-disc list-inside ml-5 mt-2 space-y-1 text-gray-700">
              <li>
                Hazardous materials (e.g., paint, chemicals, oils, asbestos)
              </li>
              <li>Explosives or firearms</li>
              <li>Biohazard waste</li>
            </ul>
            <p className="text-gray-700 mt-3 leading-relaxed">
              If we encounter prohibited items on-site, we reserve the right to
              refuse removal.
            </p>
          </li>

          <li className="pl-2">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Access & Safety
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The client is responsible for providing safe and unobstructed
              access to the items scheduled for removal. If access is restricted
              or unsafe, EcoClean reserves the right to reschedule or cancel the
              service.
            </p>
          </li>

          <li className="pl-2">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Donation & Recycling Policy
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We are committed to environmentally responsible practices. Items
              suitable for reuse are donated through our partnership with
              Sharing Connections. Remaining materials are recycled or disposed
              of responsibly.
            </p>
          </li>

          <li className="pl-2">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Liability
            </h3>
            <p className="text-gray-700 leading-relaxed">
              EcoClean is fully insured. However, we are not liable for damage
              to property resulting from unsafe conditions, pre-existing
              structural issues, or improper client instructions. We do our best
              to handle all items carefully but are not responsible for items
              damaged due to poor condition or improper prior installation.
            </p>
          </li>

          <li className="pl-2">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Customer Satisfaction
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Your satisfaction matters to us. If there are any concerns or
              issues with your service, please contact us within 48 hours of
              completion so we can make it right.
            </p>
          </li>

          <li className="pl-2">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Changes to Terms
            </h3>
            <p className="text-gray-700 leading-relaxed">
              EcoClean Junk Removal reserves the right to update these Terms &
              Conditions at any time. Continued use of our services constitutes
              agreement to the most recent version.
            </p>
          </li>
        </ol>

        <div className="mt-16 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Service Waiver and Liability Release
          </h2>
          <ol className="space-y-6 list-decimal list-outside ml-5">
            {[
              "I understand and acknowledge that the removal of items may involve lifting, moving, and transporting heavy or bulky objects which carry inherent risks including, but not limited to, damage to property or personal injury.",
              "I hereby release and hold harmless EcoClean Junk Removal, its owners, employees, and contractors from any and all liability, claims, demands, or causes of action that may arise from services provided, except in cases of gross negligence or intentional misconduct.",
              "I affirm that I am the owner of the property or have obtained full permission from the property owner to authorize the removal of items and grant access to EcoClean Junk Removal.",
              "I agree to indemnify and defend EcoClean Junk Removal against any claims or damages arising from false representations of ownership or authority to dispose of the items.",
              "I understand that while EcoClean will take reasonable care during service, they are not liable for damage resulting from pre-existing conditions, hidden obstacles, or customer instructions.",
              "I accept full responsibility for disclosing any hazardous materials, sharp objects, or other dangerous items prior to service.",
            ].map((item, index) => (
              <li key={index} className="text-gray-700 leading-relaxed pl-2">
                {item}
              </li>
            ))}
          </ol>

          <p className="mt-10 text-gray-700 leading-relaxed">
            By signing below or agreeing to services electronically or verbally,
            I confirm that I have read, understood, and agreed to this Service
            Waiver and Liability Release.
          </p>

          <div className="mt-10 space-y-6">
            <div className="border-b border-gray-300 pb-1 w-3/4">
              <p className="text-gray-600 text-sm">Client Name</p>
            </div>
            <div className="border-b border-gray-300 pb-1 w-3/4">
              <p className="text-gray-600 text-sm">Signature</p>
            </div>
            <div className="border-b border-gray-300 pb-1 w-3/4">
              <p className="text-gray-600 text-sm">Date</p>
            </div>
          </div>

          <p className="mt-12 text-sm text-gray-500">
            All the above categories exclude text messaging originator opt-in
            data and consent; this information will not be shared with any third
            parties.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
