"use client";
import AppCard from "@/components/shared/AppCard";
import { AppContext } from "@/context/AppContext";
import { IApp } from "@/types/AppsType";
import React, { useContext } from "react";

const InstallationPage = () => {
  const { installedApps } = useContext(AppContext);
  return (
    <div className="my-20 container mx-auto px-4">
      <div className="text-center space-y-4 max-w-400 mx-auto bg-base-200 p-6 rounded-lg ">
        <h2 className="text-4xl font-bold mb-4">Installed Apps</h2>
        <p className="text-lg text-gray-600">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="mt-8">
        <div>
          <h3 className="font-semibold">({installedApps.length}) Apps Found</h3>
        </div>
        {installedApps.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-2">
            {installedApps.map((app: IApp, index: number) => (
              <AppCard key={index} app={app} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 font bold text-5xl text-center mt-10">
            No installed apps found.
          </p>
        )}
      </div>
    </div>
  );
};

export default InstallationPage;
