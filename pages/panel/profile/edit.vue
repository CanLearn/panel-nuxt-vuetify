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
        <v-toolbar-title class="text-white mr-9">Edit</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <NuxtLink
          to="/panel/profile/"
          class="mb-1"
          style="background-color: #171821"
        >
          <v-btn class="p-auth mx-10">
            <h5>Landing profile</h5>
          </v-btn>
        </NuxtLink>
      </v-toolbar>
      <v-card class="mx-auto px-6 py-8" max-width="900">
        <v-form  @submit.prevent="changePassword">
          <v-text-field
            v-model="formdata.password"
            class="mb-2"
            name="password"
            type="password"
            label="password"
            clearable
          ></v-text-field>
         
          <v-text-field
            v-model="formdata.password_confirmation"
            name="password_confirmation"
            type="password"
            label="Confirmation Password"
            placeholder="Enter your password"
            clearable
          ></v-text-field>

          <br />
          <v-btn
            color="primary"
            size="large"
            type="submit"
            variant="elevated"
            block
          >
            Sign In
          </v-btn>
        </v-form>
      </v-card>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";

const toast = useToast();
definePageMeta({
    middleware : 'auth'
 })
const formdata = reactive({
    'password' : '' , 
    'password_confirmation' : ''
});

async function changePassword() { 
  try {
        const data = await $fetch( '/api/auth/change_password' , {
            method: 'POST',
            body: formdata
        })
        toast.success("The password was successfully changed");
      return navigateTo('/panel')
    } catch (error) {
        
         Object.values(error.data.data).flat();
    } 
}

</script>

<style lang="scss" scoped>
</style>