"use client";

import * as React from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import { dosis } from "../../fonts";
import BackButton from "../backbutton/backButtonFloat";
import BackButton2 from "../backbutton/backbutton2";
import Share from "yet-another-react-lightbox/plugins/share";
import RandomizeButton from "../randomize/randomize";
import Favourite from "../favourite/favourite";

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

  return (
    <div className="flex flex-col items-center justify-center p-4 pb-0 pt-1 lg:pt-3">
      <RandomizeButton photos={photos} setShuffledPhotos={setShuffledPhotos} />
      <BackButton backLocation={backLink} />

      <h1
        className={`${dosis.className} text-5xl pb-3 lg:pb-0 font-bold text-center animate-in fade-in duration-1000`}
      >
        {title}
      </h1>
      <div className="lg:p-6 p-2 pb-0 pt-0 lg:pb-0 animate-in fade-in duration-1000 ">
        {shuffledPhotos.length === 0 ? (
          <div className={`${dosis.className} text-center text-3xl font-bold`}>
            No images here yet.
          </div>
        ) : (
          <>
            <PhotoAlbum
              layout="columns"
              photos={shuffledPhotos}
              targetRowHeight={150}
              onClick={({ index: current }) => setIndex(current)}
              renderPhoto={({ photo, layout, imageProps }) => (
                <div style={{ position: "relative" }}>
                  <img {...imageProps} />
                  <div style={{ position: "absolute", top: "10px", right: "10px" }}>
                    <Favourite photo={photo} />
                  </div>
                </div>
              )}
            />
            <Lightbox
              index={index}
              plugins={[Captions, Share]}
              captions={{ showToggle, descriptionTextAlign, descriptionMaxLines }}
              slides={slides}
              open={index >= 0}
              close={() => setIndex(-1)}
            />
          </>
        )}
        <BackButton2 backLocation={backLink} />
      </div>
    </div>
  );
}

export default Gallery;
