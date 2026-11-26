import type { User, Response } from '~~/shared/types/user'

export function useUserService() {
  const api = useApi()
  const error = ref('')
  const users = ref<User[]>([])

  const form = ref({
    id: null as number | null,
    fname: '',
    lname: '',
    username: '',
    password: '',
    confirm_password: '',
    role: '' as User['role'] | '',
  })

  const fetchUser = async () => {
    const res = await api.get<Response<User[]>>('/users/get-users')
    users.value = res.data
    return users.value
  }

  const updateUser = async () => {
    if (form.value.id === null) return
    await api.put(`/users/update-user/${form.value.id}`, form.value)
    await fetchUser()
  }

  const createUser = async () => {
    error.value = ''
    if (form.value.password !== form.value.confirm_password) {
      error.value = 'รหัสผ่านไม่ตรงกัน'
      return
    }

    await api.post('/users/create-user', form.value)
    await fetchUser()
  }

  const resetPassword = async () => {
    await api.put('/auth/reset-password')
  }

  return { error, form, users, fetchUser, updateUser, createUser, resetPassword }
}
