<template>
  <v-navigation-drawer v-model="drawer" height="100%">
    <v-container class="w-100 h-100">
      <v-card
        color="#171821"
        class="mx-auto pa-2"
        max-width="800"
        style="height: 100%"
        width="700"
      >
        <v-sheet color="#171821" class="pa-4">
          <v-avatar
            class="mb-4 mx-10"
            color="grey-darken-1"
            size="120"
          ></v-avatar>
          <div class="">{{ authUser?.email }}</div>
        </v-sheet>
        <v-divider></v-divider>
        <v-list class="mx-7">
          <NuxtLink to="/panel/">
            <v-list-item
              prepend-icon="mdi-view-dashboard"
              link
              title="dashboard"
            ></v-list-item>
          </NuxtLink>
          <NuxtLink to="/panel/users">
            <v-list-item
              prepend-icon="mdi-account-convert"
              link
              title="users"
            ></v-list-item>
          </NuxtLink>
          <NuxtLink to="/panel/category">
            <v-list-item
              prepend-icon="mdi-folder-multiple"
              link
              title="categories"
            ></v-list-item>
          </NuxtLink>
          <NuxtLink to="/panel/articles/">
            <v-list-item
              prepend-icon="mdi-book-open"
              link
              title="articles"
            ></v-list-item>
          </NuxtLink>
          <NuxtLink to="/panel/tags/">
            <v-list-item
              prepend-icon="mdi-code-tags"
              link
              title="tags"
            ></v-list-item>
          </NuxtLink>
          <NuxtLink to="/panel/chart/">
            <v-list-item
              prepend-icon="mdi-chart-areaspline"
              link
              title="charts"
            ></v-list-item>
          </NuxtLink>
          <NuxtLink to="/panel/notification/">
            <div class="d-flex">
              <v-list-item
                prepend-icon="mdi-bell"
                link
                title="notification"
              ></v-list-item>
              <v-badge :content="47"> </v-badge>
            </div>
          </NuxtLink>
          <NuxtLink to="/panel/profile/">
            <v-list-item
              prepend-icon="mdi-contacts"
              link
              title="profile"
            ></v-list-item>
          </NuxtLink>
          <v-list-item
            prepend-icon="mdi-logout"
            @click="logout"
            link
            title="logout"
          ></v-list-item>
        </v-list>
      </v-card>
    </v-container>
  </v-navigation-drawer>

  <v-app-bar class="mt-4 w-95 color">
    <v-app-bar-nav-icon
      style="color: white"
      @click="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <v-app-bar-title class="" @click="drawer = !drawer">
      <span style="color: aliceblue"> panel </span>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});
const { authUser } = useAuth();

import { ref } from "vue";
const drawer = ref(null);
async function logout() {
  const { data, error } = await useFetch("/api/auth/logout", {
    method: "POST",
  });

  authUser.value = null;
  return navigateTo("/");
}
</script>

<style scoped>
.color {
  background-color: #171821;
  color: #171821;
}
</style>