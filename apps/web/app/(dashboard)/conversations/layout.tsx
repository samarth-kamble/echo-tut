import { ConversationsLayout } from "@/modules/dashboard/ui/layouts/conversation-layout";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <ConversationsLayout>{children}</ConversationsLayout>;
};

export default Layout;
