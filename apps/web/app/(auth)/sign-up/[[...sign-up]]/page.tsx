import { createMetadata } from "@/lib/metadata";
import { SignUpView } from "@/modules/auth/ui/views/sign-up-view";
import { Metadata } from "next";

const Page = () => {
  return <SignUpView />;
};

export default Page;

export const generateMetadata = (): Metadata => {
  return createMetadata({
    title: "Sign Up | Echo Support",
    description: "Sign Up to the echo support.",
  });
};
