import BackButton from "../ui/backbutton/backbutton2";
import Tile from "../ui/menuTile/menuTile";

export default function Poses() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-10 w-full max-w-screen-lg ">
        <Tile imageUrl="/images/wedding.webp" title="WEDDING" link="/wedding" />

        <Tile
          imageUrl="/images/engagement.webp"
          title="ENGAGEMENT"
          link="/engagement"
        />

        <Tile imageUrl="/images/family.webp" title="FAMILY" link="/family" />

        {/* <Tile imageUrl="/images/boudoir.webp" title="BOUDOIR" link="/boudoir" /> */}
      </div>
      <BackButton backLocation="/" />
    </div>
  );
}
