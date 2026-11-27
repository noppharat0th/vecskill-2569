import type { User, Response } from '~~/shared/types/user'

type SaveMode = 'create' | 'edit'

export function useUserService() {
  const api = useApi()
  const error = ref('')
  const loading = ref(false)
  const saving = ref(false)
  const users = ref<User[]>([])

  const form = ref({
    id: null as number | null,
    fname: '',
    lname: '',
    username: '',
    password: '',
    confirm_password: '',
    role: 'evaluatee' as User['role'],
  })

  const fetchUser = async () => {
    const res = await api.get<Response<User[]>>('/users/get-users')
    users.value = res.data
    return users.value
  }

  const loadUsers = async () => {
    loading.value = true
    error.value = ''
    try {
      await fetchUser()
      return true
    } catch (e: any) {
      error.value = e?.data?.message || e?.message || 'Unable to load users.'
      return false
    } finally {
      loading.value = false
    }
  }

  const updateUser = async () => {
    if (form.value.id === null) return
    await api.put(`/users/update-user/${form.value.id}`, form.value)
    await fetchUser()
  }

  const deleteUser = async (id: number) => {
    if (confirm('delete')) {
      await api.delete(`/users/delete-user/${id}`)
      await fetchUser()
    }
  }

  const createUser = async () => {
    if (form.value.password !== form.value.confirm_password) {
      error.value = 'รหัสผ่านไม่ตรงกัน'
      return false
    }

    const { fname, lname, username, password, role } = form.value
    await api.post('/users/create-user', { fname, lname, username, password, role })
    await fetchUser()
    return true
  }

  const saveUser = async (mode: SaveMode) => {
    error.value = ''
    if (mode === 'edit' && form.value.password !== form.value.confirm_password) {
      error.value = 'Passwords do not match.'
      return false
    }

    saving.value = true
    try {
      if (mode === 'edit') await updateUser()
      else if (!await createUser()) return false
      return true
    } catch (e: any) {
      error.value = e?.data?.message || e?.message || `Unable to ${mode} user.`
      return false
    } finally {
      saving.value = false
    }
  }

  const resetPassword = async () => {
    await api.put('/auth/reset-password')
  }

  return { error, loading, saving, form, users, fetchUser, loadUsers, saveUser, updateUser, createUser, resetPassword, deleteUser }
}
