export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { public: { apiBase  } } = useRuntimeConfig()
    const token = getCookie(event, 'token');
    console.log(body , 'body');
    try {
        const data = await $fetch( apiBase + "/api/panel/tags", {
            method: "POST",
            body: body,
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer `+ token
            }
        });
        return data ;
    } catch (error) {
        console.log(error , 'error');
    }
})