
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import HeaderMobile from "@/components/HeaderMobile";
import Sidebar from "@/components/Sidebar";
import PageWrapper from "@/components/page-wrapper";
import MarginWidthWrapper from "@/components/margin-width-wrapper";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ `bg-white ${inter.className}`}>
        <div className="flex">
        <Sidebar />
          <main className="flex-1">
            <MarginWidthWrapper>
              <Header />
              <HeaderMobile />
              <PageWrapper>
                {children}  
              </PageWrapper>
            </MarginWidthWrapper>
          </main>
        </div>
        </body>
    </html>
  );
}
