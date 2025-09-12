import { useState } from "react";

export const Loader = () => {
  const [gifLoaded, setGifLoaded] = useState(false);

  return (
    //
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-sky-300 from-40% to-green-300 to-70% animate-in sm:slide-in-from-top-4 fade-in-10 duration-800">
      <div className="flex flex-col items-center gap-4">
        {/* Loading animation with farm theme */}
        <div className="relative">
          {/* Loading GIF */}
          <img
            src="/tractor_opt.webp"
            alt="Loading animation"
            className={`size-68 sm:size-96 object-contain ${
              gifLoaded ? "block" : "hidden"
            } `}
            onLoad={() => setGifLoaded(true)}
          />

          {/* Animated tractor fallback */}
          {!gifLoaded && (
            <div className="animate-bounce">
              <span className="text-6xl">🚜</span>
            </div>
          )}

          {/* Flying dirt particles */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
            <div className="flex gap-1">
              <div
                className="w-1 h-1 bg-amber-600 rounded-full animate-ping"
                style={{ animationDelay: "0s" }}
              ></div>
              <div
                className="w-1 h-1 bg-amber-600 rounded-full animate-ping"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-1 h-1 bg-amber-600 rounded-full animate-ping"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Loading text */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            This is a Farm
          </h2>
          <p className="text-gray-600 animate-pulse">
            Farming your crypto experience with the agriCult
          </p>
        </div>

        {/* Animated progress bar */}
        <div className="w-48 h-2 bg-white/30 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};
