<script setup lang="ts">
import { useAuth } from '~/composables/useAuth'

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
  login
</template>

