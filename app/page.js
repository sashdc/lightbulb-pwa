import Image from "next/image";
import logo from "../public/images/lb-logo.png";
import Link from "next/link";
import { Life_Savers } from "next/font/google";

const lifeSavers = Life_Savers({ subsets: ["latin"], weight: ['400', '700', '800'] });

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-950 to-gray-500">
      <Link href="/home" className="text-center">
        <div className="cursor-pointer">
          <Image src={logo} alt="Lightbulb logo" className="mx-auto " />
          <div className="text-center">
            <h1 className={lifeSavers.className}>Lightbulb</h1>
            <p className="text-lg font-mono">
              The posing guide for photographers
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
