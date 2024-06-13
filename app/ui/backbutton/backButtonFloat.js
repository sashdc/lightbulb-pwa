import Link from "next/link";
import { dosis } from "../../fonts";

export default function BackButton({ backLocation }) {
  return (
    <div className="fixed top-1/4 left-0 transform lg:-translate-x-1/2 lg:hover:translate-x-0 transition-transform duration-300 hover:shadow-md z-50">
      <Link href={backLocation}>
        <button
          className={`${dosis.className} bg-red-900 text-white text-lg font-semibold py-1 px-2 lg:py-2 lg:px-4 rounded-r-lg`}
        >
          Back
        </button>
      </Link>
    </div>
  );
}
