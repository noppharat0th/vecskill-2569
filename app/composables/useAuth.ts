type AuthUser = {
    id: number
    username: string
    role: string
}

export const useAuth = () => {
    const user = useState<AuthUser | null>('auth.user', () => null)
    const isLoggedIn = computed(() => !!user.value)

    const signIn = async (form: { username: string; password: string }) => {
        const res = await useApi().post<{ success: boolean; role: string }>('/auth/login', form)
        if (res.success) {
            // รอ get me 
            // user.value = { id: 0, username: form.username, role: res.role }
            await navigateTo('/admin')
        }
    }

    const signUp = async (form: object) => {
        await useApi().post('/auth/register', form)
        await navigateTo('/')
    }

    const logout = () => {
        user.value = null
        navigateTo('/')
        // รอ Endpoint Logout ลบ Cookie(Backend)
    }

    return { user, isLoggedIn, signIn, signUp, logout }
}
