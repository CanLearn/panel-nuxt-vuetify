import { FormData } from "node-fetch-native";

export default defineEventHandler(async (event) => {
    const { public: { apiBase } } = useRuntimeConfig();
    const token = getCookie(event, 'token')
    const body = await readMultipartFormData(event);
    const formData = new FormData();
    if (body) {
        const image = body.find(field => field.name === 'image');
        const title = body.find(field => field.name === 'title')

        const sub_title = body.find(field => field.name === 'sub_title')

        const content = body.find(field => field.name === 'content')

        const category = body.find(field => field.name === 'category')
 
        const tags = body.find(field => field.name === 'tags')

        console.log(category.data.toLocaleString('utf8') , 'category');
        try {
            if (image) {
                formData.append('image', new Blob([image.data], { type: image.type }), image.filename);
            }
            formData.append('title', title.data.toLocaleString('utf8'))
            formData.append('sub_title', sub_title.data.toLocaleString('utf8'))
            formData.append('content', content.data.toLocaleString('utf8'))
            formData.append('category', category.data.toLocaleString('utf8'))
            formData.append('tags', tags.data.toLocaleString('utf8'))
            const data = await $fetch(apiBase + '/api/panel/articles/', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Access-Control-Allow-Origin': '*'
                }
            });
            console.log(data);
            return data.data;
        } catch (error) {
            console.log(error, 'error');
            errors.value = Object.values(error.data.data.message).flat();
        }
    }

})

