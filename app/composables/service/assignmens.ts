// Assignment *id title start_date end_date

export function useAssignment() {
    const api = useApi()
    const assignments = ref()

    const form = ref({
        id: null as Number | null,
        title: "",
        start_date: "",
        end_date: ""
    })

    const fetchAssignment = async() => {
        const res = await api.get("/assignments/get-assignments")
        assignments.value = res 
    }

    const createAssignment = async() => {
        await api.post("/assignments/create-assignments", form.value)
        await fetchAssignment()
    }
    
    const updateAssignment = async() => {
        await api.put(`/assignments/update-assignments/${form.value.id}`, form.value)
        await fetchAssignment()
    }
    
    const deleteAssignment = async() => {
        await api.delete(`/assignments/delete-assignments/${form.value.id}`)
        await fetchAssignment()
    }

    
    
}