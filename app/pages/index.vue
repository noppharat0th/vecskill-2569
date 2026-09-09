<script setup lang="ts">
const email = ref('')
const password = ref('')
const showPassword = ref(false)


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

</script>

<template>
    <UApp>
        <div class="min-h-screen flex items-center justify-center p-6 bg-gray-100">
            <div class="grid w-full max-w-4xl grid-cols-1 gap-3 rounded-[28px] bg-white p-3 shadow-sm md:grid-cols-2">

                <div class="relative hidden min-h-[520px] overflow-hidden rounded-3xl md:block">

                    <!-- mesh gradient -->
                    <div class="absolute -inset-16 blur-3xl"
                        :style="{ background: 'radial-gradient(circle at 15% 25%, #7c2d12 0%, transparent 45%), radial-gradient(circle at 78% 12%, #ea580c 0%, transparent 50%), radial-gradient(circle at 30% 75%, #9a3412 0%, transparent 55%), radial-gradient(circle at 88% 68%, #fed7aa 0%, transparent 45%), linear-gradient(160deg, #431407 0%, #c2410c 55%, #fb923c 100%)' }" />

                    <div class="relative z-10 flex h-full flex-col justify-between p-8">
                        <UIcon name="i-lucide-asterisk" class="size-8 text-white" />

                        <div class="text-white">
                            <p class="mb-2 text-sm/relaxed opacity-90">You can easily</p>
                            <p class="text-2xl font-semibold leading-snug">
                                Get access your personal hub for clarity and productivity
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Auth -->
                <div class="flex flex-col justify-center p-6 md:px-10">

                    <!-- Logo Above Tabs -->
                    <div class="mb-6 flex items-center gap-2">
                        <UISectionLogo />
                    </div>

                    <UTabs :items="items" color="neutral" variant="pill" size="sm" class="w-full">
                        <template #sign-in>
                            <div class="pt-4">
                                <form class="mt- space-y-4" @submit.prevent>
                                    <UFormField label="Your email">
                                        <UInput v-model="email" type="email" placeholder="you@example.com" size="lg"
                                            class="w-full" />
                                    </UFormField>

                                    <UFormField label="Password">
                                        <UInput v-model="password" :type="showPassword ? 'text' : 'password'"
                                            placeholder="••••••••••" size="lg" class="w-full">
                                            <template #trailing>
                                                <UButton :icon="showPassword ? 'i-lucide-eye-off' : 'i-lucide-eye'"
                                                    color="neutral" variant="link" size="sm"
                                                    :aria-label="showPassword ? 'Hide password' : 'Show password'"
                                                    @click="showPassword = !showPassword" />
                                            </template>
                                        </UInput>
                                    </UFormField>

                                    <UButton type="submit" block size="lg" label="Get Started" />
                                </form>
                                <p class="mt-6 text-center text-sm text-gray-500">
                                    Don&#39;t have an account?
                                    <ULink to="/signup" class="font-medium text-orange-600">Sign up</ULink>
                                </p>
                            </div>
                        </template>

                        <template #sign-up>
                            <div class="pt-4">


                                <form class="mt- space-y-4" @submit.prevent>
                                    <UFormField label="Your email">
                                        <UInput v-model="email" type="email" placeholder="you@example.com" size="lg"
                                            class="w-full" />
                                    </UFormField>

                                    <UFormField label="Password">
                                        <UInput v-model="password" :type="showPassword ? 'text' : 'password'"
                                            placeholder="••••••••••" size="lg" class="w-full">
                                            <template #trailing>
                                                <UButton :icon="showPassword ? 'i-lucide-eye-off' : 'i-lucide-eye'"
                                                    color="neutral" variant="link" size="sm"
                                                    :aria-label="showPassword ? 'Hide password' : 'Show password'"
                                                    @click="showPassword = !showPassword" />
                                            </template>
                                        </UInput>
                                    </UFormField>

                                    <UButton type="submit" block size="lg" label="Create Account" />
                                </form>
                                <p class="mt-6 text-center text-sm text-gray-500">
                                    Already have an account?
                                    <ULink to="/signin" class="font-medium text-orange-600">Sign in</ULink>
                                </p>
                            </div>
                        </template>
                    </UTabs>

                </div>
            </div>
        </div>
    </UApp>
</template>

<style scoped>
/* Scoped styles */
</style>
