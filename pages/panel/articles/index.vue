<template>
  <div>
    <NuxtLayout name="panel">
      <v-card>
        <v-window v-model="tab">
          <v-window-item v-for="n in 15" :key="n" :value="n">
            <v-container fluid>
              <v-row>
                <v-col v-for="i in 166" :key="i" cols="12" md="3">
                  <v-img
                    cover
                    :lazy-src="`https://picsum.photos/10/6?image=${
                      i * n * 5 + 10
                    }`"
                    :src="`https://picsum.photos/500/300?image=${
                      i * n * 5 + 10
                    }`"
                    aspect-ratio="2"
                  >
                  </v-img>

                  <v-card-item>
                    <div class="d-flex justify-space-around align-center">
                      <v-card-title>title : Cafe Badilico</v-card-title>
                      <v-badge :content="100" inline>
                        <v-icon icon="mdi-eye" size=""></v-icon>
                      </v-badge>
                    </div>
                    <v-card-subtitle
                      class="d-flex align-center justify-space-between"
                    >
                      <span>category : </span>

                      <span class="w-10">
                        <v-chip-group class="w-1 ma-0 mx-0">
                          <v-chip>Chip 1</v-chip>

                          <v-chip>Chip 2</v-chip>

                          <v-chip>Chip 3</v-chip>
                        </v-chip-group>
                      </span>
                    </v-card-subtitle>
                    <v-card-subtitle>
                      <span class="me-1">sub title : Local Favorite</span>

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
                   <div class=" d-flex w-40 justify-space-between">
                     <v-btn
                      color="surface-variant"
                      icon="mdi-share-variant"
                      size="small"
                      variant="text"
                    ></v-btn>
                    <v-btn
                      color="yellow-lighten-2"
                      icon="mdi-star"
                      size="small"
                      variant="text"
                    ></v-btn>
                    <v-btn
                      color="blue-grey-darken-4"
                      icon="mdi-star-outline"
                      size="small"
                      variant="text"
                    ></v-btn>
                   </div>
                    <div class=" d-flex justify-space-between">
                      <v-icon
                        color="black"
                        class="mx-3"
                        icon="mdi-grease-pencil"
                        size="small"
                      ></v-icon
                      ><br />
                      <v-icon
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
          </v-window-item>
        </v-window>
      </v-card>
    </NuxtLayout>
  </div>
</template>

<script>
export default {
  data: () => ({
    selection: 1,
    tab: null,
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        title: "Dessert (100g serving)",
        align: "start",
        sortable: false,
        key: "name",
      },
      { title: "Calories", key: "calories" },
      { title: "Fat (g)", key: "fat" },
      { title: "Carbs (g)", key: "carbs" },
      { title: "Protein (g)", key: "protein" },
      { title: "Actions", key: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
  }),

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
    initialize() {
      this.desserts = [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
        },
      ];
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>

<style  scoped>
.background_color {
  background-color: #171821 !important;
}
</style>