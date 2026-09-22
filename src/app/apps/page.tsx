import AppCard from "@/components/shared/AppCard";
import { getAllApps } from "@/lib/apps";
import { IApp } from "@/types/AppsType";
import React from "react";

const AppsPage = async () => {
  const appsdata = await getAllApps();
  return (
    <div className="my-20 container mx-auto px-4">
      <div className="text-center space-y-4 max-w-400 mx-auto bg-base-200 p-6 rounded-lg ">
        <h2 className="text-4xl font-bold mb-4">All Apps</h2>
        <p className="text-lg text-gray-600">
          Explore the complete list of applications available in our app store.
        </p>
      </div>
      <div className="mt-8">
        <div>
          <h3 className="font-semibold">({appsdata.length}) Apps Found</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-2">
          {appsdata.map((app: IApp, index: number) => (
            <AppCard key={index} app={app} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppsPage;
