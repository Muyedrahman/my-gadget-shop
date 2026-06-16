// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "My Gadget Shop",
//   description: "Gadget Shop Application",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html
//       lang="en"
//       className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
//     >
//       <body className="min-h-full flex flex-col">
//         <Navbar />
//         {children}
//         <Footer />

//       </body>
//     </html>
//   );
// }

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { AuthContextProvider } from "@/context/AuthContext"; // 👈 ১. অথ কনটেক্সট ইমপোর্ট করলাম

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 👈 ২. ইন্ডাস্ট্রি স্ট্যান্ডার্ড এসইও ফ্রেন্ডলি মেটাডেটা কনফিগারেশন
export const metadata = {
  title: {
    default: "TechNest | Premium Gadget & Electronics Shop",
    template: "%s | TechNest", // অন্যান্য পেজের টাইটেল স্বয়ংক্রিয়ভাবে "Login | TechNest" হয়ে যাবে
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
  // ওয়ান-লাইন আইকন ইন্টিগ্রেশন (favicon.ico এর জন্য)
  icons: {
    icon: "/favicon.ico",
  },
  // সামাজিক যোগাযোগ মাধ্যমে (Facebook, LinkedIn) লিংক শেয়ারের জন্য ওজি মেটাডেটা
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
      {/* ৩. ফ্লেক্স কলাম থিম দিয়ে ফুটারকে সবসময় স্ক্রিনের নিচে (Sticky Footer) রাখার ইন্ডাস্ট্রি ট্রিক */}
      <body className="min-h-full flex flex-col bg-gray-950 text-gray-100 selection:bg-blue-500 selection:text-white">
        {/* ৪. পুরো অ্যাপ্লিকেশনকে আমাদের ফায়ারবেস স্টেটের আওতায় নিয়ে আসলাম */}
        <AuthContextProvider>
          <Navbar />

          {/* main ট্যাগটি flex-grow হওয়ায় কন্টেন্ট কম থাকলেও ফুটার নিচে ঝুলে থাকবে */}
          <main className="flex-grow">{children}</main>

          <Footer />
        </AuthContextProvider>
      </body>
    </html>
  );
}