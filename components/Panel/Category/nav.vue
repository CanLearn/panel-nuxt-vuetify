<template>
    <v-toolbar
    flat
    style="
      background-color: #171821 !important;
      border: 1px solid white;
      border-radius: 15px;
    "
  >
    <v-toolbar-title class="text-white mr-9">Category Landing</v-toolbar-title>
    <v-divider class="mx-4" inset vertical></v-divider>
    <v-spacer></v-spacer>
    <NuxtLink
      to="/panel/category/create"
      class="mb-1"
      style="background-color: #171821"
    >
      <v-btn class="p-auth mx-10">
        <h5>Create Category</h5>
      </v-btn>
    </NuxtLink>
  </v-toolbar>
</template>
