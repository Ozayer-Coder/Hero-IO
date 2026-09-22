export const getAllApps = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/data.json`,
      { cache: "force-cache" },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
