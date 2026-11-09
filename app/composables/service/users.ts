    export function useUserService(){
        const api = useApi()
        const error = ref('')
        const users = ref<User[]>([])

        const form = ref({
            id: null as Number | null,
            fname: "",
            lname: "",
            username: "",
            password: "",
            confirm_password: "",
            role: ""
        })

        const fetchUser = async () => {
            const res = await api.get<User[]>('/users/get-user')
            users.value = res
        }

        const editUser = async () => {
            if(form.value.id === null) return

            await api.put(`/users/edit-user/${form.value.id}`, form.value)
            await fetchUser()
        }

        const createUser = async() => {
            if (form.value.password !== form.value.confirm_password) {
                error.value = 'รหัสผ่านไม่ตรงกัน'
                return
            }

            await api.post('/users/create-user', form)
            await fetchUser()
        }

        const resetPassword = async() => {
            
        }

        return {
            form,
            users,
            fetchUser,
            editUser,
            createUser,
            resetPassword   
        }

    }
