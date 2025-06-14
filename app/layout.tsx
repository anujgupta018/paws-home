import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PawsHome : Find Your Perfect Companion",
  description:
    "Adopt pets and give them a loving forever home. Browse dogs, cats, and other animals looking for adoption.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex-col min-h-screen ">
            <Navbar />
            {children}
            <Footer/>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
