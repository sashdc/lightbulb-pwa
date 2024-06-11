
import React from 'react';
import Link from 'next/link';
import { dosis } from '../../fonts';
import { usePathname } from 'next/navigation'


export default function BackButton() {
    return (
        <div className="fixed top-1/4 left-0 transform -translate-y-1/2 lg:-translate-x-1/2 lg:hover:translate-x-0 transition-transform duration-300 hover:shadow-md">
        <Link href="/poses">
            <button
            className={`${dosis.className} bg-red-950 text-white text-lg py-2 px-4 rounded-r-lg`}
            >
            Back
            </button>
        </Link>
        </div>
    );
    }
