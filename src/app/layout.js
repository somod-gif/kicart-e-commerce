import { localFont } from "next/font/local";
import Header from "./components/Header";
import "../app/styles/globals.css";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "KitCart | Your E-commerce Hub",
  description: "Shop the latest products online at KitCart",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main>{children}</main> {/* Dynamic content for each page */}
        <Footer />
      </body>
    </html>
  );
}
