'use client';

import * as React from "react";
import BackButton from "../ui/backbutton/backbutton2";
import Tile from "../ui/menuTile/menuTile";

export default function Sessions() {
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    const storedCategories = JSON.parse(localStorage.getItem("categories")) || [];
    setCategories(storedCategories);
  }, []);

  const getRandomImage = (photos) => {
    const randomIndex = Math.floor(Math.random() * photos.length);
    return photos[randomIndex].src;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 pb-0 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-screen-lg ">
        {categories.map((category, index) => (
          <Tile
            key={index}
            imageUrl={getRandomImage(category.photos)}
            title={category.name}
            link={`/session/${category.name}`}
          />
        ))}
      </div>
      <BackButton backLocation="/poses" />
    </div>
  );
}
