"use client";

import * as React from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import { dosis } from "../../fonts";
import BackButton from "../backbutton/backbutton";
import BackButton2 from "../backbutton/backbutton2";

// Function to shuffle an array
const shuffleArray = (array) => {
  let newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

function Gallery({ photos, title, backLink }) {
  const [index, setIndex] = React.useState(-1);
  const [shuffledPhotos, setShuffledPhotos] = React.useState(photos);
  const showToggle = false;
  const descriptionTextAlign = "center";
  const descriptionMaxLines = 6;

  const addLineBreaks = (description) => {
    return description.split(".").join("\n");
  };

  const slides = shuffledPhotos.map((photo) => ({
    src: photo.src,
    description: addLineBreaks(photo.description),
  }));

  const handleRandomize = () => {
    setShuffledPhotos(shuffleArray(photos));
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1
        className={`${dosis.className} text-4xl font-bold text-center bg-black/20 rounded-t-xl px-4 `}
      >
        {title}
      </h1>
      <div className="lg:p-6 p-2 animate-in fade-in duration-1000 bg-black/20 rounded-xl ">
        <div className="fixed top-1/4 right-0 z-50">
          <button
            onClick={handleRandomize}
            className="bg-red-900 text-white text-lg font-semibold py-2 px-4 rounded-l-lg hover:font-bold transition duration-1000"
          >
            Randomize
          </button>
        </div>
        <PhotoAlbum
          layout="columns"
          photos={shuffledPhotos}
          targetRowHeight={150}
          onClick={({ index: current }) => setIndex(current)}
        />
        <Lightbox
          index={index}
          plugins={[Captions]}
          captions={{ showToggle, descriptionTextAlign, descriptionMaxLines }}
          slides={slides}
          open={index >= 0}
          close={() => setIndex(-1)}
        />
        <BackButton2 backLocation={backLink} />
        <BackButton backLocation={backLink} />
      </div>
    </div>
  );
}

export default Gallery;
