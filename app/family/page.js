import Gallery from "../ui/galleryPage/galleryPage";
import { familyPhotos } from "@/public/images/family/family";


export default function Family() {
  return (
    <Gallery
      photos={familyPhotos}
      title="Family Poses"
      backLink= "/poses"
    />
  );
}
