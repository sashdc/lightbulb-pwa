"use client";

import * as React from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { engagementPhotos } from "@/public/images/engagement/engagement";
import Link from "next/link";
import "yet-another-react-lightbox/plugins/captions.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import { dosis } from "../fonts";

export default function EngagementGallery() {
  const [index, setIndex] = React.useState(-1);
  const showToggle = false;
  const descriptionTextAlign = "center";
  const descriptionMaxLines = 6;

  const slides = engagementPhotos.map((photo) => ({
    src: photo.src,
    description: photo.description,
  }));

  return (
    <div className="flex flex-col items-center justify-center p-10">
      <h1
        className={`${dosis.className} text-4xl font-bold text-center bg-black/20 rounded-t-xl px-4 pt-1`}
      >
        Engagement Poses
      </h1>
      <div className="lg:p-8 animate-in fade-in duration-1000 bg-black/20 rounded-xl">
        <PhotoAlbum
          layout="columns"
          photos={engagementPhotos}
          targetRowHeight={150}
          onClick={({ index: current }) => setIndex(current)}
        />
        <Lightbox
          index={index}
          plugins={[Captions]}
          captions={{ showToggle, descriptionTextAlign, descriptionMaxLines }}
          descriptionTextAlign="center"
          slides={slides}
          open={index >= 0}
          close={() => setIndex(-1)}
        />
        <Link href="/poses">
          <button className="invisible text-blue-500 text-2xl font-bold bg-black/20 rounded-b-xl px-4 pb-1">
            Back
          </button>
        </Link>
      </div>

      <div className="fixed top-1/4 left-0 transform -translate-y-1/2 lg:-translate-x-1/2 lg:hover:translate-x-0 transition-transform duration-300">
        <Link href="/poses">
          <button
            className={`${dosis.className} bg-red-950 text-white text-lg py-2 px-4 rounded-r-lg`}
          >
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}
