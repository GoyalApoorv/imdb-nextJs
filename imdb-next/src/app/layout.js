import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Clone",
  description: "A website for movie database",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Providers>
       <Header /> 
       {children}
       </Providers>
      </body>
    </html>
  );
}
