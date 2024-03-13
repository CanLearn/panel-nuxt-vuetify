export default defineEventHandler(async (event) => {
  const {
    public: { apiBase },
  } = useRuntimeConfig();
  const token = getCookie(event, "token");
  const query = getQuery(event);
  try {
    const data = await $fetch(apiBase + query.url, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ` + token,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
});
