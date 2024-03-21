export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    console.log('body' , body);
    try {
        const data = await $fetch('http://127.0.0.1:8000/api/auth/login', {
            method: "POST",
            body: body,
            headers: {
                'Accept': 'application/json',
            }
        });
        console.log(data , 'data');

        setCookie(event , 'token' , data.token , {
            httpOnly : true , 
            secure : true , 
            maxAge : 60 * 60 * 24 * 7 , 
            path : '/'
        });
        return data.token ;
    } catch (error) {
    }
})