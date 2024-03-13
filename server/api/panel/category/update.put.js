export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const {
    public: { apiBase },
  } = useRuntimeConfig();
  console.log('salama mnm amirrezam');
  const token = getCookie(event, "token");
  const query = getQuery(event);
  try {
    const data = await $fetch( apiBase + query.url , {
      method: "PUT",
      body: body,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ` + token,
      },
      method : 'PUT'
    });
    return data;
  } catch (error) {}
});
