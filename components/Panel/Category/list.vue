<template>
    <div>
        <v-table height="900px">
            <thead>
              <tr>
                <th class="">id</th>
                <th class="">title</th>
                <th class="align-content-end"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="category in data.categories" :key="category.id">
                <td>{{ category.id }}</td>
    
                <td>{{ category.title }}</td>
    
                <td class="d-flex mx-10 justify-justify-space-between">
                  <NuxtLink :to="`category/edit/${category.id}`">
                    <v-icon class="mx-2" color="black ">mdi-pencil-box</v-icon>
                  </NuxtLink>
                  <v-icon
                    class="mx-2"
                    color="red "
                    @click="deleteCategory(category.id)"
                    >mdi-delete</v-icon
                  >
                </td>
              </tr>
            </tbody>
          </v-table>
    </div>
</template>


<script setup >
const router = useRouter();

import { useToast } from "vue-toastification";
const data = defineProps(['categories']) ;

const toast = useToast();
async function deleteCategory(categoryId) {
  try {
    await $fetch("/api/panel/category/delete", {
      method: "DELETE",
      query: { url: `/api/panel/categories/${categoryId}` },
    });

    toast.success("The article was delete correctly ");
    setTimeout(() => {
      router.go(); 
    }, 1000);
    return navigateTo("/panel/category");
  } catch (error) {
    console.log(error.data, "sdasd");
  } finally {
    loading.value = false;
  }
}
</script>

<style lang="scss" scoped>

</style>