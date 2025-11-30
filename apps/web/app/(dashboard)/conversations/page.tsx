import React from "react";

import { ConversationsView } from "@/modules/dashboard/ui/views/conversations-view";
import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

const Page = () => {
  return <ConversationsView />;
};

export default Page;

export const generateMetadata = (): Metadata => {
  return createMetadata({
    title: "Conversation | Echo Support",
    description:
      "Conversation page to chat and customer with human side on an echo support.",
  });
};
