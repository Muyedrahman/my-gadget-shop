import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { AuthContextProvider } from "@/context/AuthContext";  

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

 
export const metadata = {
  title: {
    default: "TechNest | Premium Gadget & Electronics Shop",
    template: "%s | TechNest",  
  },
  description:
    "Explore the ultimate collection of futuristic gadgets, high-performance electronics, and tech gear at TechNest.",
  keywords: [
    "gadget shop",
    "electronics store",
    "tech accessories",
    "buy gadgets online",
  ],
  authors: [{ name: "Muyedur Rahman" }],
   
  icons: {
    icon: "/favicon.ico",
  },
   
  openGraph: {
    title: "TechNest - Premium Gadget Shop",
    description:
      "Your ultimate destination for futuristic tech gear and premium electronics.",
    url: "https://my-gadget-shop.vercel.app", // প্রোডাকশন ডোমেইন (ভবিষ্যতের জন্য)
    siteName: "TechNest",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      
      <body className="min-h-full flex flex-col bg-gray-950 text-gray-100 selection:bg-blue-500 selection:text-white">
        
        <AuthContextProvider>
          <Navbar />

         
          <main className="flex-grow">{children}</main>

          <Footer />
        </AuthContextProvider>
      </body>
    </html>
  );
}