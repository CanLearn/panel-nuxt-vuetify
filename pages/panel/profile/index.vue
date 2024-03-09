<template>
    <div>
        <NuxtLayout name="panel">
            <v-col cols="12" sm="12">

                <v-card class="mx-auto" max-width="1000">
                    <v-img height="200px" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover>

                    </v-img>
                        <v-col cols="11" class=" align-center d-flex justify-center justify-space-between mt-10">
                            <div class="d-flex align-center">
                                <v-card-subtitle>
                                    <h3>name :</h3>
                                </v-card-subtitle>

                                <v-card-subtitle>
                                    {{  authUser?.name  }}
                                </v-card-subtitle>
                            </div>
                            <div class="d-flex ">
                                <v-card-subtitle>
                                   <h3> email :</h3>
                                </v-card-subtitle>

                                <v-card-subtitle>
                                   {{  authUser?.email }}
                                </v-card-subtitle>
                            </div>
                            <div class="d-flex ">
                                <v-card-subtitle>
                                  <h3>  phone :</h3>
                                </v-card-subtitle>

                                <v-card-subtitle>
                                   {{  authUser?.phone  }}
                                </v-card-subtitle>
                            </div>
                            <div class="d-flex ">
                                <v-card-subtitle>
                                    <h3>status :</h3>
                                </v-card-subtitle>

                                <v-card-subtitle>
                                  {{ authUser?.status  }}
                                </v-card-subtitle>
                            </div>
                        </v-col>
                    <v-card-actions>
                        <v-btn color="black" variant="text">
                            برای دیدن توضیعات دکمه روبهرور بزنید 
                        </v-btn>

                        <v-spacer></v-spacer>

                        <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="show">
                            <v-divider></v-divider>

                            <v-card-text>
                                I'm a thing. But, like most politicians, he promised more than he could deliver. You
                                won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then
                                we'll go with that data file! Hey, you add a one and two zeros to that or we walk!
                                You're going to do his laundry? I've got to find a way to escape.
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>
        </NuxtLayout>
    </div>
</template>

<script setup>
const show = ref(false)

const { authUser } = useAuth() ; 


</script>

