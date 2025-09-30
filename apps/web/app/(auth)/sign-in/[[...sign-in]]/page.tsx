import { createMetadata } from "@/lib/metadata";
import { SignInView } from "@/modules/auth/ui/views/sign-in-view";
import { Metadata } from "next";

const Page = () => {
  return <SignInView />;
};

export default Page;

export const generateMetadata = (): Metadata => {
  return createMetadata({
    title: "Sign In | Echo Support",
    description: "Sign In to the echo support.",
  });
};
