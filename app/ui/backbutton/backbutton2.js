import Link from "next/link";
import { dosis } from "../../fonts";

export default function BackButton({ backLocation }) {
  return (
    <div className="h-16 flex items-center justify-center">
      <Link href={backLocation}>
        <button
          type="button"
          className={`${dosis.className} px-5 py-2 text-sm  duration-200 rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700`}
        >
          Back
        </button>
      </Link>
    </div>
  );
}
