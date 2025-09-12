import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { LiaUsersSolid } from "react-icons/lia";
import { PiChartLineUpBold } from "react-icons/pi";
import { RiContractLine } from "react-icons/ri";

import { Contract } from "./components/Contract";

export default function App() {
  const [isChartOpen, setIsChartOpen] = useState<boolean>(false);
  const [isContractOpen, setIsContractOpen] = useState<boolean>(false);
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-sky-300 from-40% to-green-300 to-70% overflow-x-hidden">
      {/* Scène: ratio verrouillé = même référentiel que l'image */}
      <div className="relative w-full max-w-2xl aspect-[2/3]">
        {/* Le dessin devient un vrai élément, pas un background CSS */}
        <img
          src="/mobile-bg.png"
          alt="This is a Farm"
          className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none"
          draggable={false}
        />

        {/* X (Twitter) Icon */}
        <a
          href="https://x.com/ThisisaFarm"
          className="absolute animate-bounce hover:scale-120 active:scale-95 transition-transform duration-300 z-10 rotate-15 -translate-x-1/2 -translate-y-1/2"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            left: "90%",
            top: "18%",
          }}
        >
          <FaSquareXTwitter className="size-10 sm:size-16 text-black drop-shadow-lg" />
        </a>

        {/* Coingecko Icon */}
        <a
          href="https://www.coingecko.com/en/coins/this-is-a-farm"
          className="absolute animate-bounce hover:scale-110 active:scale-95 transition-transform duration-300 z-10 -rotate-15 -translate-x-1/2 -translate-y-1/2"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            left: "18%",
            top: "60%",
          }}
        >
          <img
            src="/CG-Symbol.svg"
            alt="Coingecko"
            className="size-9 sm:size-15 drop-shadow-lg"
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
            className="size-9 sm:size-16 drop-shadow-lg"
          />
        </a>

        {/* Chart Modal */}
        <Dialog open={isChartOpen} onOpenChange={setIsChartOpen}>
          <DialogTrigger asChild>
            <button
              onClick={() => setIsChartOpen(true)}
              className="absolute animate-bounce hover:scale-110 active:scale-95 transition-transform duration-300 z-10 rotate-9 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              style={{
                left: "71%",
                top: "86%",
              }}
            >
              <PiChartLineUpBold className="size-11 sm:size-17 text-lime-400 drop-shadow-lg" />
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
              className="absolute animate-bounce hover:scale-110 active:scale-95 transition-transform duration-300 z-10 -rotate-12 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              style={{
                left: "62.5%",
                top: "60.5%",
              }}
            >
              <RiContractLine className="size-10 sm:size-16 text-amber-300 drop-shadow-lg" />
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-xl">
            <DialogHeader>
              <DialogTitle>Contract Address</DialogTitle>
              <DialogDescription className="text-xs sm:text-sm">
                Make life changing money by joining the $Farm
              </DialogDescription>
            </DialogHeader>
            <Contract />
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
}

// <a
// href="https://dexscreener.com/solana/42vtq6lbytcptnmqwvstuaewvmckwmfmabwwivyhidcj"
// className="absolute animate-bounce hover:scale-110 active:scale-95 transition-transform duration-300 z-10 rotate-6 -translate-x-1/2 -translate-y-1/2"
// target="_blank"
// rel="noopener noreferrer"
// style={{
//   left: "69%",
//   top: "96%",
// }}
// >
// <img
//   src="/dex-screener-seeklogo.svg"
//   alt="Dexscreener"
//   className="size-10 sm:size-16 drop-shadow-lg brightness-0"
// />
// </a>
