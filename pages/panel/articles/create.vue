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
        <v-toolbar-title class="text-white mr-9">article</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <NuxtLink
          to="/panel/articles"
          class="mb-1"
          style="background-color: #171821"
        >
          <v-btn class="p-auth mx-3">
            <h5>index article</h5>
          </v-btn>
        </NuxtLink>
      </v-toolbar>
      <div class="mt-10 w-100" rounded>
        <v-card class="mx-auto px-6 py-8 w-100">
          <v-form v-model="form" @submit.prevent="onSubmit">
            <div
              class="d-flex justify-space-between align-center justify-center"
            >
              <v-text-field
                v-model="title"
                :readonly="loading"
                :rules="[required]"
                class="ml-2 w-30"
                label="title"
                clearable
              ></v-text-field>
              <v-text-field
                v-model="subTitle"
                :readonly="loading"
                :rules="[required]"
                class="mr-2 w-30"
                label="subTitle"
                clearable
              ></v-text-field>
            </div>
            <div class="d-flex">
              <v-col cols="5" md="6">
                <v-select
                  chips
                  label="category "
                  :items="[
                    'California',
                    'Colorado',
                    'Florida',
                    'Georgia',
                    'Texas',
                    'Wyoming',
                  ]"
                  multiple
                ></v-select>
              </v-col>
              <v-col cols="5" md="6">
                <v-combobox v-model="select" label="tag article" multiple>
                  <template v-slot:selection="data">
                    <v-chip
                      :key="JSON.stringify(data.item)"
                      v-bind="data.attrs"
                      :disabled="data.disabled"
                      :model-value="data.selected"
                      size="small"
                      @click:close="data.parent.selectItem(data.item)"
                    >
                      <template v-slot:prepend>
                        <v-avatar class="bg-accent text-uppercase" start>{{
                          data.item.title.slice(0, 1)
                        }}</v-avatar>
                      </template>
                      {{ data.item.title }}
                    </v-chip>
                  </template>
                </v-combobox>
              </v-col>
            </div>
            <v-file-input
              :rules="rules"
              accept="image/png, image/jpeg, image/bmp"
              label="featuring image"
              placeholder="Pick an avatar"
              prepend-icon="mdi-camera"
            ></v-file-input>

            <textarea
              name=""
              id=""
              cols="30"
              rows="8"
              class="w-100 my-5 bg-amber-accent-1"
            ></textarea>

            <v-col cols="12" md="4" sm="6" class="">
              <v-btn
                rounded="xl"
                elevation="24"
                :disabled="!form"
                size="large"
                :loading="loading"
                color="grey-darken-1 "
                type="submit"
                variant="elevated"
                block
              >
                send
              </v-btn>
            </v-col>
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
    select: ["Vuetify", "Programming"],
    items: ["Programming", "Design", "Vue", "Vuetify"],
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