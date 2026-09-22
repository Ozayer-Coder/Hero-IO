"use client";

import { AppContext } from "@/context/AppContext";
import { IApp } from "@/types/AppsType";
import Image from "next/image";
import { useContext } from "react";
import { FaDownload, FaStar, FaRegCommentDots } from "react-icons/fa";

interface AppDetailsProps {
  app: IApp;
}

const AppDetailsCard = ({ app }: AppDetailsProps) => {
  const data = useContext(AppContext);
  const { installedApps, setInstalledApps } = data;
  const handleInstall = () => {
    if (!installedApps.some((installedApp) => installedApp.id === app.id)) {
      setInstalledApps([...installedApps, app]);
    }
  };
  const maxRatingCount = Math.max(
    ...app.ratings.map((rating: { count: number }) => rating.count),
  );

  return (
    <main className="container mx-auto px-4 py-10">
      {/* App Header */}
      <section className="flex flex-col gap-6 rounded-xl border border-base-300 bg-base-100 p-6 shadow-sm md:flex-row">
        {/* App Image */}
        <div className="flex shrink-0 items-center justify-center">
          <Image
            src={app.image}
            alt={app.title}
            width={250}
            height={250}
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>

        {/* App Information */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold md:text-3xl">{app.title}</h1>

          <p className="mt-1 text-sm text-gray-500">
            Developed by{" "}
            <span className="font-medium text-primary">{app.companyName}</span>
          </p>

          {/* Stats */}
          <div className="mt-6 flex flex-wrap gap-8">
            <div>
              <FaDownload className="text-xl text-green-500" />

              <p className="mt-1 text-xs text-gray-500">Downloads</p>

              <p className="text-xl font-bold">{app.downloads}</p>
            </div>

            <div>
              <FaStar className="text-xl text-orange-400" />

              <p className="mt-1 text-xs text-gray-500">Average Ratings</p>

              <p className="text-xl font-bold">{app.ratingAvg}</p>
            </div>

            <div>
              <FaRegCommentDots className="text-xl text-purple-500" />

              <p className="mt-1 text-xs text-gray-500">Total Reviews</p>

              <p className="text-xl font-bold">{app.reviews}</p>
            </div>
          </div>

          {/* Install Button */}
          <button
            onClick={handleInstall}
            disabled={installedApps.some(
              (installedApp) => installedApp.id === app.id,
            )}
            className="mt-5 rounded-md bg-green-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-green-600 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
          >
            {installedApps.some((installedApp) => installedApp.id === app.id)
              ? "✔️ Installed"
              : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </section>

      {/* Ratings */}
      <section className="mt-8 rounded-xl border border-base-300 bg-base-100 p-6">
        <h2 className="mb-5 text-lg font-bold">Ratings</h2>

        <div className="space-y-4">
          {[...app.ratings]
            .reverse()
            .map((rating: { name: string; count: number }) => {
              const percentage = (rating.count / maxRatingCount) * 100;

              return (
                <div key={rating.name} className="flex items-center gap-4">
                  {/* Rating Name */}
                  <span className="w-16 shrink-0 text-sm text-gray-500">
                    {rating.name}
                  </span>

                  {/* Bar */}
                  <div className="h-3 flex-1 overflow-hidden rounded-full bg-base-200">
                    <div
                      className="h-full rounded-full bg-orange-400 transition-all"
                      style={{
                        width: `${percentage}%`,
                      }}
                    />
                  </div>

                  {/* Count */}
                  <span className="w-24 text-right text-xs text-gray-400">
                    {rating.count.toLocaleString()}
                  </span>
                </div>
              );
            })}
        </div>
      </section>

      {/* Description */}
      <section className="mt-8 rounded-xl border border-base-300 bg-base-100 p-6">
        <h2 className="mb-5 text-lg font-bold">Description</h2>

        <p className="text-sm leading-7 text-gray-500">{app.description}</p>
      </section>
    </main>
  );
};

export default AppDetailsCard;
