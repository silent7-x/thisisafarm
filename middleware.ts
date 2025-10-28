// middleware.ts
export const config = {
  matcher: "/:path*",
};

export default async function middleware(req: Request) {
  const url = new URL(req.url);

  if (url.hostname === "games.thisisafarm.fun") {
    // URL cible
    const targetUrl = new URL(
      req.url.replace("://games.thisisafarm.fun", "://thisisafarm.games")
    );

    // Clone tous les headers (sauf host)
    const headers = new Headers(req.headers);
    headers.delete("host"); // Évite conflit

    // Fetch avec headers complets
    const response = await fetch(targetUrl, {
      ...req,
      headers,
    });

    // Clone réponse pour modifier headers
    const newResponse = new Response(response.body, response);

    // Forward tous les headers du site cible
    response.headers.forEach((value, key) => {
      newResponse.headers.set(key, value);
    });

    // Ajoute CORS si besoin (facultatif)
    newResponse.headers.set("Access-Control-Allow-Origin", "*");

    return newResponse;
  }

  // Pour thisisafarm.fun → normal
  return fetch(req);
}
