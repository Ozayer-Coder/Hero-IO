import Image from "next/image";
import Link from "next/link";
import { FaStar, FaDownload } from "react-icons/fa";

interface App {
  image: string;
  title: string;
  companyName: string;
  id: number;
  description: string;
  size: number;
  reviews: string;
  ratingAvg: number;
  downloads: string;
}

interface AppCardProps {
  app: App;
}

const AppCard = ({ app }: AppCardProps) => {
  return (
    <div className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition-shadow">
      <figure className="p-4 pb-0">
        <Image
          src={app.image}
          alt={app.title}
          width={300}
          height={300}
          className="rounded-2xl"
        />
      </figure>

      <div className="card-body p-4">
        <h2 className="card-title text-base">{app.title}</h2>

        <p className="text-sm text-base-content/60">{app.companyName}</p>

        <div className="flex items-center justify-between mt-2 text-sm">
          <span className="flex items-center gap-1 text-warning">
            <FaStar />
            {app.ratingAvg}
          </span>

          <span className="flex items-center gap-1 text-base-content/60">
            <FaDownload />
            {app.downloads}
          </span>

          <span className="text-base-content/60">{app.size} MB</span>
        </div>
        <div className="card-actions justify-end mt-4">
          <Link href={`/apps/${app.id}`}>
            <button className="btn bg-[#632EE3] text-white rounded-xl">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
