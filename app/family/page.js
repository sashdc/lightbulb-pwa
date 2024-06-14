'use client';

import BackButton from "../ui/backbutton/backButtonFloat";
import React, { useState } from 'react';
import Lightbox from '../ui/lightbox/lightbox';
import { engagementPhotos } from "@/public/images/engagement/engagement";
import Image from "next/image";

export default function Family() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [photos, setPhotos] = useState(engagementPhotos);

    const shufflePhotos = () => {
        const shuffled = [...photos].sort(() => Math.random() - 0.5);
        setPhotos(shuffled);
    };

    return (
      <div className="h-full w-4/5 mx-auto">
        <BackButton backLocation="/poses" />
        
        <h1>Image Gallery</h1>
        <div className="gallery animate-in fade-in-0">
          {photos.map((photo, index) => (
            <Image
              key={index}
              width={photo.width}
              height={photo.height}
              src={photo.src}
              alt={photo.alt}
              onClick={() => setLightboxOpen(true)}
              className="thumbnail animate-in zoom-in-50 "
            />
          ))}
        </div>
        <Lightbox
          images={photos}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />
      </div>
    );
}
