'use client';

import Gallery from "../ui/galleryPage/galleryPage";

export default function FavouritesGallery() {

    let favourites = []
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
