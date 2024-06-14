'use client';

import React, { useEffect, useState } from "react";
import Gallery from "../ui/galleryPage/galleryPage";

export default function FavouritesGallery() {
    const [favourites, setFavourites] = useState([]);

    
    useEffect(() => {
      const storedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];
      setFavourites(storedFavourites);
      console.log(storedFavourites);
    }, []);

    return (
        <>
      <Gallery
        photos={favourites}
        title="Favourite Poses"
        backLink="/poses"
      />
 
      </>
    );
}
