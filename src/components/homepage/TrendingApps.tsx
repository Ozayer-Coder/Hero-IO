import { IApp } from "@/types/AppsType";
import AppCard from "../shared/AppCard";
import Link from "next/link";
import { getAllApps } from "@/lib/apps";


const TrendingApps = async () => {
  const data = await getAllApps();
  console.log(data);
  return (
    <div className="my-20 container mx-auto px-4">
      <div className="text-center space-y-4 max-w-400 mx-auto">
        <h2 className="text-4xl font-bold mb-4">Trending Apps</h2>
        <p className="text-lg text-gray-600">
          Explore the latest and most popular applications!
        </p>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {data.slice(0,8).map((app: IApp, index: number) => 
          <AppCard key={index} app={app} />
        )}
      </div>
      <div className="text-center mt-8">
        <Link href="/apps">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View All Apps
        </button>
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
