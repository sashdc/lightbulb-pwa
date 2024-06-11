import React from "react";
import Gallery from "../ui/galleryPage/galleryPage";
import { engagementPhotos } from "@/public/images/engagement/engagement";

export default function EngagementGallery() {
  return (
    <Gallery
      photos={engagementPhotos}
      title="Engagement Poses"
      backLink="/poses"
    />
  );
}
