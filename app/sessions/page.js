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
                className="absolute top-0 right-12 p-1 rounded-full bg-red-900 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 lg:opacity-50 hover:opacity-100"
                onClick={() => handleRemoveSession(index)}
                title="remove session"
              >
                X
              </button>
            </div>
          ))}
        </div>
      )}
      <BackButton backLocation="/poses" />
    </div>
  );
}
