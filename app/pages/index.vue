<script setup lang="ts">
const showPassword = ref(false)
const { signIn, signUp } = useAuth()

const items = [
    {
        label: 'Sign In',
        icon: 'i-lucide-user',
        slot: 'sign-in'
    },
    {
        label: 'Sign Up',
        icon: 'i-lucide-lock',
        slot: 'sign-up'
    }
]
// fname, lname, username, password
const formSignUp = ref({
    fname: "",
    lname: "",
    username: "",
    password: ""
})


const formSignIN = ref({
    username: "",
    password: "",
})

</script>

<template>
    <h1>login</h1>
    <input type="text" class="border" v-model="formSignIN.username">
    <input type="text" class="border" v-model="formSignIN.password">
    <button @click="signIn(formSignIN)">submit login</button>
    
    <h1>register</h1>
    <input type="text" class="border" v-model="formSignUp.fname">
    <input type="text" class="border" v-model="formSignUp.lname">
    <input type="text" class="border" v-model="formSignUp.username">
    <input type="text" class="border" v-model="formSignUp.password">
    <button @click="signUp(formSignUp)">submit register</button>
     
</template>