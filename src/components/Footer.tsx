import { FaGithub } from "react-icons/fa6";

export const Footer = () => {
  return (
    //fixed bottom-0 z-20
    <footer className=" flex flex-col-reverse items-center gap-2 sm:gap-2 w-full pb-1.5 pt-3 sm:pb-2 sm:pt-4 max-w-2xl bg-gradient-to-b from-transparent to-green-300/80 backdrop-blur-sm">
      {/* Copyright Text */}
      <div className="flex flex-row text-xs sm:text-sm text-gray-600 justify-center itemscenter">
        <p className="font-semibold sm:font-bold">
          $Farm 2025 - All rights reserved ©
          <span className="font-normal">&nbsp;-&nbsp;</span>
        </p>
        <a
          href="https://x.com/silen7_x"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors duration-300 underline"
        >
          by silen7 x
        </a>
      </div>
      {/* Trading Platform Icons */}
      <div className="flex gap-2 sm:gap-3">
        {/* Jupiter */}
        <a
          href="https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=BdTEJq3yEp68SNmeBfqBbDDy7nbSGftkDhDkVef6pump"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 hover:translate-x-1 hover:-translate-y-1 transition-transform duration-300"
        >
          <img
            src="/jupiter-ag-jup-logo.svg"
            alt="Jupiter"
            className="size-8 sm:size-10 drop-shadow-lg"
          />
        </a>

        {/* DexScreener */}
        <a
          href="https://dexscreener.com/solana/42vtq6lbytcptnmqwvstuaewvmckwmfmabwwivyhidcj"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 hover:translate-x-1 hover:-translate-y-1 transition-transform duration-300"
        >
          <img
            src="/dex-screener-seeklogo.svg"
            alt="DexScreener"
            className="size-8 sm:size-10 drop-shadow-lg brightness-0"
          />
        </a>

        {/* DexTools */}
        <a
          href="https://www.dextools.io/app/en/solana/pair-explorer/42VTq6LbYtCPTNmqWVsTuaEWvMCKwmFMAbWWivYHiDcJ?t=1757667980880"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 hover:translate-x-1 hover:-translate-y-1 transition-transform duration-300"
        >
          <img
            src="/dextools-seeklogo.svg"
            alt="DexTools"
            className="size-8 sm:size-10 drop-shadow-lg"
          />
        </a>

        {/* GeckoTerminal */}
        <a
          href="https://www.geckoterminal.com/solana/pools/42VTq6LbYtCPTNmqWVsTuaEWvMCKwmFMAbWWivYHiDcJ"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 hover:translate-x-1 hover:-translate-y-1 transition-transform duration-300"
        >
          <img
            src="/GT-Symbol.svg"
            alt="GeckoTerminal"
            className="size-8 sm:size-10 drop-shadow-lg"
          />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/silent7-x/thisisafarm"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 hover:translate-x-1 hover:-translate-y-1 transition-transform duration-300"
        >
          <FaGithub className="size-8 sm:size-10 text-gray-800 drop-shadow-lg" />
        </a>
      </div>
    </footer>
  );
};
