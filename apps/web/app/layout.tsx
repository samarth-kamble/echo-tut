import React from "react";
import { Fira_Sans, Geist } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";
import { Toaster } from "@workspace/ui/components/sonner";

const fontSans = Fira_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.className} font-sans antialiased `}>
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
