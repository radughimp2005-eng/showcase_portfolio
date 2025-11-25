import type { Metadata } from "next";
import { Geist, Geist_Mono, Adamina, Abhaya_Libre, Inter, Akatab, Alata, Ubuntu, ADLaM_Display } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const adamina = Adamina({
  weight: "400", // ✅ must include this line
  variable: "--font-adamina",
  subsets: ["latin"],
});

const abhayaLibre = Abhaya_Libre({
  weight: ["500", "800"], // ✅ must include this line
  variable: "--font-abhaya-libre",
  subsets: ["latin"],
});

const inter = Inter({
  weight: "700", // ✅ must include this line
  variable: "--font-inter",
  subsets: ["latin"],
});

const akatab = Akatab({
  weight: "800", // ✅ must include this line
  variable: "--font-akatab",
  subsets: ["latin"],
});

const alata = Alata({
  weight: "400",
  variable: "--font-alata",
  subsets: ["latin"],
});

const ubuntu = Ubuntu({
  weight: ["400", "500"],
  variable: "--font-ubuntu",
  subsets: ["latin"],
});

const aDLaM_Display = ADLaM_Display({
  weight: "400",
  variable: "--font-ADLaM-Display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Radu Ghimp portfolio",
  description: "Created in NextJs",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <head>
      {/* ✅ Font Awesome CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
     </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${adamina.variable} ${abhayaLibre.variable} ${inter.variable} ${akatab.variable} ${alata.variable} ${ubuntu.variable} ${aDLaM_Display.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
