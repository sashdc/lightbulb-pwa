import Tile from "../ui/menuTile/menuTile";
import BackButton from "../ui/backbutton/backbutton2";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10 p-4 pb-0">
      <Tile imageUrl="/images/poses.webp" title="POSES" link="/poses" />
      {/* <Tile imageUrl="/images/saved.webp" title="SAVED" link="/" /> */}
      <Tile
        imageUrl="/images/favourites.webp"
        title="FAVOURITES"
        link="/favourites"
      />
      <Tile
        imageUrl="/images/sessions.webp"
        title="SESSIONS"
        link="/sessions"
      />
      <BackButton backLocation="/" />
    </div>
  );
}
