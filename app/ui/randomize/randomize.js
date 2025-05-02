"use client";

import { useEffect, useState } from "react";

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  const handleRandomize = () => {
    setShuffledPhotos(shuffleArray(photos));
  };

  return (
    <div
      className={`fixed top-1/4 right-0 z-50 transition-transform duration-1000 ease-out
        ${isVisible ? "translate-x-0 shadow-md" : "translate-x-full"}
        lg:hover:translate-x-0`}
    >
      <button
        onClick={handleRandomize}
        className="bg-red-900 text-white text-lg font-semibold py-1 px-2 lg:py-2 lg:px-4 rounded-l-lg
          transform transition duration-200
          hover:bg-red-800 hover:scale-105
          active:scale-100 active:shadow-lg"
      >
        Randomize
      </button>
    </div>
  );
}

export default RandomizeButton;
