<template>
    <v-table height="450px">
        <thead>
          <tr>
            <th class="">#</th>
            <th class="">title</th>
            <th class="">slug</th>

            <th class="align-content-end"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="tag in data.tags" >
            <td>{{ tag.id }}</td>

            <td>{{ tag.title }}</td>
            <td>{{ tag.slug }}</td>

            <td class="d-flex mx-10 justify-justify-space-between">
              <NuxtLink :to="`tag/edit/${tag.id}`">
                <v-icon class="mx-2" color="black ">mdi-pencil-box</v-icon>
              </NuxtLink>
              <v-icon class="mx-2" color="red " @click="deleteTag(tag.id)">mdi-delete</v-icon>
            </td>
          </tr>
        </tbody>
      </v-table>
</template>

<script setup>
const router = useRouter();
import { useToast } from "vue-toastification";
const toast = useToast();
const data = defineProps(['tags']) ;
console.log( data  , 'dasdasdasdasdasdsadadsa');

async function deleteTag(tagId) {
  try {
    await $fetch("/api/panel/tags/delete", {
      method: "DELETE",
      query: { url: "/api/panel/tags/" + tagId },
    });

    toast.success("The Tag Manager was delete correctly ");
      setTimeout(() => {
      router.go(); 
    }, 1000);
    return navigateTo("/panel/tags");
  } catch (error) {
    console.log(error.data, "sdasd");
  } finally {
    loading.value = false;
  }
}
</script>