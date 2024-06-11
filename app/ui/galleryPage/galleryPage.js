'use client'

import * as React from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Link from "next/link";
import "yet-another-react-lightbox/plugins/captions.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import { dosis } from "../../fonts";

function Gallery({ photos, title, backLink }) {
  const [index, setIndex] = React.useState(-1);
  const showToggle = false;
  const descriptionTextAlign = "center";
  const descriptionMaxLines = 6;

  const addLineBreaks = (description) => {
    return description.split(".").join("\n");
  };

  const slides = photos.map((photo) => ({
    src: photo.src,
    description: addLineBreaks(photo.description),
  }));

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className={`${dosis.className} text-4xl font-bold text-center bg-black/20 rounded-t-xl px-4 `}>
        {title}
      </h1>
      <div className="lg:p-6 p-2 animate-in fade-in duration-1000 bg-black/20 rounded-xl">
        <PhotoAlbum
          layout="columns"
          photos={photos}
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
        <Link href={backLink}>
          <button className="invisible text-blue-500 text-2xl font-bold bg-black/20 rounded-b-xl px-4 pb-1">
            Back
          </button>
        </Link>
      </div>

      <div className="fixed top-1/4 left-0 transform -translate-y-1/2 lg:-translate-x-1/2 lg:hover:translate-x-0 transition-transform duration-300 hover:shadow-md">
        <Link href={backLink}>
          <button className={`${dosis.className} bg-red-950 text-white text-lg py-2 px-4 rounded-r-lg`}>
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Gallery;
