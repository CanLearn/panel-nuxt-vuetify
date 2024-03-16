<template>
    <div>
        <v-container class="login">
            <v-row>
                <v-col cols="12" sm="6" class=" w-100 h-100 ">
                    <div class="regisetr">
                        <v-card width="500" height="500" class="cardes">
                            <form @submit.prevent="register">
                                <div class="mx-10 mt-10 ">
                                    <v-text-field color="#2882CE" v-model="formData.name" label="name"
                                        type="text"></v-text-field>
                                </div>
                                <div class="mx-10  ">
                                    <v-text-field color="#2882CE" v-model="formData.email" label="email"
                                        type="email"></v-text-field>
                                </div>
                                <div class="mx-10  ">
                                    <v-text-field color="#2882CE" v-model="formData.password" label="password"
                                        type="password"></v-text-field>
                                </div>
                                <!-- <div class="mx-10 mb-1">
                                    <v-checkbox label="Option" type="checkbox" value="1" color="#2882CE">

                                    </v-checkbox>
                                </div> -->
                                <div class="mx-10 ">
                                    <v-btn class="w-100 py-3" type="submit" color="#2882CE">
                                        submit
                                    </v-btn>

                                </div>
                            </form>
                        </v-card>
                    </div>
                </v-col>
                <v-col cols="12" sm="6" class=" w-100 h-100">
                    <img src="../../public/images/login.jpeg" class="images" alt="Discover Nuxt 3" />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup>
definePageMeta({
    middleware : 'guest'
})
const { authUser } = useAuth();
import { useToast } from 'vue-toastification';
const toast = useToast;
const loading = ref(false);
const errors = ref([]);
const formData = reactive({
    name: "",
    email: "",
    password: "",

});
async function register() {
    try {
        loading.value = true;
        const user = await $fetch('/api/auth/register', {
            method: 'POST',
            body: formData
        })

        authUser.value = user;
        toast.success("You are registered!");
      return navigateTo('/panel')
    } catch (error) {
        errors.value = Object.values(error.data.data).flat();
    } finally {
        loading.value = false;
    }
}
</script>

<style scoped>
.login {
    background-color: #030221;
    border: 1px solid blue;
    border-radius: 20px;
    width: 100%;
    height: 100%;
    margin-top: 40px;
}

.images {
    width: 580px !important;
    height: 580px !important;
    border: 1px solid black;
    border-radius: 20px;
}

.regisetr {
    margin: 70px 50px;
    border-radius: 20px;
}

.cardes {
    width: 100%;
}
</style>