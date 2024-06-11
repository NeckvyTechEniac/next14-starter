import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/navbar/Navbar";
// import Footer from "@/components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
// import ClientServiceProviderTest from "../components/ClientServiceProviderTest";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next App",
  description: "Next.js starter app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* even if the client service provider is a client component and wraps around all server children components that are going to be rendered, they will be rendered on the server side only. You can check by console logging anything in one of the server side components (Eg contagepage - page.jsx) and there the console log will be on the server side and not client. <ClientServiceProviderTest> */}
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
        {/* </ClientServiceProviderTest> */}
      </body>
    </html>
  );
}
