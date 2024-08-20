import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/components/ReduxProvider/ReduxProvider";
import HeaderApp from "@/components/HeaderApp/HeaderApp";
import FooterApp from "@/components/FooterApp/FooterApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Challenge",
  description: "Ramiro Ocampo's frontend challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <HeaderApp />
        {children}
        <FooterApp />
        </ReduxProvider>
        
        </body>
    </html>
   
  );
}
