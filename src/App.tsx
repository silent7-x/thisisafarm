import { FaSquareXTwitter } from "react-icons/fa6";
import { LiaUsersSolid } from "react-icons/lia";

export default function App() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-sky-300 from-40% to-green-300 to-60% overflow-x-hidden">
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
            top: "9%",
          }}
        >
          <FaSquareXTwitter className="size-10 sm:size-14 text-black drop-shadow-lg" />
        </a>

        {/* Coingecko Icon */}
        <a
          href="https://www.coingecko.com/en/coins/this-is-a-farm"
          className="absolute animate-bounce hover:scale-110 active:scale-95 transition-transform duration-300 z-10 -rotate-12 -translate-x-1/2 -translate-y-1/2"
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
            className="size-9 sm:size-14 drop-shadow-lg"
          />
        </a>

        {/* Dexscreener Icon */}
        <a
          href="https://dexscreener.com/solana/42vtq6lbytcptnmqwvstuaewvmckwmfmabwwivyhidcj"
          className="absolute animate-bounce hover:scale-110 active:scale-95 transition-transform duration-300 z-10 rotate-6 -translate-x-1/2 -translate-y-1/2"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            left: "69%",
            top: "96%",
          }}
        >
          <img
            src="/dex-screener-seeklogo.svg"
            alt="Dexscreener"
            className="size-10 sm:size-14 drop-shadow-lg brightness-0"
          />
        </a>

        {/* Community Icon */}
        <a
          href="https://x.com/i/communities/1931968100594819518"
          className="absolute animate-bounce hover:scale-110 active:scale-95 transition-transform duration-300 z-10 -rotate-6 -translate-x-1/2 -translate-y-1/2"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            left: "13%",
            top: "29%",
          }}
        >
          <LiaUsersSolid className="size-10 sm:size-14 text-black drop-shadow-lg" />
        </a>

        {/* Pump.fun Logo */}
        <a
          href="https://pump.fun/coin/BdTEJq3yEp68SNmeBfqBbDDy7nbSGftkDhDkVef6pump"
          className="absolute animate-spin-pause hover:scale-110 active:scale-95 transition-transform duration-300 z-10 -translate-x-1/2 -translate-y-1/2"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            left: "61%",
            top: "45%",
          }}
        >
          <img
            src="/logo.webp"
            alt="Pump.fun"
            className="size-9 sm:size-14 drop-shadow-lg"
          />
        </a>
      </div>
    </main>
  );
}
