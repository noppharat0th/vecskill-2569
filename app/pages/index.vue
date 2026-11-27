<!-- app/pages/login.vue -->
<script setup lang="ts">
definePageMeta({ layout: false })
useHead({ title: 'Sign in · PersonSystem' })

const { Login } = useAuth()

const username = ref('')
const password = ref('')
const remember = ref(false)
const showPassword = ref(false)
const loading = ref(false)
const error = ref('')

const formRegister = ref({
    fname: "",
    lname: "",
    username: "",
    password: ""
})


const formLogin = ref({
    username: "",
    password: "",
})

const inputClass =
  'h-8 w-full rounded border border-[#89888d] bg-white px-3 text-sm focus:border-[#1f75cb] focus:outline-2 focus:outline-offset-1 focus:outline-[#428fdc]'
const linkClass = 'text-[#1f5fc4] hover:underline'
</script>

<template>
  <div class="relative flex min-h-screen flex-col pt-20 overflow-hidden bg-[#edebe9] font-sans text-[#333238]">
    <div
      class="pointer-events-none absolute inset-x-0 bottom-0 h-[70%] blur-[30px] bg-[radial-gradient(ellipse_38%_55%_at_50%_100%,rgba(250,190,120,0.85),transparent_70%),radial-gradient(ellipse_30%_50%_at_70%_100%,rgba(240,160,170,0.7),transparent_70%),radial-gradient(ellipse_30%_55%_at_85%_100%,rgba(190,170,225,0.75),transparent_70%),radial-gradient(ellipse_28%_45%_at_22%_100%,rgba(245,200,180,0.6),transparent_70%)]"
      aria-hidden="true"
    />
    <main class="relative z-10 flex flex-1 flex-col items-center px-4 pt-20">
      <div class="flex">
        <img class="w-30 h-auto" src="/logo2.png" alt="">
        <div class="-ml-4 mt-10">
          <h1 class="font-bold text-[30px]">EC</h1>
        </div>
      </div>
      
      <span class="">Performance Management System</span>

      <form class="mt-5 w-full max-w-[465px]" @submit.prevent="">
        <p
          v-if="error"
          class="mb-4 rounded border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700"
          role="alert"
        >
          {{ error }}
        </p>

        <!-- Username -->
        <label for="user_login" class="mb-1 block text-sm font-semibold">Username</label>
        <input
          id="user_login"
          v-model="formLogin.username"
          type="text"
          autocomplete="username"
          autofocus
          required
          :class="inputClass"
        />

        <!-- Password -->
        <label for="user_password" class="mb-1 mt-4 block text-sm font-semibold">Password</label>
        <div class="relative">
          <input
            id="user_password"
            v-model="formLogin.password"
            :type="showPassword ? 'text' : 'password'"
            autocomplete="current-password"
            required
            :class="[inputClass, 'pr-10']"
          />
          <button
            type="button"
            class="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded hover:bg-black/5"
            :aria-label="showPassword ? 'Hide password' : 'Show password'"
            @click="showPassword = !showPassword"
          >
            <svg v-if="!showPassword" class="h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
              <path fill-rule="evenodd" d="M8 3C4.5 3 1.7 5.2.4 8c1.3 2.8 4.1 5 7.6 5s6.3-2.2 7.6-5C14.3 5.2 11.5 3 8 3Zm0 8.2A3.2 3.2 0 1 1 8 4.8a3.2 3.2 0 0 1 0 6.4ZM8 6.4a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z" clip-rule="evenodd" />
            </svg>
            <svg v-else class="h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
              <path d="M2 2l12 12M6.5 6.6A2 2 0 0 0 9.4 9.5M4 4.5C2.5 5.5 1.3 6.7.4 8c1.3 2.8 4.1 5 7.6 5 1.2 0 2.3-.3 3.3-.7M13 11c.9-.8 1.7-1.8 2.4-3-1.3-2.8-4.1-5-7.4-5-.5 0-1 .1-1.5.2" />
            </svg>
          </button>
        </div>

        <div class="mt-1 text-right">
          <NuxtLink to="/forgot-password" :class="[linkClass, 'text-sm']">Forgot your password?</NuxtLink>
        </div>

        <!-- Remember me -->
        <label class="mt-3 flex cursor-pointer items-center gap-2 text-sm">
          <input v-model="remember" type="checkbox" class="h-4 w-4 rounded border-[#89888d] accent-[#333238]" />
          Remember me
        </label>

        <button
          @click="Login(formLogin)"
          type="submit"
          :disabled="loading"
          class="mt-4 h-8 w-full rounded bg-[#333238] text-sm font-semibold text-white transition hover:bg-[#1f1e24] disabled:opacity-60"
        >
          {{ loading ? 'Signing in…' : 'Sign in' }}
        </button>

        <button
          type="button"
          class="mt-2 flex h-8 w-full items-center justify-center gap-1.5 rounded border border-[#bfbfc3] bg-white text-sm transition hover:bg-[#f5f5f5]"
        >
          <svg class="h-4 w-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <circle cx="6" cy="5" r="2.6" />
            <path d="M1 13c0-2.4 2.2-4 5-4s5 1.6 5 4v1H1v-1Z" />
            <circle cx="12.5" cy="9" r="1.4" />
            <path d="M12 10.2h1v3.3l-.5.5-.5-.5v-.6h.6v-.5H12v-2.2Z" />
          </svg>
          Register
        </button>

        <p class="mt-4 text-center text-sm">
          Don't have an account yet?
          <NuxtLink to="/register" :class="linkClass">Register now</NuxtLink>
        </p>
      </form>
    </main>
  </div>
</template>
