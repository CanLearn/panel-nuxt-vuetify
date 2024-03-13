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
        <v-toolbar-title class="text-white mr-9">
          title category : {{ category.title }}</v-toolbar-title
        >
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <NuxtLink
          to="/panel/category"
          class="mb-1"
          style="background-color: #171821"
        >
          <v-btn class="p-auth mx-10">
            <h5>Landing article</h5>
          </v-btn>
        </NuxtLink>
      </v-toolbar>
      <div class="mt-10 w-100 pa-4" rounded>
        <v-card class="mx-auto px-6 py-8 w-100">
          <v-form @submit.prevent="update">
            <v-text-field
              v-model="formData.title"
              :placeholder="category.title"
              class="mb-2"
              label="title"
              clearable
            ></v-text-field>

            <v-select
              v-model="formData.parent_id"
              :items="parents"
              :placeholder="category.parent_id"
              item-title="title"
              item-value="id"
              label="Select"
              single-line
            ></v-select>
            <br />

            <button class="btn btn-success">send</button>
          </v-form>
        </v-card>
      </div>
    </NuxtLayout>
  </div>
</template>


<script setup>
import { useToast } from "vue-toastification";
const loading = ref(false);
const errors = ref([]);
const toast = useToast();
const route = useRoute();
definePageMeta({
  middleware: "auth",
});
const { data: category } = await useFetch("/api/panel/category/show", {
  query: { url: `/api/panel/categories/${route.params.id}` },
  headers: useRequestHeaders(["cookie"]),
});
const { data: parents } = await useFetch("/api/panel/category/parent", {
  query: { url: "/api/panel/category-parent" },
  headers: useRequestHeaders(["cookie"]),
});

const formData = reactive({
  title: "",
  parent_id: null,
});
async function update() {
  try {
    loading.value = true;
    errors.value = [];

    await $fetch("/api/panel/category/update/", {
      method: "PUT",
      body: formData,
      query: { url: `/api/panel/categories/${category.value.id}` },
    });

    toast.success("The article was edited correctly ");
    return navigateTo("/panel/category");
  } catch (error) {
    errors.value = Object.values(error.data.data.message).flat();
  } finally {
    loading.value = false;
  }
}
</script>
