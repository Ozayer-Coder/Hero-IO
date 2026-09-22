const AppDetailsSkeleton = () => {
  return (
    <main className="container mx-auto px-4 py-10">
      {/* App Header */}
      <section className="flex animate-pulse flex-col gap-6 rounded-xl border border-base-300 bg-base-100 p-6 shadow-sm md:flex-row">
        {/* App Image Skeleton */}
        <div className="flex shrink-0 items-center justify-center">
          <div className="h-[250px] w-[250px] rounded-2xl bg-base-300" />
        </div>

        {/* App Information */}
        <div className="flex flex-1 flex-col">
          {/* Title */}
          <div className="h-9 w-72 rounded-md bg-base-300" />

          {/* Company */}
          <div className="mt-3 h-4 w-48 rounded bg-base-300" />

          {/* Stats */}
          <div className="mt-6 flex flex-wrap gap-8">
            {/* Downloads */}
            <div>
              <div className="h-5 w-5 rounded bg-base-300" />

              <div className="mt-2 h-3 w-16 rounded bg-base-300" />

              <div className="mt-2 h-6 w-20 rounded bg-base-300" />
            </div>

            {/* Rating */}
            <div>
              <div className="h-5 w-5 rounded bg-base-300" />

              <div className="mt-2 h-3 w-24 rounded bg-base-300" />

              <div className="mt-2 h-6 w-12 rounded bg-base-300" />
            </div>

            {/* Reviews */}
            <div>
              <div className="h-5 w-5 rounded bg-base-300" />

              <div className="mt-2 h-3 w-20 rounded bg-base-300" />

              <div className="mt-2 h-6 w-20 rounded bg-base-300" />
            </div>
          </div>

          {/* Install Button */}
          <div className="mt-5 h-10 w-40 rounded-md bg-base-300" />
        </div>
      </section>

      {/* Ratings Skeleton */}
      <section className="mt-8 rounded-xl border border-base-300 bg-base-100 p-6">
        {/* Heading */}
        <div className="mb-5 h-6 w-20 animate-pulse rounded bg-base-300" />

        <div className="animate-pulse space-y-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex items-center gap-4">
              {/* Rating name */}
              <div className="h-4 w-16 shrink-0 rounded bg-base-300" />

              {/* Rating bar */}
              <div className="h-3 flex-1 rounded-full bg-base-300" />

              {/* Count */}
              <div className="h-4 w-24 rounded bg-base-300" />
            </div>
          ))}
        </div>
      </section>

      {/* Description Skeleton */}
      <section className="mt-8 rounded-xl border border-base-300 bg-base-100 p-6">
        {/* Heading */}
        <div className="mb-5 h-6 w-28 animate-pulse rounded bg-base-300" />

        {/* Paragraph */}
        <div className="animate-pulse space-y-3">
          <div className="h-4 w-full rounded bg-base-300" />
          <div className="h-4 w-full rounded bg-base-300" />
          <div className="h-4 w-11/12 rounded bg-base-300" />
          <div className="h-4 w-10/12 rounded bg-base-300" />
          <div className="h-4 w-8/12 rounded bg-base-300" />
        </div>
      </section>
    </main>
  );
};

export default AppDetailsSkeleton;
