import { Libre_Baskerville, Montserrat } from "next/font/google";
import Header from "@/components/site/header";
import Footer from "@/components/site/footer";
import Enquiry from "@/components/site/enquiry";
import OverscreenEnquiryButton from "@/components/site/overscreen-enquiry-button";
import { Toaster } from "sonner";
import { siteConfig } from "@/lib/metadata";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libreBaskerville",
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${montserrat.variable} ${libreBaskerville.variable} antialiased flex flex-col min-h-screen`}
      >
        <OverscreenEnquiryButton />
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Enquiry />
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
