export const getAllApps = async () => {
  try {
    const res = await fetch("http://localhost:3000/data.json", { cache: "force-cache" });
    const data = await res.json();
    return data;
  } catch {
    throw new Error("Failed to fetch apps data");
  }
};
