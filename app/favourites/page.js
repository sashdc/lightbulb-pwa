'use client';

import { useEffect, useState } from "react";
import Gallery from "../ui/galleryPage/galleryPage";

export default function FavouritesGallery() {
    // Initialize favourites state with the stored favourites from localStorage
    const [favourites, setFavourites] = useState(() => {
        const storedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];
        return storedFavourites;
    });

  
    // useEffect(() => {
    //     const handleStorageChange = () => {
    //         const storedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];
    //         setFavourites(storedFavourites);
    //     };

    //     window.addEventListener('storage', handleStorageChange);

    //     return () => {
    //         window.removeEventListener('storage', handleStorageChange);
    //     };
    // }, []);

    return (
      <Gallery
        photos={favourites}
        title="Favourite Poses"
        backLink="/poses"
      />
    );
}
