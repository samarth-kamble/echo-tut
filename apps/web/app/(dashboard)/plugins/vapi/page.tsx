import { createMetadata } from "@/lib/metadata";
import { PremiumFeatureOverlay } from "@/modules/billing/ui/components/premium-feature-overlay";
import { VapiView } from "@/modules/plugins/ui/views/vapi-view";
import { Protect } from "@clerk/nextjs";
import { Metadata } from "next";

import React from "react";

const Page = () => {
  return (
    <Protect
      condition={(has) => has({ plan: "pro" })}
      fallback={
        <PremiumFeatureOverlay>
          <VapiView />
        </PremiumFeatureOverlay>
      }
    >
      <VapiView />
    </Protect>
  );
};

export default Page;

export const generateMetadata = (): Metadata => {
  return createMetadata({
    title: "Vapi Plugin | Echo Support",
    description: "Vapi Plugin page to connect the vapi to voice assistant.",
  });
};
