import Gallery from "../ui/galleryPage/galleryPage";
import { weddingPhotos } from "@/public/images/wedding/wedding";

export default function Wedding() {
    return (
        <Gallery
        photos={weddingPhotos}
        title="Wedding Poses"
        backLink="/poses"
      />
    );
}