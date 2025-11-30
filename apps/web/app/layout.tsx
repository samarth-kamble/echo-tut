import React from "react";
import { Fira_Sans, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";
import { Toaster } from "@workspace/ui/components/sonner";

const fontSans = Fira_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
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
