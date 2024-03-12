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
        <v-toolbar-title class="text-white mr-9">Category</v-toolbar-title>
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
          <v-form @submit.prevent="create">
            <v-text-field
              v-model="formData.title"
              class="mb-2"
              label="title"
              clearable
            ></v-text-field>
          
            <v-select
              v-model="formData.parent_id"

              :items="parents"
              item-title="title"
              item-value="id"
              label="Select"
        
              single-line
            ></v-select>
            <br />

            <button class="btn btn-success">asdas</button>
          </v-form>
        </v-card>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
const { data: parents } = await useFetch("/api/panel/category/parent", {
  query: { url: "/api/panel/category-parent" },
  headers: useRequestHeaders(["cookie"]),
});
const formData = reactive({
  title: "",
  parent_id: null,
});

async function create() {
  try {
    const category = await $fetch("/api/panel/category/create", {
      method: "POST",
      body: formData,
    });
    toast.success("You are registered!");
    return navigateTo("/");
  } catch (error) {
    errors.value = Object.values(error.data.data).flat();
  } finally {
    loading.value = false;
  }
}

// export default {
//   data: () => ({
//     form: false,
//     email: null,
//     password: null,
//     loading: false,
//   }),

//   methods: {
//     onSubmit() {
//       if (!this.form) return;

//       this.loading = true;

//       setTimeout(() => (this.loading = false), 2000);
//     },
//     required(v) {
//       return !!v || "Field is required";
//     },
//   },
// };
</script>

<style>
</style>