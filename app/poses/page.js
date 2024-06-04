import Link from "next/link";

// Reusable Tile component
const Tile = ({ imageUrl, title, link }) => (
  <div className="relative w-4/5 h-64 flex items-center justify-center mx-auto">
    <div
      className="relative w-full h-full bg-cover bg-center transform transition-transform duration-500 hover:scale-105 rounded-3xl"
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
            <Link href={link}>

      <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50 rounded-3xl hover:bg-opacity-30  duration-500">
        <h2 className="text-white text-3xl font-bold">{title}</h2>
      </div>
            </Link>
    </div>
  </div>
);

export default function Poses() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-screen-lg ">
        <Tile imageUrl="/images/wedding.webp" title="WEDDING" link="/wedding" />

        <Tile imageUrl="/images/engagement.webp" title="ENGAGEMENT" link="/engagement"/>

        <Tile imageUrl="/images/family.webp" title="FAMILY" link="/family"/>

        <Tile imageUrl="/images/boudoir.webp" title="BOUDOIR" link="/boudoir"/>
      </div>

      <div className="w-full max-w-screen-lg h-16 flex items-center justify-center mt-10">
        <Link href="/home">
          <button className="text-blue-500 text-2xl font-bold">Back</button>
        </Link>
      </div>
    </div>
  );
}