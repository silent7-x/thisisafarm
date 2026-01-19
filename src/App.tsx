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
import { type ReactNode, useEffect, useState } from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { LuChartCandlestick } from "react-icons/lu";

import { FaTelegramPlane } from "react-icons/fa";
import { Contract } from "./components/Contract";
import { Footer } from "./components/Footer";
import { Loader } from "./components/Loader";
import { Button } from "./components/ui/button";

type FloatingProps = {
  left: string;
  top: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

function FloatingButton({
  left,
  top,
  className,
  children,
  onClick,
}: FloatingProps) {
  return (
    <button
      className={
        "absolute animate-bounce hover:scale-110 active:scale-95 transition-transform duration-300 z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer " +
        (className ?? "")
      }
      style={{ left, top }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

type FloatingAnchorProps = FloatingProps & {
  href: string;
  target?: string;
  rel?: string;
};

function FloatingAnchor({
  href,
  target = "_blank",
  rel = "noopener noreferrer",
  left,
  top,
  className,
  children,
}: FloatingAnchorProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={
        "absolute animate-bounce hover:scale-110 active:scale-95 transition-transform duration-300 z-10 -translate-x-1/2 -translate-y-1/2 " +
        (className ?? "")
      }
      style={{ left, top }}
    >
      {children}
    </a>
  );
}

function SquareDialog({ bg, children }: { bg: 2 | 3; children: ReactNode }) {
  // Keep Tailwind classes static so JIT doesn't purge the background-image utilities.
  const bgClass =
    bg === 2 ? "bg-[url('/dialog-bg2.png')]" : "bg-[url('/dialog-bg3.png')]";
  return (
    <DialogContent
      className={`w-[90%] sm:max-w-sm aspect-square bg-cover bg-center bg-no-repeat ${bgClass}`}
    >
      {children}
    </DialogContent>
  );
}

export default function App() {
  const [isTwitterOpen, setIsTwitterOpen] = useState<boolean>(false);
  const [isChartOpen, setIsChartOpen] = useState<boolean>(false);
  const [isContractOpen, setIsContractOpen] = useState<boolean>(false);
  const [isJupiterOpen, setIsJupiterOpen] = useState<boolean>(false);
  const [isTelegramOpen, setIsTelegramOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showFooter, setShowFooter] = useState<boolean>(false);

  useEffect(() => {
    // Preload images on JS side (double safety net)
    const mobileImg = new Image();
    mobileImg.src = "/mobile-bg.webp";
    mobileImg.decode?.().catch(() => {});

    const dialogBg2Img = new Image();
    dialogBg2Img.src = "/dialog-bg2.png";
    dialogBg2Img.decode?.().catch(() => {});

    const dialogBg3Img = new Image();
    dialogBg3Img.src = "/dialog-bg3.png";
    dialogBg3Img.decode?.().catch(() => {});

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
    <main className="min-h-svh sm:min-h-screen  w-full flex flex-col items-center justify-center bg-gradient-to-b from-sky-300 from-40% to-green-300 to-70% overflow-x-hidden">
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
            <Dialog open={isTwitterOpen} onOpenChange={setIsTwitterOpen}>
              <DialogTrigger asChild>
                <FloatingButton
                  left="90%"
                  top="17.5%"
                  className="rotate-15"
                  onClick={() => setIsTwitterOpen(true)}
                >
                  <FaSquareXTwitter className="size-11 sm:size-18 text-black drop-shadow-lg" />
                </FloatingButton>
              </DialogTrigger>
              <SquareDialog bg={3}>
                <div className="flex flex-col gap-2 w-full mt-auto">
                  <DialogClose asChild>
                    <a
                      href="https://x.com/ThisisaFarm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="cursor-pointer w-full active:scale-95 transition-transform"
                      >
                        👨‍🌾&nbsp;&nbsp;Official Account
                      </Button>
                    </a>
                  </DialogClose>
                  <DialogClose asChild>
                    <a
                      href="https://x.com/i/communities/1931968100594819518"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="cursor-pointer w-full active:scale-95 transition-transform"
                      >
                        🤲&nbsp;&nbsp;X Community
                      </Button>
                    </a>
                  </DialogClose>
                </div>
              </SquareDialog>
            </Dialog>

            {/* Coingecko Icon */}
            <FloatingAnchor
              href="https://www.coingecko.com/en/coins/this-is-a-farm"
              left="18%"
              top="59%"
              className="-rotate-15 size-10 sm:size-16"
            >
              <img
                src="/CG-Symbol.svg"
                alt="Coingecko"
                className="drop-shadow-lg"
              />
            </FloatingAnchor>

            {/* Pump.fun Logo */}
            <FloatingAnchor
              href="https://pump.fun/coin/BdTEJq3yEp68SNmeBfqBbDDy7nbSGftkDhDkVef6pump"
              left="65%"
              top="34.5%"
              className="animate-spin-pause"
            >
              <img
                src="/logo.webp"
                alt="Pump.fun"
                className="size-10 sm:size-16 drop-shadow-lg"
              />
            </FloatingAnchor>

            {/* Chart Modal */}
            <Dialog open={isChartOpen} onOpenChange={setIsChartOpen}>
              <DialogTrigger asChild>
                <FloatingButton
                  left="14%"
                  top="80%"
                  className="-rotate-9"
                  onClick={() => setIsChartOpen(true)}
                >
                  <LuChartCandlestick className="size-10 sm:size-16  drop-shadow-lg " />
                </FloatingButton>
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
                <FloatingButton
                  left="62.5%"
                  top="61%"
                  className="-rotate-4"
                  onClick={() => setIsContractOpen(true)}
                >
                  <ReceiptText
                    className="size-10 sm:size-15 text-amber-400 drop-shadow-lg"
                    strokeWidth={2.25}
                  />
                </FloatingButton>
              </DialogTrigger>
              <SquareDialog bg={2}>
                <DialogHeader className="text-left mt-auto">
                  <DialogTitle className="mb-2">
                    Contract Address 🧑‍🌾 🚜 🌽
                  </DialogTitle>
                  <DialogDescription className="text-sm font-semibold">
                    "You either $Farm or get farmed!"
                  </DialogDescription>
                </DialogHeader>
                <Contract />
              </SquareDialog>
            </Dialog>

            {/* Telegram Modal */}
            <Dialog open={isTelegramOpen} onOpenChange={setIsTelegramOpen}>
              <DialogTrigger asChild>
                <FloatingButton
                  left="13%"
                  top="29.5%"
                  className="rotate-8 size-13 sm:size-21"
                  onClick={() => setIsTelegramOpen(true)}
                >
                  <FaTelegramPlane className="size-10 sm:size-16 drop-shadow-lg text-[#0088cc]" />
                </FloatingButton>
              </DialogTrigger>
              <SquareDialog bg={3}>
                <div className="flex flex-col gap-2 w-full mt-auto">
                  <DialogClose asChild>
                    <a
                      href="https://t.me/thisisafarm_sol"
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
                        😂&nbsp;&nbsp;Memes
                      </Button>
                    </a>
                  </DialogClose>
                </div>
              </SquareDialog>
            </Dialog>

            {/* Buy Token Icon */}
            <Dialog open={isJupiterOpen} onOpenChange={setIsJupiterOpen}>
              <DialogTrigger asChild>
                <FloatingButton
                  left="71%"
                  top="83.25%"
                  className="rotate-8"
                  onClick={() => setIsJupiterOpen(true)}
                >
                  <span className="text-6xl sm:text-8xl drop-shadow-lg">
                    💰
                  </span>
                </FloatingButton>
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
