<template>
  <div>
    <NuxtLayout name="panel">
      <v-toolbar flat style="
            background-color: #171821 !important;
            border: 1px solid white;
            border-radius: 15px;
          ">
        <v-toolbar-title class="text-white mr-9">Tag Landing</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
      </v-toolbar>
      <div class="mt-3 w-100 pa-4" rounded>
        <v-card class="mx-auto px-6 w-100">
          <v-form @submit.prevent="createTag" class="d-flex justify-space-between w-50">
            <v-text-field v-model="formData.title" class="mb-2" label="title" clearable color="black"
              variant="underlined"></v-text-field>
            <br />
            <v-col cols="auto">
              <v-btn @click="createTag" icon="mdi-plus" density="comfortable" size="large"></v-btn>
            </v-col>
          </v-form>
        </v-card>
      </div>
      <PanelTagList :tags="data"  />
    </NuxtLayout>
  </div>
</template>


<script setup>
import  PanelTagList  from "@/components/Panel/Tag/list.vue";
import { useToast } from "vue-toastification";
const router = useRouter();
const toast = useToast();

const { data , refresh } = await useFetch("/api/global", {
  query: { url: "/api/panel/tags/" },
  headers: useRequestHeaders(["cookie"]),
});

const formData = reactive({
    title: "",
  });

async function createTag() {
    console.log(formData , 'formmm');
    try {
      const category = await $fetch("/api/panel/tags/create", {
        method: "POST",
        body: formData,
      });
      toast.success("The Tag Manager was create correctly ");
      setTimeout(() => {
      router.go(); 
    }, 1000);
      return navigateTo("/panel/tags");
    } catch (error) {
      errors.value = Object.values(error.data.data).flat();
    } finally {
      loading.value = false;
    }
  }
</script>

<style scoped>
.background_color {
  background-color: #171821 !important;
}
</style>