import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReceiptText } from "lucide-react";
import { useEffect, useState } from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { LiaUsersSolid } from "react-icons/lia";
import { LuChartCandlestick } from "react-icons/lu";

import { Contract } from "./components/Contract";
import { Footer } from "./components/Footer";
import { Loader } from "./components/Loader";
import { Button } from "./components/ui/button";

export default function App() {
  const [isChartOpen, setIsChartOpen] = useState<boolean>(false);
  const [isContractOpen, setIsContractOpen] = useState<boolean>(false);
  const [isJupiterOpen, setIsJupiterOpen] = useState<boolean>(false);
  const [isTelegramOpen, setIsTelegramOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showFooter, setShowFooter] = useState<boolean>(false);

  useEffect(() => {
    // Preload image on JS side (double safety net)
    const img = new Image();
    img.src = "/mobile-bg.webp";
    img.decode?.().catch(() => {});

    // Timer for overlay loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    // Timer for footer with 1 second delay
    const footerTimer = setTimeout(() => {
      setShowFooter(true);
    }, 3200);

    return () => {
      clearTimeout(timer);
      clearTimeout(footerTimer);
    };
  }, []);

  return (
    <main className="min-h-svh sm:min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-sky-300 from-40% to-green-300 to-70% overflow-x-hidden">
      <div className="flex flex-col max-w-2xl w-full flex-1 p-2 sm:p-4">
        {/* Scene: locked ratio = same reference as the image */}
        {/* sm:mt-16*/}
        <div className="flex-1 grid place-items-center">
          <div
            className={`relative w-full aspect-[2/3] transition-all duration-700 ease-out ${
              !isLoading
                ? "translate-y-0 opacity-100"
                : "-translate-y-full opacity-0"
            }`}
          >
            {/* The drawing becomes a real element, not a CSS background */}
            <img
              src="/mobile-bg.webp"
              alt="This is a Farm"
              className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none rounded-2xl sm:rounded-4xl"
              draggable={false}
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />

            {/* X (Twitter) Icon */}
            <a
              href="https://x.com/ThisisaFarm"
              className="absolute animate-bounce hover:scale-120 active:scale-95 transition-transform duration-300 z-10 rotate-15 -translate-x-1/2 -translate-y-1/2"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                left: "90%",
                top: "17.5%",
              }}
            >
              <FaSquareXTwitter className="size-11 sm:size-18 text-black drop-shadow-lg" />
            </a>

            {/* Coingecko Icon */}
            <a
              href="https://www.coingecko.com/en/coins/this-is-a-farm"
              className="absolute animate-bounce hover:scale-110 active:scale-95 transition-transform duration-300 z-10 -rotate-15 -translate-x-1/2 -translate-y-1/2 size-10 sm:size-16"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                left: "18%",
                top: "59%",
              }}
            >
              <img
                src="/CG-Symbol.svg"
                alt="Coingecko"
                className="drop-shadow-lg"
              />
            </a>

            {/* Community Icon */}
            <a
              href="https://x.com/i/communities/1931968100594819518"
              className="absolute animate-bounce hover:scale-110 active:scale-95 transition-transform duration-300 z-10  -translate-x-1/2 -translate-y-1/2"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                left: "12.5%",
                top: "29.25%",
              }}
            >
              <LiaUsersSolid className="size-10 sm:size-16 text-black drop-shadow-lg" />
            </a>

            {/* Pump.fun Logo */}
            <a
              href="https://pump.fun/coin/BdTEJq3yEp68SNmeBfqBbDDy7nbSGftkDhDkVef6pump"
              className="absolute animate-spin-pause hover:scale-110 active:scale-95 transition-transform duration-300 z-10 -translate-x-1/2 -translate-y-1/2"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                left: "65%",
                top: "34.5%",
              }}
            >
              <img
                src="/logo.webp"
                alt="Pump.fun"
                className="size-10 sm:size-16 drop-shadow-lg"
              />
            </a>

            {/* Chart Modal */}
            <Dialog open={isChartOpen} onOpenChange={setIsChartOpen}>
              <DialogTrigger asChild>
                <button
                  onClick={() => setIsChartOpen(true)}
                  className="absolute animate-bounce hover:scale-110 active:scale-95 transition-transform duration-300 z-10 -rotate-9 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{
                    left: "14%",
                    top: "80%",
                  }}
                >
                  <LuChartCandlestick className="size-10 sm:size-16  drop-shadow-lg " />
                </button>
              </DialogTrigger>
              <DialogContent className="h-[80vh] sm:h-[88vh] w-[96vw] p-0 pt-12 flex flex-col border-none shadow-none bg-transparent">
                <div className="flex-1">
                  <iframe
                    src="https://dexscreener.com/solana/42vtq6lbytcptnmqwvstuaewvmckwmfmabwwivyhidcj?embed=1&theme=dark&trades=0&info=0"
                    width="100%"
                    height="100%"
                    style={{ border: "none", borderRadius: "8px 8px 8px 8px" }}
                    title="This is a Farm Chart"
                  />
                </div>
              </DialogContent>
            </Dialog>

            {/* Contract Modal */}
            <Dialog open={isContractOpen} onOpenChange={setIsContractOpen}>
              <DialogTrigger asChild>
                <button
                  onClick={() => setIsContractOpen(true)}
                  className="absolute animate-bounce hover:scale-110 active:scale-95 transition-transform duration-300 z-10 -rotate-4 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{
                    left: "62.5%",
                    top: "61%",
                  }}
                >
                  <ReceiptText
                    className="size-10 sm:size-15 text-amber-400 drop-shadow-lg"
                    strokeWidth={2.25}
                  />
                </button>
              </DialogTrigger>
              <DialogContent
                className=" w-[90%] h-[40%] sm:h-[28%] sm:max-w-sm bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/dialog-bg2.png')",
                }}
              >
                <DialogHeader className="text-left mt-auto">
                  <DialogTitle className="mb-2">
                    Contract Address 🧑‍🌾 🚜 🌽
                  </DialogTitle>
                  <DialogDescription className="text-sm ">
                    Make life changing money by joining the $Farm
                  </DialogDescription>
                </DialogHeader>
                <Contract />
              </DialogContent>
            </Dialog>

            {/* Telegram Modal */}
            <Dialog open={isTelegramOpen} onOpenChange={setIsTelegramOpen}>
              <DialogTrigger asChild>
                <button
                  onClick={() => setIsTelegramOpen(true)}
                  className="absolute animate-bounce hover:scale-110 active:scale-95 transition-transform duration-300 z-10 rotate-16 -translate-x-1/2 -translate-y-1/2 size-13 sm:size-21 cursor-pointer"
                  style={{
                    left: "92%",
                    top: "96%",
                  }}
                >
                  <img
                    src="/telegram-seeklogo.svg"
                    alt="Telegram"
                    className="drop-shadow-lg"
                  />
                </button>
              </DialogTrigger>
              <DialogContent
                className="w-[90%] h-[40%] sm:h-[28%] sm:max-w-sm bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/dialog-bg.png')",
                }}
              >
                <div className="flex flex-col gap-2 w-full mt-auto">
                  <DialogClose asChild>
                    <a
                      href="https://t.me/farmonsolportal"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="cursor-pointer w-full active:scale-95 transition-transform"
                      >
                        👨‍🌾&nbsp;&nbsp;Community
                      </Button>
                    </a>
                  </DialogClose>
                  <DialogClose asChild>
                    <a
                      href="https://t.me/Farm_CTO_meme"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="cursor-pointer w-full active:scale-95 transition-transform"
                      >
                        😂&nbsp;&nbsp;Meme
                      </Button>
                    </a>
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>

            {/* Buy Token Icon */}
            <Dialog open={isJupiterOpen} onOpenChange={setIsJupiterOpen}>
              <DialogTrigger asChild>
                <button
                  onClick={() => setIsJupiterOpen(true)}
                  className="absolute animate-bounce hover:scale-110 active:scale-95 transition-transform duration-300 z-10 rotate-8 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{
                    left: "71%",
                    top: "83.25%",
                  }}
                >
                  <span className="text-6xl sm:text-8xl drop-shadow-lg">
                    💰
                  </span>
                </button>
              </DialogTrigger>
              <DialogContent className="h-[95vh] sm:max-w-xl sm:h-[86vh] p-0 pt-12 flex flex-col border-none shadow-none bg-transparent">
                <div className="flex-1">
                  <iframe
                    src="https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=BdTEJq3yEp68SNmeBfqBbDDy7nbSGftkDhDkVef6pump&embed=1"
                    width="100%"
                    height="100%"
                    style={{ border: "none", borderRadius: "8px 8px 8px 8px" }}
                    title="Jupiter Swap Widget"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div
          className={`transition-all duration-700 ease-in-out ${
            showFooter
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        >
          <Footer />
        </div>
      </div>

      {/* Overlay Loader */}
      {isLoading && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-gradient-to-b from-sky-300 from-40% to-green-300 to-70%">
          <Loader />
        </div>
      )}
    </main>
  );
}
