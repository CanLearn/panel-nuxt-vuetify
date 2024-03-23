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
              <br />
              <button class="btn btn-success">send </button>
            </v-form>
          </v-card>
        </div>
      </NuxtLayout>
    </div>
  </template>
  
  <script setup>
  import { useToast } from "vue-toastification";
  
  const toast = useToast();

  const formData = reactive({
    title: "",
    parent_id: null,
  });
  
  async function create() {
    try {
      const category = await $fetch("/api/panel/tags/create", {
        method: "POST",
        body: formData,
      });
      toast.success("The article was delete correctly ");
      return navigateTo("/panel/tags");
    } catch (error) {
      errors.value = Object.values(error.data.data).flat();
    } finally {
      loading.value = false;
    }
  }
  
  </script>
  
  <style>
  </style>