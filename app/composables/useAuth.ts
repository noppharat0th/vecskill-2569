import type { AuthPayload, Response as ApiResponse } from '~~/shared/types/user'
import { useApi } from './useApi'

export const useAuth = () => {
  const user = useState<AuthPayload | null>('auth.user', () => null)
  const isLoggedIn = computed(() => !!user.value)

  const Login = async (form: { username: string; password: string }) => {
    const api = useApi()
    await api.post<ApiResponse<{ token: string }>>('/auth/login', form)

    // The login endpoint sets the HttpOnly auth cookie. Read the signed-in user
    // from the matching response envelope without trying to overwrite that cookie.
    const response = await api.get<ApiResponse<AuthPayload>>('/auth/me')
    user.value = response.data

    await navigateTo('/admin')
  }

  const Register = async (form: object) => {
    await useApi().post('/auth/register', form)
    await navigateTo('/')
  }

  const logout = async () => {
    user.value = null
    await useApi().post('/auth/logout')
    await navigateTo('/')
  }

  return { user, isLoggedIn, Login, Register, logout }
}
