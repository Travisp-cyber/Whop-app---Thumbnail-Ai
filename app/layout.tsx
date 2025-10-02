import { WhopApp } from "@whop/react/components";
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google"; // ✅ swap to Google fonts
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Whop App",
  description: "My Whop App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        <WhopApp>{children}</WhopApp>
      </body>
    </html>
  );
}