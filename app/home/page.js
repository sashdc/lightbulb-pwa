import Link from "next/link";
import Tile from "../ui/menuTile/menuTile";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10 p-4">
      <Tile imageUrl="/images/poses.webp" title="POSES" link="/poses" />
      <Tile imageUrl="/images/saved.webp" title="SAVED" link="/" />

      <div className="w-4/5 h-16 flex items-center justify-center">
        <Link href="/">
          <button className="text-blue-500 text-2xl font-bold">Back</button>
        </Link>
      </div>
    </div>
  );
}
