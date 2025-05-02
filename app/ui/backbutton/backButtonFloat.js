import { useEffect, useState } from "react";
import Link from "next/link";
import { dosis } from "../../fonts";

export default function BackButton({ backLocation }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed top-1/4 left-0 z-50 transition-transform duration-1000 ease-out
        ${isVisible ? "translate-x-0 shadow-md" : "-translate-x-full"}
        lg:hover:translate-x-0`}
    >
      <Link href={backLocation}>
        <button
          className={`${dosis.className} bg-red-900 text-white text-lg font-semibold py-1 px-2 lg:py-2 lg:px-4 rounded-r-lg
            transform transition duration-200
            hover:bg-red-800 hover:scale-105
            active:scale-100 active:shadow-lg`}
        >
          Back
        </button>
      </Link>
    </div>
  );
}
