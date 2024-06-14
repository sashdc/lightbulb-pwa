// src/Lightbox.js

import React, { useState, useEffect } from "react";
import "./lightbox.css";
import Image from "next/image";

const Lightbox = ({ images, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Retrieve favorites from local storage when the component mounts
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (event) => {
        if (event.key === "ArrowRight") {
          handleNext();
        } else if (event.key === "ArrowLeft") {
          handlePrev();
        } else if (event.key === "Escape") {
          onClose();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, currentIndex]);

  useEffect(() => {
    // Save favorites to local storage whenever the favorites array changes
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleFavorite = () => {
    if (favorites.includes(currentImage.src)) {
      setFavorites(favorites.filter((fav) => fav !== currentImage.src));
      console.log(favorites);
    } else {
      setFavorites([...favorites, currentImage.src]);
      console.log(favorites);
    }
  };

  const handleClickOutside = (event) => {
    if (event.target.className === "lightbox-content") {
      onClose();
    }
  };

  return (
    <div className="lightbox " onClick={handleClickOutside}>
      <div className="lightbox-content ">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <button
          onClick={handleFavorite}
          className={`heart ${
            favorites.includes(currentImage.src) ? "favorited" : ""
          }`}
        >
          &hearts;
        </button>
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          width={currentImage.width}
          height={currentImage.height}
          className="lightbox-image "
        />
        <div className="lightbox-controls">
          <button onClick={handlePrev} className="arrow left">
            &lt;
          </button>
          <button onClick={handleNext} className="arrow right">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
