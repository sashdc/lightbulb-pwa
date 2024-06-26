'use client';

// import { useEffect, useState } from "react";
import Gallery from "../ui/galleryPage/galleryPage";

export default function FavouritesGallery() {
    // Initialize favourites state with the stored favourites from localStorage
    // const [favourites, setFavourites] = useState(() => {
    //     const storedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];
    //     return storedFavourites;
    // });

    // if (typeof window !== 'undefined') {
    //     const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    // }
    // else {
    //     const favourites = [];
    // }
    const favourites = []
    if (typeof window !== 'undefined') {
    favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    }
  

    return (
      <Gallery
        photos={favourites}
        title="Favourite Poses"
        backLink="/poses"
      />
    );
}
