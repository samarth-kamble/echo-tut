import React from "react";
import { Work_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";
import { Toaster } from "@workspace/ui/components/sonner";
import { Metadata } from "next";

const fontSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Echo | AI Support Platform",
  description:
    "Echo | Echo Support is the platform for the AI Support Platform.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.className}  font-sans antialiased `}>
        <ClerkProvider
          appearance={{
            variables: {
              colorPrimary: "#3C82F6",
            },
          }}
        >
          <Providers>
            <Toaster position="top-right" richColors />
            {children}
          </Providers>
        </ClerkProvider>
      </body>
    </html>
  );
}
