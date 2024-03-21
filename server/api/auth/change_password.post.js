export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const token = getCookie(event , 'token');

  const {
    public: { apiBase },
  } = useRuntimeConfig();

  try {
    const data = await $fetch(`${apiBase}/api/auth/change-password`, {
      method: "POST",
      body: body,
      headers: {
        'Accept': 'application/json',
        'Authorization' : 'Bearer '+ token
    }
    });
    data.user;
  } catch (error) {
    return error
  }
});
