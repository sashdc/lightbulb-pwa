import Link from "next/link";
import Tile from "../ui/menuTile/menuTile";
import BackButton from "../ui/backbutton/backbutton2";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10 p-4">
      <Tile imageUrl="/images/poses.webp" title="POSES" link="/poses" />
      <Tile imageUrl="/images/saved.webp" title="SAVED" link="/" />
      <BackButton backLocation="/" />
     
    </div>
  );
}
