export default defineNuxtRouteMiddleware(async (to, from) => {
    const godId = to.params.god;
    const debugMode = process.env.NODE_ENV === "development";
    const api_url = debugMode
    ? "http://localhost:8080/api/v2/gods/"
    : "https://web-production-3593.up.railway.app/gods/";
  
    const response = await fetch(api_url + godId);

    if (!response.ok) {
        console.log()
        throw createError({
            statusCode: 404,
            statusMessage: "God does not exist."
          })
    }
  })
  