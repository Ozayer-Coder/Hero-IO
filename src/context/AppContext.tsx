'use client';
import { IApp } from "@/types/AppsType";
import React, { createContext, ReactNode, useState } from "react";
interface IAppContext {
  installedApps: IApp[];
  setInstalledApps: React.Dispatch<React.SetStateAction<IApp[]>>;
}

export const AppContext = createContext<IAppContext>({
  installedApps: [],
  setInstalledApps: () => {},
});

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [installedApps, setInstalledApps] = useState<IApp[]>([]);
  const sharedData: IAppContext = {
    installedApps,
    setInstalledApps,
  };
  return (
    <AppContext.Provider value={sharedData}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
