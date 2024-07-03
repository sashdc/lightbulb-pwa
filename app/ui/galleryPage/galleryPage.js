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
import Modal from "../modal/modal";

function Gallery({ photos, title, backLink }) {
  const [index, setIndex] = React.useState(-1);
  const [shuffledPhotos, setShuffledPhotos] = React.useState(photos);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedPhoto, setSelectedPhoto] = React.useState(null);
  const [categories, setCategories] = React.useState([]);
  const showToggle = false;
  const descriptionTextAlign = "center";
  const descriptionMaxLines = 6;

  React.useEffect(() => {
    const storedCategories = JSON.parse(localStorage.getItem("categories")) || [];
    setCategories(storedCategories);
  }, []);

  const addLineBreaks = (description) => {
    return description.split(".").join("\n");
  };

  const slides = shuffledPhotos.map((photo) => ({
    src: photo.src,
    description: addLineBreaks(photo.description),
  }));

  const handleAddToCategory = (photo) => {
    setSelectedPhoto(photo);
    setModalOpen(true);
  };

  const handleSaveCategory = (category) => {
    const updatedCategories = [...categories];
    let categoryIndex = updatedCategories.findIndex((cat) => cat.name === category);

    if (categoryIndex === -1) {
      updatedCategories.push({ name: category, photos: [selectedPhoto] });
    } else {
      updatedCategories[categoryIndex].photos.push(selectedPhoto);
    }

    setCategories(updatedCategories);
    localStorage.setItem("categories", JSON.stringify(updatedCategories));
  };

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
                  <div style={{ position: "absolute", top: "5px", left: "5px" }}>
                    <button
                      onClick={() => handleAddToCategory(photo)}
                      className="bg-gray-500 text-white text-bold rounded-full p-2"
                    >
                     +
                    </button>
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
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSaveCategory}
        existingCategories={categories.map(category => category.name)}
      />
    </div>
  );
}

export default Gallery;
