import Link from "next/link";

// Reusable Tile component
const Tile = ({ imageUrl, title, link }) => (
  <div className="relative w-4/5 h-64 flex items-center justify-center">
    <div
      className="relative w-full h-full bg-cover bg-center transform transition-transform duration-500 hover:scale-105 rounded-3xl"
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      <Link href={link}>
        <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50 rounded-3xl hover:bg-opacity-30  duration-500">
          <h2 className="text-white text-3xl font-bold hover:text-opacity-100 ">{title}</h2>
        </div>
      </Link>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10 p-4">
      {/* First Tile */}
      <Tile imageUrl="/images/poses.webp" title="POSES" link="/poses" />

      {/* Second Tile */}
      <Tile imageUrl="/images/saved.webp" title="SAVED" link="/" />

      {/* Back Button */}
      <div className="w-4/5 h-16 flex items-center justify-center">
        <Link href="/">
          <button className="text-blue-500 text-2xl font-bold">Back</button>
        </Link>
      </div>
    </div>
  );
}
