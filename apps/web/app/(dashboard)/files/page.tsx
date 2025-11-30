import React from "react";

import { FilesView } from "@/modules/files/ui/views/files-view";
import { Protect } from "@clerk/nextjs";
import { PremiumFeatureOverlay } from "@/modules/billing/ui/components/premium-feature-overlay";
import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

const Page = () => {
  return (
    <Protect
      condition={(has) => has({ plan: "pro" })}
      fallback={
        <PremiumFeatureOverlay>
          <FilesView />
        </PremiumFeatureOverlay>
      }
    >
      <FilesView />
    </Protect>
  );
};

export default Page;

export const generateMetadata = (): Metadata => {
  return createMetadata({
    title: "Knowledge Base | Echo Support",
    description:
      "Knowledge Base page for the upload the data to train the chatbot.",
  });
};
