import { Inter } from "next/font/google";
// import Document, { Html, Head, Main, NextScript } from "next/document";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lightbulb",
  description: "The posing guide for photographers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="manifest" href="/public/manifest.json"/>
      </head>
      <body className="bg-blue">{children}</body>
    </html>
  );
}
