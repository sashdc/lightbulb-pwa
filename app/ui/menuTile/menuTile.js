import Link from "next/link";
import { dosis } from "../../fonts";

// Reusable Tile component
const Tile = ({ imageUrl, title, link }) => (
  <div className="relative w-4/5 h-64 flex items-center justify-center mx-auto">
    <div
      className="relative w-full h-full bg-cover bg-center transform transition-transform duration-500 hover:scale-105 shadow-md hover:shadow-lg rounded-3xl animate-in fade-in duration-1000"
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      <Link href={link}>
        <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50 rounded-3xl hover:bg-opacity-30 duration-500">
          <h2 className={`text-slate-200 text-4xl md:text-5xl font-bold bg-slate-500/25 p-1 px-2 rounded-lg shadow-md hover:bg-slate-500/75 duration-500 ${dosis.className}`}>
            {title}
          </h2>
        </div>
      </Link>
    </div>
  </div>
);

export default Tile;
