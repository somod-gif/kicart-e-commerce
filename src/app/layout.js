import { Providers } from "./Providers";
import { PersistGate } from 'redux-persist/integration/react'; // Import PersistGate
import { persistor } from './Store/store'; // Import persistor from the store

export const metadata = {
  title: "KitCart | Your E-commerce Hub",
  description: "Shop the latest products online at KitCart",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <PersistGate loading={null} persistor={persistor}>
            <Header />
            <main>{children}</main> {/* Dynamic content for each page */}
            <Footer />
          </PersistGate>
        </Providers>
      </body>
    </html>
  );
}

