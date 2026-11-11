// // indicator *id title start_date end_date

export function useIndicator() {
    const api = useApi()
    const indicators = ref()
    
    const form = ref({
        id: null as Number | null,
        eval_id: Number,
        name: "",
        description: "",
        weight: "",
        type: '',
        type_file: ""
    })

    const fetchIndicator = async() => {
        const res = await api.get('/indicator/get-indicator')
        indicators.value = res
    }

    const createIndicator = async() => {
        const res = await api.post('/indicator/create-indicator', form.value)
        await fetchIndicator()
    }
    
    const updateIndicator = async() => {
        const res = await api.put(`/indicator/create-indicator/${form.value.id}`, form.value)
        await fetchIndicator()
    }
    
    const deleteIndicator = async() => {
        const res = await api.put(`/indicator/delete-indicator/${form.value.id}`, form.value)
        await fetchIndicator()
    }
}