import Image from "next/image";
import logo from "../public/images/lb-logo.png";
import Link from "next/link";
import { Life_Savers, Dosis } from "next/font/google";

const lifeSavers = Life_Savers({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});
const dosis = Dosis({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <div className=" main-splash flex  items-center justify-center h-screen  p-4 animate-in fade-in duration-1000">
      <Link href="/home" className="text-center">
        <div className="cursor-pointer bg-black/50 rounded-xl  py-10 ">
          <Image src={logo} alt="Lightbulb logo" className="mx-auto  size-3/6" />
          <div className=" duration-700 text-center mt-4 hover:text-yellow-500 transition ease-in-out  ">
            <h1 className={`${lifeSavers.className} text-6xl  `}>LightBulb</h1>
            <p className={`${dosis.className} mt-2`}>
              The posing guide for photographers
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
