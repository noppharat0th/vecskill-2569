import type { AuthPayload } from '~~/shared/types/user'

export const useAuth = () => {
    const user = useState<AuthPayload | null>('auth.user', () => null)
    const isLoggedIn = computed(() => !!user.value)

    const signIn = async (form: { username: string; password: string }) => {
        const res = await useApi().post<{ success: boolean; role: string }>('/auth/login', form)
        if (res.success) {
            const fetch_user = await useApi().get<{ success: boolean; user: AuthPayload }>('/auth/me')
            user.value = fetch_user.user
            await navigateTo('/admin')
        }
    }

    const signUp = async (form: object) => {
        await useApi().post('/auth/register', form)
        await navigateTo('/')
    }

    const logout = async () => {
        user.value = null
        await useApi().post('/auth/logout')
        navigateTo('/')
    }

    return { user, isLoggedIn, signIn, signUp, logout }
}

