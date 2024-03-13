export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { public: { apiBase  } } = useRuntimeConfig()
    const token = getCookie(event, 'token');
    try {   
        const data = await $fetch(`${apiBase}/api/panel/articles/`, {
            method: "POST",
            body: body,
            headers: {
                'Accept': 'multipart/form-data',
                'Authorization': `Bearer ` + token
            }
        });
        return data ;
    } catch (error) {
        console.log( "121345234235346376576467536",body);
    }
})