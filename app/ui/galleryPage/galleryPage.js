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
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedPhoto, setSelectedPhoto] = React.useState(null);
  const [categories, setCategories] = React.useState([]);
  const [shuffledPhotos, setShuffledPhotos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setShuffledPhotos(photos);
    setLoading(false);
  }, [photos]);

  React.useEffect(() => {
    const storedCategories =
      JSON.parse(localStorage.getItem("categories")) || [];
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
    let categoryIndex = updatedCategories.findIndex(
      (cat) => cat.name === category
    );

    if (categoryIndex === -1) {
      updatedCategories.push({ name: category, photos: [selectedPhoto] });
    } else {
      updatedCategories[categoryIndex].photos.push(selectedPhoto);
    }

    setCategories(updatedCategories);
    localStorage.setItem("categories", JSON.stringify(updatedCategories));
  };

  const handleRemoveCategory = (category) => {
    const updatedCategories = categories
      .map((cat) => {
        if (cat.name === category) {
          return {
            ...cat,
            photos: cat.photos.filter(
              (photo) => photo.src !== selectedPhoto.src
            ),
          };
        }
        return cat;
      })
      .filter((cat) => cat.photos.length > 0);

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
        {loading ? (
          <div className="loading-animation">Loading...</div>
        ) : shuffledPhotos.length === 0 ? (
          <div className={`${dosis.className} text-center text-3xl font-bold`}>
            No images here yet.
          </div>
        ) : (
          <>
            <PhotoAlbum
              layout="columns"
              columns={(containerWidth) => {
                if (containerWidth < 600) return 2;
                if (containerWidth < 800) return 3;
                return 4;
              }}
              photos={shuffledPhotos}
              targetRowHeight={150}
              onClick={({ index: current }) => setIndex(current)}
              renderPhoto={({ photo, layout, imageProps }) => (
                <div style={{ position: "relative" }}>
                  <img {...imageProps} onLoad={() => setLoading(false)} />
                  <div
                    style={{ position: "absolute", top: "4px", right: "7px" }}
                  >
                    <Favourite photo={photo} />
                  </div>
                  <div
                    style={{ position: "absolute", top: "0px", left: "0px" }}
                  >
                    <button
                      onClick={() => handleAddToCategory(photo)}
                      className="bg-gray-700 text-white font-black rounded-br-lg p-1 hover:bg-slate-300 hover:font-extrabold hover:text-gray-700 active:bg-gray-700 active:font-bold active:text-slate-50 duration-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            />
            <Lightbox
              index={index}
              plugins={[Captions, Share]}
              captions={{
                showToggle: false,
                descriptionTextAlign: "center",
                descriptionMaxLines: 6,
              }}
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
        existingCategories={categories.map((category) => category.name)}
        selectedPhotoCategories={categories
          .filter((category) =>
            category.photos.some((photo) => photo.src === selectedPhoto?.src)
          )
          .map((category) => category.name)}
        onRemove={handleRemoveCategory}
      />
    </div>
  );
}

export default Gallery;
