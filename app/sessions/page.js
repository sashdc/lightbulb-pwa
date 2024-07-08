'use client';

import * as React from "react";
import BackButton from "../ui/backbutton/backbutton2";
import Tile from "../ui/menuTile/menuTile";
import Link from 'next/link'; 
import { dosis } from "../fonts";


export default function Sessions() {
  const [categories, setCategories] = React.useState([]);
  const [removingIndex, setRemovingIndex] = React.useState(null);

  React.useEffect(() => {
    const storedCategories = JSON.parse(localStorage.getItem("categories")) || [];
    setCategories(storedCategories);
  }, []);

  const getRandomImage = (photos) => {
    const randomIndex = Math.floor(Math.random() * photos.length);
    return photos[randomIndex].src;
  };

  const handleRemoveSession = (index) => {
    if (window.confirm("Are you sure you want to remove this session?")) {
      setRemovingIndex(index);
      setTimeout(() => {
        const updatedCategories = [...categories];
        updatedCategories.splice(index, 1);
        setCategories(updatedCategories);
        localStorage.setItem("categories", JSON.stringify(updatedCategories));
        setRemovingIndex(null);
      }, 100); 
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 pb-0 animate-in fade-in duration-500">
      {categories.length === 0 ? (
        <Link href="/poses">
          <div className={`${dosis.className} text-center bg-slate-500 p-5 rounded-full text-slate-100 font-bold text-3xl shadow-md hover:text-slate-500 hover:bg-slate-100 hover:shadow-2xl duration-500`}>
            Seems you haven&apos;t created any sessions yet, you should get on that.
          </div>
        </Link>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-screen-lg">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`relative ${removingIndex === index ? 'animate-out fade-out duration-1000' : ''}`}
            >
              <Tile
                imageUrl={getRandomImage(category.photos)}
                title={category.name}
                link={`/sessions/${category.name}`}
              />
              <button
                className="absolute top-0 right-8 p-2 rounded-full bg-red-900 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 lg:opacity-50 hover:opacity-100"
                onClick={() => handleRemoveSession(index)}
                title="remove session"
              >
                 <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                        clipRule="evenodd"
                      />
                    </svg>
              </button>
            </div>
          ))}
        </div>
      )}
      <BackButton backLocation="/poses" />
    </div>
  );
}
