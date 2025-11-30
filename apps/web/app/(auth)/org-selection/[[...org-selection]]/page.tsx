import { createMetadata } from "@/lib/metadata";
import { OrgSelectionView } from "@/modules/auth/ui/components/org-selection-view";
import { Metadata } from "next";

const Page = () => {
  return <OrgSelectionView />;
};

export default Page;

export const generateMetadata = (): Metadata => {
  return createMetadata({
    title: "Organization Selection | Echo Support",
    description:
      "Select your organization to access personalized support and manage your interactions with Echo Support.",
  });
};
