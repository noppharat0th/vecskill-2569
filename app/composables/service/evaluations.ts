// evaluation *id title start_date end_date

export function useEvaluation() {
    const api = useApi()
    const evaluations = ref()

    const form = ref({
        id: null as Number | null,
        title: "",
        start_date: "",
        end_date: ""
    })

    const fetchEvaluation = async(id?: number) => {
        const e_id = id ? id : null
        let res ;

        if(e_id){
            res = await api.get(`/evaluations/get-evaluation/${e_id}`)
        }else{
            res = await api.get(`/evaluations/get-evaluation/`)
        }

        evaluations.value = res 
    }

    const createEvaluation = async() => {
        if(!form.value)return
        const res = await api.post("/evaluations/create-evaluation", form.value)
        console.log(res)
        await fetchEvaluation()
    }
    
    const updateEvaluation = async() => {
        await api.put(`/evaluations/update-evaluation/${form.value.id}`, form.value)
        await fetchEvaluation()
    }
    
    const deleteEvaluation = async() => {
        await api.delete(`/evaluations/delete-evaluation/${form.value.id}`)
        await fetchEvaluation()
    }

    return {
        fetchEvaluation,
        createEvaluation,
        updateEvaluation,
        deleteEvaluation,
        form,
        evaluations
    }
}