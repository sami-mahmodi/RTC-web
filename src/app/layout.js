import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Popup from "@/components/affix";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Right Time Consulting",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Popup/>
        <Footer/>
        </body>
    </html>
  );
}
