import Header from "./components/Header";
import Footer from "./components/Footer";
import "../app/styles/globals.css";
import { Providers } from "./Providers";

export const metadata = {
  title: "KitCart | Your E-commerce Hub",
  description: "Shop the latest products online at KitCart",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <main>{children}</main> {/* Dynamic content for each page */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
