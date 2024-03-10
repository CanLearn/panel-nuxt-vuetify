export default defineNuxtRouteMiddleware(() => {
    const { authUser } = useAuth();
    console.log(authUser);
    if(authUser.value){
        return navigateTo('/panel/');
    }
 })