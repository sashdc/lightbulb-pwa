'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Gallery from "../../ui/galleryPage/galleryPage";

export default function SessionName() {
  const { sessionName } = useParams();
  const [sessionPhotos, setSessionPhotos] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const categories = JSON.parse(localStorage.getItem("categories")) || [];
      const session = categories.find(category => category.name === sessionName);
      if (session) {
        console.log('Session found:', session);
        setSessionPhotos(session.photos); // Update state with session photos
      } else {
        console.log('No session found for:', sessionName);
      }
    }
  }, [sessionName]);

  if (!sessionName) {
    return <div>Loading...</div>;
  }

  console.log('Session photos:', sessionPhotos); // Check session photos before rendering

  return (
    <Gallery
      photos={sessionPhotos} // Pass session photos to Gallery component
      title={sessionName}
      backLink="/sessions"
    />
  );
}
