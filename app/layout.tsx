import type { Metadata } from "next";
// import localFont from "next/font/local";
import {Poppins} from "next/font/google"
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

// Setup task
// Customize your font { watch the video }
// Customize your meta data

const font= Poppins({
  weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets:['latin']
})
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Travels",
  description: "travel landing page using next js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <ResponsiveNav/>
        {children}
        <Footer/>
        <ScrollToTop/>
      </body>
    </html>
  );
}
