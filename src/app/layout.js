import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ContentProvider } from "../context/ContentContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SMM Solutions",
  description: "This is the SMM Solutions website",
};

export default function RootLayout({ children }) {
  return (
    
      <html lang="en" className='scroll-smooth'>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-red-600`}
        >
          <div className='min-h-[100vh] relative'>
            <Header />
            <ContentProvider>
              {children}
            </ContentProvider>
          </div>
        </body>
      </html>
  );
}
