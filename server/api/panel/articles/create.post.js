import { readFiles } from 'h3-formidable'
import FormData from 'form-data';
import fs from 'fs';

export default defineEventHandler(async (event) => {
    const { public: { apiBase } } = useRuntimeConfig();
    const token = getCookie(event, 'token')
    const { fields, files } = await readFiles(event, {
        includeFields: true,
    })
    console.log(fields, files , 'dsfds');
    try {
        console.log( fields, files );
        let formData = new FormData();
        formData.append("image", fs.createReadStream(files.image[0].filepath));
        formData.append("title", fields.title[0]);
        formData.append("sub_title", fields.sub_title[0]);
        formData.append("category", fields.category[0]);
        formData.append("tags", fields.tags[0]);
        formData.append("content", fields.content[0]);
        console.log(formData , 'formData');
        const data = await $fetch(apiBase + '/api/panel/articles/', {
            method: 'POST',
            body: formData,
            headers: {
                "Content-Type": "multipart/form-data" ,
                'Authorization': `Bearer ${token}` ,
                'Access-Control-Allow-Origin' : '*'
            }
        });
        return data.data;
    } catch (error) {
        console.log(error);
        errors.value = Object.values(error.data.data.message).flat();    }
})
