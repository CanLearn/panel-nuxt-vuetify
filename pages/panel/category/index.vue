<template>
  <div>
    <NuxtLayout name="panel">
      <PanelCategoryNav />
      <PanelCategoryList  :categories="data" />
    </NuxtLayout>
  </div>
</template>


<script setup >
const { data , refresh } = await useFetch("/api/global", {
  query: { url: "/api/panel/categories/" },
  headers: useRequestHeaders(["cookie"]),
});

</script>

<style  scoped>
.background_color {
  background-color: #171821 !important;
}
</style>