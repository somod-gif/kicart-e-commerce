import { Providers } from "./Providers";  // Keep this for providing the store
import Header from '../app/components/Header';  // Ensure proper imports for Header and Footer
import Footer from '../app/components/Footer';
import "../app/styles/globals.css"

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
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
