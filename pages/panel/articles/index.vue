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
        <v-toolbar-title class="text-white mr-9">Article</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <NuxtLink
          to="/panel/articles/create"
          class="mb-1"
          style="background-color: #171821"
        >
          <v-btn class="p-auth mx-10">
            <h5>Create article</h5>
          </v-btn>
        </NuxtLink>
      </v-toolbar>
      <v-card height="900">
        <v-container fluid>
          <v-row>
            <v-col
              v-for="article in articles"
              :key="article"
              cols="12"
              md="3"
              sticky
            >
              <v-img
                cover
                :lazy-src="article.image_original"
                :src="article.image_original"
                aspect-ratio="2"
              >
              </v-img>

              <v-card-item>
                <div class="d-flex justify-space-around align-center w-100">
                  <v-card-title class="w-50 mr-15"
                    >title : {{ article.title }}</v-card-title
                  >
                  <v-badge
                    class="w-50 ml-10"
                    :content="article.view_count"
                    inline
                  >
                    <v-icon icon="mdi-eye" size=""></v-icon>
                  </v-badge>
                </div>
                <v-card-subtitle
                  class="d-flex align-center justify-space-between"
                >
                  <span>category : </span>

                  <span class="w-10">
                    <v-chip-group class="w-1 ma-0 mx-0" v-for="category in categories" :key="category">
                      
                      <v-chip>{{ category.title }}</v-chip>
                    </v-chip-group>
                  </span>
                </v-card-subtitle>
                <v-card-subtitle>
                  <span class="me-1">sub title : {{ article.title }} </span>

                  <v-icon
                    color="error"
                    icon="mdi-fire-circle"
                    size="small"
                  ></v-icon>
                </v-card-subtitle>
              </v-card-item>
              <v-card-actions
                class="ml-2 justify-start align-center w-100 justify-space-between"
              >
                <div class="d-flex w-40 justify-space-between">
                  <v-btn
                    color="surface-variant"
                    icon="mdi-share-variant"
                    size="small"
                    variant="text"
                  ></v-btn>
                  <v-btn
                    v-if="article.star == 1"
                    @click="star(article.id)"
                    color="yellow-lighten-2"
                    icon="mdi-star"
                    size="small"
                    variant="text"
                  ></v-btn>
                  <v-btn
                    v-else
                    @click="star(article.id)"
                    color="blue-grey-darken-4"
                    icon="mdi-star-outline"
                    size="small"
                    variant="text"
                  ></v-btn>
                </div>
                <div class="d-flex justify-space-between">
                  <v-icon
                    color="black"
                    class="mx-3"
                    icon="mdi-grease-pencil"
                    size="small"
                  ></v-icon
                  ><br />
                  <v-icon
                    @click="trash(article.id)"
                    color="error"
                    class="mx-3"
                    icon="mdi-delete-circle"
                    size="small"
                  ></v-icon>
                </div>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </NuxtLayout>
  </div>
</template>

<script setup >
import { useToast } from "vue-toastification";
const category = [];
const toast = useToast();
const router = useRouter();
const success = ref(false);

const { data: articles } = await useFetch("/api/panel/articles/all/", {
  query: { url: "/api/panel/articles/" },
  headers: useRequestHeaders(["cookie"]),
});

const star = async (id) => {
  try {
    await $fetch("/api/panel/articles/star", {
      method: "PUT",
      query: { url: "/api/panel/article-star/" + id },
    });
    success.value = true;
    toast.success("The article was distinguished");
    setTimeout(() => {
      router.go(); 
    }, 2500);
    return navigateTo("/panel/articles/");
  } catch (e) {
    console.error("not found ", e);
  }
};

async function trash(id) {
  try {
    await $fetch("/api/panel/category/delete", {
      method: "delete",
      query: { url: "/api/panel/articles/" + id },
    });
    success.value = true;
    toast.success("Your article has been successfully deleted");
    if (success.value) {
      router.go();
    }
  } catch (e) {
    toast.error("Your article was not deleted correctly");
    console.error("not found ", e);
  }
}
</script>

<style  scoped>
.background_color {
  background-color: #171821 !important;
}
</style>