// middleware.ts
export const config = {
  matcher: "/:path*",
};

export default async function middleware(req: Request) {
  const url = new URL(req.url);

  if (url.hostname === "games.thisisafarm.fun") {
    const targetUrl = new URL(
      req.url.replace("://games.thisisafarm.fun", "://thisisafarm.games")
    );

    // Supprime Accept-Encoding pour forcer réponse non compressée
    const headers = new Headers(req.headers);
    headers.delete("accept-encoding");
    headers.delete("host");

    const response = await fetch(targetUrl, {
      headers,
      method: req.method,
      body: req.body,
      redirect: "follow",
    });

    // Clone + forward tous headers sauf content-encoding
    const newHeaders = new Headers(response.headers);
    newHeaders.delete("content-encoding"); // Évite gzip/br
    newHeaders.delete("content-length"); // Recalculé
    newHeaders.set("access-control-allow-origin", "*");

    // Retourne body brut (décompressé par le fetch)
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders,
    });
  }

  return fetch(req);
}
