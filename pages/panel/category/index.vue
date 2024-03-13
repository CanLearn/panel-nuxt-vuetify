<template>
  <div>
    <NuxtLayout name="panel">
      <v-toolbar
        flat
        style="
          background-color: #171821 !important;
          border: 1px solid white;
          border-radius: 15px;
        "
      >
        <v-toolbar-title class="text-white mr-9">User</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <NuxtLink
          to="/panel/category/create"
          class="mb-1"
          style="background-color: #171821"
        >
          <v-btn class="p-auth mx-10">
            <h5>Create article</h5>
          </v-btn>
        </NuxtLink>
      </v-toolbar>

      <v-table height="900px">
        <thead>
          <tr>
            <th class="">id</th>
            <th class="">title</th>
            <th class="align-content-end"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category in categories" :key="category.id">
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
    </NuxtLayout>
  </div>
</template>


<script setup >
import { useToast } from "vue-toastification";

const toast = useToast();

const { data: categories , refresh } = await useFetch("/api/global", {
  query: { url: "/api/panel/categories/" },
  headers: useRequestHeaders(["cookie"]),
});

async function deleteCategory(categoryId) {
  try {
    await $fetch("/api/panel/category/delete", {
      method: "DELETE",
      query: { url: `/api/panel/categories/${categoryId}` },
    });

    toast.success("The article was delete correctly ");
    return navigateTo("/panel/category");
  } catch (error) {
    console.log(error.data, "sdasd");
  } finally {
    loading.value = false;
  }
}
</script>

<style  scoped>
.background_color {
  background-color: #171821 !important;
}
</style>