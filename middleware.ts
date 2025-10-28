export const config = {
  matcher: "/:path*",
};

export default function middleware(req: Request) {
  const url = new URL(req.url);

  if (url.hostname === "games.thisisafarm.fun") {
    const targetUrl = url.href.replace(
      "://games.thisisafarm.fun",
      "://thisisafarm.games"
    );
    return fetch(targetUrl, req);
  }

  // Pour tous les autres (thisisafarm.fun, etc.) → laisse passer normalement
  return fetch(req);
}
