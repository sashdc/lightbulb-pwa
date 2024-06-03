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
    <div className=" main-splash">
      <Link href="/home" className="text-center">
        <div className="cursor-pointer">
          <Image src={logo} alt="Lightbulb logo" className="mx-auto  size-1/6" />
          <div className=" duration-700 text-center mt-4 hover:text-yellow-500 transition ease-in-out duration-700 hover:font-bold duration-700">
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
