import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        EcoClean Junk Removal – Terms & Conditions
      </h1>
      <p className="text-sm text-gray-500 mb-8">Last Updated: April 29, 2025</p>

      <ol className="space-y-6 list-decimal list-inside">
        <li>
          <strong>Service Agreement</strong>
          <br />
          By scheduling a service with EcoClean Junk Removal ("we," "us,"
          "our"), you ("client," "customer") agree to the terms outlined below.
          These terms govern all junk removal services provided by EcoClean Junk
          Removal.
        </li>

        <li>
          <strong>Pricing & Payment</strong>
          <br />
          Prices are based on volume—how much space your items occupy in our
          truck (e.g., ¼, ½, ¾, or full load). Final pricing is confirmed
          on-site after reviewing the items. Labor, loading, cleanup, and
          haul-away are included in our standard rates. Payment is due upon
          completion of service. We accept cash, credit/debit cards, and
          electronic payments.
        </li>

        <li>
          <strong>Cancellations & Rescheduling</strong>
          <br />
          Please provide at least 24 hours' notice for cancellations or
          rescheduling. Cancellations made less than 24 hours in advance may be
          subject to a cancellation fee.
        </li>

        <li>
          <strong>Item Acceptance</strong>
          <br />
          We accept most non-hazardous materials, including furniture,
          appliances, yard waste, and general junk.
          <br />
          We <span className="font-semibold">do not accept</span>:
          <ul className="list-disc list-inside ml-4 mt-1">
            <li>
              Hazardous materials (e.g., paint, chemicals, oils, asbestos)
            </li>
            <li>Explosives or firearms</li>
            <li>Biohazard waste</li>
          </ul>
          If we encounter prohibited items on-site, we reserve the right to
          refuse removal.
        </li>

        <li>
          <strong>Access & Safety</strong>
          <br />
          The client is responsible for providing safe and unobstructed access
          to the items scheduled for removal. If access is restricted or unsafe,
          EcoClean reserves the right to reschedule or cancel the service.
        </li>

        <li>
          <strong>Donation & Recycling Policy</strong>
          <br />
          We are committed to environmentally responsible practices. Items
          suitable for reuse are donated through our partnership with Sharing
          Connections. Remaining materials are recycled or disposed of
          responsibly.
        </li>

        <li>
          <strong>Liability</strong>
          <br />
          EcoClean is fully insured. However, we are not liable for damage to
          property resulting from unsafe conditions, pre-existing structural
          issues, or improper client instructions. We do our best to handle all
          items carefully but are not responsible for items damaged due to poor
          condition or improper prior installation.
        </li>

        <li>
          <strong>Customer Satisfaction</strong>
          <br />
          Your satisfaction matters to us. If there are any concerns or issues
          with your service, please contact us within 48 hours of completion so
          we can make it right.
        </li>

        <li>
          <strong>Changes to Terms</strong>
          <br />
          EcoClean Junk Removal reserves the right to update these Terms &
          Conditions at any time. Continued use of our services constitutes
          agreement to the most recent version.
        </li>
      </ol>

      <h2 className="text-2xl font-bold mt-10 mb-4">
        Service Waiver and Liability Release
      </h2>
      <ol className="space-y-4 list-decimal list-inside">
        <li>
          I understand and acknowledge that the removal of items may involve
          lifting, moving, and transporting heavy or bulky objects which carry
          inherent risks including, but not limited to, damage to property or
          personal injury.
        </li>
        <li>
          I hereby release and hold harmless EcoClean Junk Removal, its owners,
          employees, and contractors from any and all liability, claims,
          demands, or causes of action that may arise from services provided,
          except in cases of gross negligence or intentional misconduct.
        </li>
        <li>
          I affirm that I am the owner of the property or have obtained full
          permission from the property owner to authorize the removal of items
          and grant access to EcoClean Junk Removal.
        </li>
        <li>
          I agree to indemnify and defend EcoClean Junk Removal against any
          claims or damages arising from false representations of ownership or
          authority to dispose of the items.
        </li>
        <li>
          I understand that while EcoClean will take reasonable care during
          service, they are not liable for damage resulting from pre-existing
          conditions, hidden obstacles, or customer instructions.
        </li>
        <li>
          I accept full responsibility for disclosing any hazardous materials,
          sharp objects, or other dangerous items prior to service.
        </li>
      </ol>

      <p className="mt-8">
        By signing below or agreeing to services electronically or verbally, I
        confirm that I have read, understood, and agreed to this Service Waiver
        and Liability Release.
      </p>

      <div className="mt-6 space-y-4">
        <p>Client Name: ______________________________</p>
        <p>Signature: _________________________________</p>
        <p>Date: ______________________________________</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
