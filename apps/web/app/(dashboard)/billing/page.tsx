import { createMetadata } from "@/lib/metadata";
import { BillingView } from "@/modules/billing/ui/view/billing-view";
import { Metadata } from "next";
import React from "react";

const Page = () => {
  return <BillingView />;
};

export default Page;

export const generateMetadata = (): Metadata => {
  return createMetadata({
    title: "Billing | Echo Support",
    description: "Billing page to subscribe an echo support.",
  });
};
