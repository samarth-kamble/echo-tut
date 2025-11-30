import { createMetadata } from "@/lib/metadata";
import { IntegrationsView } from "@/modules/integrations/ui/views/integrations-view";
import { Metadata } from "next";
import React from "react";

const Page = () => {
  return <IntegrationsView />;
};

export default Page;

export const generateMetadata = (): Metadata => {
  return createMetadata({
    title: "Integration | Echo Support",
    description:
      "Integration page for the integrate the chatbot to the you customer website.",
  });
};
