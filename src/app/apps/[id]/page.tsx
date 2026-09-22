import AppDetailsCard from "@/components/shared/AppDetailsCard";
import { getAllApps } from "@/lib/apps";
import React from "react";

type AppDetailsPageProps = {
  params: {
    id: string;
  };
};
const AppDetailsPage = async ({ params }: AppDetailsPageProps) => {
  const { id } = await params;
  const allApps = await getAllApps();
  const app = allApps.find((app: { id: number }) => app.id === parseInt(id));
  return <AppDetailsCard app={app} />;
};

export default AppDetailsPage;
