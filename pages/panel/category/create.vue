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
            <h5>Create article</h5>
          </v-btn>
        </NuxtLink>
      </v-toolbar>
      <div class="mt-10 w-100 pa-4 " rounded>
        <v-card class="mx-auto px-6 py-8 w-100" >
          <v-form v-model="form" @submit.prevent="onSubmit">
            <v-text-field
              v-model="title"
              :readonly="loading"
              :rules="[required]"
              class="mb-2"
              label="title"
              clearable
            ></v-text-field>

            <v-select
              clearable
              label="parent"
              :items="[
                'California',
                'Colorado',
                'Florida',
                'Georgia',
                'Texas',
                'Wyoming',
              ]"
              variant="solo-filled"
            ></v-select>

            <br />

            <v-btn
              :disabled="!form"
              :loading="loading"
              color="grey-darken-1"
            
              type="submit"
              variant="elevated"
              block
            >
             send
            </v-btn>
          </v-form>
        </v-card>
      </div>
    </NuxtLayout>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: false,
    email: null,
    password: null,
    loading: false,
  }),

  methods: {
    onSubmit() {
      if (!this.form) return;

      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
    required(v) {
      return !!v || "Field is required";
    },
  },
};
</script>

<style>
</style>