"use client";

import * as React from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { engagementPhotos } from "@/public/images/engagement/engagement";
import Link from "next/link";
import "yet-another-react-lightbox/plugins/captions.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import {  dosis } from "../fonts";


export default function EngagementGallery() {
  const [index, setIndex] = React.useState(-1);
  const [showToggle, setShowToggle] = React.useState(false);
  const [descriptionTextAlign, setDescriptionTextAlign] = React.useState("center");
  const [descriptionMaxLines, setDescriptionMaxLines] = React.useState(6);

  const slides = engagementPhotos.map((photo) => ({
    src: photo.src,
    // title: photo.title,
    description: photo.description,
  }));

  return (
    <div className=" flex flex-col items-center justify-center  p-10  ">
        <h1 className={`${dosis.className} text-4xl font-bold text-center bg-black/20 rounded-t-xl px-4 pt-1 `}>Engagement Poses</h1>
      <div className=" p-10 animate-in fade-in duration-1000 bg-black/20 rounded-xl ">
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
          <button className="invisible  ">Back</button>
        </Link>
       
      </div>
      <Link href="/poses">
          <button className="text-blue-500 text-2xl font-bold bg-black/20 rounded-b-xl px-4 pb-1">Back</button>
        </Link>
    </div>
  );
}
