<template>
  <div>
    <NuxtLayout name="panel">
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.7/axios.min.js"></Script>
      <v-toolbar flat style="
          background-color: #171821 !important;
          border: 1px solid white;
          border-radius: 15px;
        ">
        <v-toolbar-title class="text-white mr-9">article</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <NuxtLink to="/panel/articles" class="mb-1" style="background-color: #171821">
          <v-btn class="p-auth mx-3">
            <h5>index article</h5>
          </v-btn>
        </NuxtLink>
      </v-toolbar>
      <div class="mt-10 w-100" rounded>
        <v-card class="mx-auto px-6 py-8 w-100">
          <form @submit.prevent="createArticle" enctype="multipart/form-data">
            <div class="d-flex justify-space-between align-center justify-center mx-4">
              <v-text-field v-model="data.title" class="ml-2 w-30" label="title"></v-text-field>
              <v-text-field v-model="data.sub_title" class="mr-2 w-30" label="subTitle"></v-text-field>
            </div>
            <div class="d-flex">
              <v-col cols="5" md="6">
                <v-select v-model="data.category" chips :items="parents" item-title="title" item-value="id"
                  label="Select" multiple single-line></v-select>
              </v-col>
              <v-col cols="5" md="6">
                <v-combobox label="Enter your tags" prepend-icon="mdi-tag-multiple" variant="solo" chips
                  v-model="data.tags" clearable multiple>
                  <template v-slot:selection="{ attrs, item, select, selected }">
                    <v-chip v-bind="attrs" :model-value="selected" closable @click="select" @click:close="remove(item)">
                    </v-chip>
                  </template>
                </v-combobox>
              </v-col>
            </div>
            <div class="">
              <input @change="imagesFile" type="file" name="image">
            </div>
            <textarea v-model="data.content" name="" cols="30" rows="8" class="w-100 my-5 bg-amber-accent-1"></textarea>

            <v-col cols="12" md="4" sm="6" class="">
              <v-btn rounded="xl" elevation="24" size="large" color="grey-darken-1 " type="submit" variant="elevated"
                block>
                send
              </v-btn>
            </v-col>
          </form>
        </v-card>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";
const { data: parents } = await useFetch("/api/panel/category/all", {
  query: { url: "/api/panel/category-all" },
  headers: useRequestHeaders(["cookie"]),
});


const toast = useToast();
const data = reactive({
  category: null,
  title: "",
  tags: null,
  sub_title: "",
  content: "",
  image : null
});


function imagesFile(event) {
  return data.image = event.target.files[0];
}

async function createArticle() {
  const formData = new FormData();
  formData.append("image", data.image);
  formData.append("title", data.title);
  formData.append("sub_title", data.sub_title);
  formData.append("category", data.category);
  formData.append("tags", data.tags);
  formData.append("content", data.content);

  console.log(formData);

  try {
    const dataType = await $fetch("/api/panel/articles/create", {
      method: "POST",
      body: formData ,
    });
    toast.success("ایجاد محصول باموفقیت انجام شد");
    return navigateTo("/panel/articles/");  
  } catch (error) {
    console.log(error)
    // errors.value = Object.values(error.data.data.message).flat();
  } finally {
    // loading.value = false;
  }
}

</script>

<style></style> 