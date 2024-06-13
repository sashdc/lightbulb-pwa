import "./globals.css";
import { Metadata } from "next";


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
        <link rel="manifest" href="/manifest.json"/>
        <link rel="icon" href="./favicon.png" sizes="any" />
        </head>
      <body className="bg-gradient-to-r from-gray-950 via-gray-500 to-gray-950  relative ">
        <div className="absolute inset-0 z-0">
          <div className="bg-repeat animate-blink" style={{ backgroundImage: 'url(/images/logoRepeat.png)', opacity: 0.1 }}></div>
        </div>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
