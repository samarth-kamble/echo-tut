import { createMetadata } from "@/lib/metadata";
import { PremiumFeatureOverlay } from "@/modules/billing/ui/components/premium-feature-overlay";
import { CustomizationView } from "@/modules/customization/ui/views/customization-view";
import { Protect } from "@clerk/nextjs";
import { Metadata } from "next";
import React from "react";

const Page = () => {
  return (
    <Protect
      condition={(has) => has({ plan: "pro" })}
      fallback={
        <PremiumFeatureOverlay>
          <CustomizationView />
        </PremiumFeatureOverlay>
      }
    >
      <CustomizationView />
    </Protect>
  );
};

export default Page;

export const generateMetadata = (): Metadata => {
  return createMetadata({
    title: "Widget Customization | Echo Support",
    description:
      "Customization page to customize the first message or message.",
  });
};
