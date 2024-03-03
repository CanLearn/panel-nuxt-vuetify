<template>
    <v-navigation-drawer v-model="drawer" height="100%">
        <v-container class=" w-100 h-100 ">
            <v-card color="#171821" class="mx-auto pa-2 " max-width="800" style="height: 100%;" width="700">
                <v-sheet color="#171821" class="pa-4">
                    <v-avatar class="mb-4 mx-10" color="grey-darken-1" size="120"></v-avatar>
                    <div class="mx-4">john@google.com</div>
                </v-sheet>
                <v-divider></v-divider>
                <v-list class="mx-7">
                    <NuxtLink to="/panel/">
                        <v-list-item prepend-icon="mdi-view-dashboard" link title="داشبورد"></v-list-item>
                    </NuxtLink>
                    <NuxtLink to="/panel/users">
                        <v-list-item prepend-icon="mdi-account-convert" link title="کاربران"></v-list-item>
                    </NuxtLink>
                    <NuxtLink to="/panel/category">
                        <v-list-item prepend-icon="mdi-folder-multiple" link title="دسته بندی"></v-list-item>
                    </NuxtLink>
                    <NuxtLink to="/panel/tags/">
                        <v-list-item prepend-icon="mdi-code-tags" link title="تگ متیجر"></v-list-item>
                    </NuxtLink>



                    <NuxtLink to="/panel/profile/">
                        <v-list-item prepend-icon="mdi-chart-areaspline" link title="چارت"></v-list-item>
                    </NuxtLink>
                    <NuxtLink to="/panel/profile/">
                        <v-list-item prepend-icon="mdi-transcribe-close" link title="تراکنش"></v-list-item>
                    </NuxtLink>
                    <NuxtLink to="/panel/profile/">
                        <v-list-item prepend-icon="mdi-contacts" link title="پرداخت "></v-list-item>
                    </NuxtLink>
                    <NuxtLink to="/panel/profile/">
                        <v-list-item prepend-icon="mdi-contacts" link title="پروفایل"></v-list-item>
                    </NuxtLink>
                </v-list>
            </v-card>
        </v-container>
    </v-navigation-drawer>

    <v-app-bar class="mt-4 w-95 color ">
        <v-app-bar-nav-icon style="color: white;" @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-app-bar-title class="" @click="drawer = !drawer">
            <span style="color: aliceblue;">
                panel
            </span>
        </v-app-bar-title>
    </v-app-bar>
</template>

<script setup>
import { ref } from 'vue'
const drawer = ref(null)


const cards = ['Today', 'Yesterday']
const links = [
    ['mdi-inbox-arrow-down', 'Inbox'],
    ['mdi-send', 'Send'],
    ['mdi-delete', 'Trash'],
    ['mdi-alert-octagon', 'Spam'],
];

</script>

<style scoped>
.color {
    background-color: #171821;
    color: #171821;
}
</style>