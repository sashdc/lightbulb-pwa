"use client";

import * as React from "react";

// Function to shuffle an array
const shuffleArray = (array) => {
  let newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

function RandomizeButton({ photos, setShuffledPhotos }) {
  const handleRandomize = () => {
    setShuffledPhotos(shuffleArray(photos));
  };

  return (
    <div className="fixed top-1/4 right-0 z-50 transform lg:translate-x-1/2 lg:hover:translate-x-0 transition-transform duration-300">
      <button
        onClick={handleRandomize}
        className="bg-red-900 text-white text-lg font-semibold py-2 px-4 rounded-l-lg transition duration-1000"
      >
        Randomize
      </button>
    </div>
  );
}

export default RandomizeButton;
