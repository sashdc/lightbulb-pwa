"use client";

import * as React from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { engagementPhotos } from "@/public/images/engagement/engagement";
import Link from "next/link";

export default function EngagementGallery() {
  const [index, setIndex] = React.useState(-1);

  const slides = engagementPhotos.map(photo => ({ src: photo.src }));

  return (
    <div className=" ">
      <PhotoAlbum
        layout="columns"
        photos={engagementPhotos}
        size = "10px"
        targetRowHeight={150}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        index={index}
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
      />

    <Link href="/poses">
          <button className="text-blue-500 text-2xl font-bold">Back</button>
        </Link>
    </div>
  );
}
