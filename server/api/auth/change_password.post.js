export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const token = getCookie(event , 'token');

  const {
    public: { apiBase },
  } = useRuntimeConfig();

  console.log(body , 'bbbbb');
  try {
    const data = await $fetch(`${apiBase}/api/auth/change-password`, {
      method: "POST",
      body: body,
      headers: {
        'Accept': 'application/json',
        'Authorization' : 'Bearer '+ token
    }
    });
    console.log('success');
    data.user;
  } catch (error) {
    console.log(error , 'error');
    return error
  }
});
