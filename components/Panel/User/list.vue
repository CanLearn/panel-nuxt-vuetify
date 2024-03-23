<template>
   <v-data-table :items="users"></v-data-table>
</template>

<script setup>
const router = useRouter();
import { useToast } from "vue-toastification";
const toast = useToast();
const data = defineProps(['users']) ;
console.log( data  , 'dasdasdasdasdasdsadadsa');

async function deleteUser(tagId) {
  try {
    await $fetch("/api/panel/users/delete", {
      method: "DELETE",
      query: { url: "/api/panel/users/" + tagId },
    });

    toast.success("The Tag Manager was delete correctly ");
      setTimeout(() => {
      router.go(); 
    }, 1000);
    return navigateTo("/panel/users");
  } catch (error) {
    console.log(error.data, "sdasd");
  } finally {
    loading.value = false;
  }
}
</script>