import * as React from "react";

const Favourite = ({ photo }) => {
  const [isFavourite, setIsFavourite] = React.useState(false);

  React.useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
    setIsFavourite(favourites.some(fav => fav.src === photo.src));
  }, [photo]);

  const toggleFavourite = () => {
    let favourites = JSON.parse(localStorage.getItem('favourites')) || [];
    console.log(favourites.length)
    if (isFavourite) {
      favourites = favourites.filter(fav => fav.src !== photo.src);
    } else {
      favourites.push(photo);
    }

    localStorage.setItem('favourites', JSON.stringify(favourites));
    setIsFavourite(!isFavourite);
  };

  return (
    <div onClick={toggleFavourite} style={{ cursor: 'pointer' }} className="hover:scale-125 active:scale-75 duration-100">
      {isFavourite ? '❤️' : '🤍'}
    </div>
  );
};

export default Favourite;
