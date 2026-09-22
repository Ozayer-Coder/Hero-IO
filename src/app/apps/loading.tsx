const AppsLoading = () => {
  return (
    <div className="my-20 container mx-auto px-4">
      {/* Header */}
      <div className="text-center space-y-4 max-w-400 mx-auto bg-base-200 p-6 rounded-lg">
        <div className="skeleton h-10 w-48 mx-auto"></div>
        <div className="skeleton h-5 w-3/4 max-w-xl mx-auto"></div>
      </div>

      {/* Apps */}
      <div className="mt-8">
        {/* Apps count */}
        <div className="skeleton h-5 w-32 mb-4"></div>

        {/* App cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="card bg-base-100 border border-base-300 shadow-sm"
            >
              {/* App Image */}
              <figure className="p-4 pb-0">
                <div className="skeleton aspect-square w-full rounded-2xl"></div>
              </figure>

              {/* Card Content */}
              <div className="card-body p-4">
                {/* App title */}
                <div className="skeleton h-5 w-3/4"></div>

                {/* Company name */}
                <div className="skeleton h-4 w-1/2"></div>

                {/* Rating / Downloads / Size */}
                <div className="flex items-center justify-between mt-2">
                  <div className="skeleton h-4 w-12"></div>

                  <div className="skeleton h-4 w-16"></div>

                  <div className="skeleton h-4 w-14"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppsLoading;
