import "./globals.css";

import { Footer, NavBar } from "../component";

export const metadata = {
  title: "Car Hub",
  description: "Discover world's best car showcase application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang='en'>
      <head>
          {/*<script src="https://cdn.tailwindcss.com"></script>*/}
      </head>
      <body className='relative'>
      <NavBar />
      {children}
      <Footer />
      </body>
      </html>
  );
}
