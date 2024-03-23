<template>
  <div>
    <NuxtLayout name="panel">
      <PanelUserNav />
      <PanelUserList  :users="data" />
    </NuxtLayout>
  </div>
</template>


<script setup >
const { data } = await useFetch("/api/global", {
  query: { url: "/api/panel/users" },
  headers: useRequestHeaders(["cookie"]),
});
</script>

<style  scoped>
.background_color {
  background-color: #171821 !important;
}
</style>