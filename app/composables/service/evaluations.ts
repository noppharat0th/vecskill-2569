import type { Evaluation } from '~~/shared/types/evaluation'
import type { Response } from '~~/shared/types/user'

type EvaluationForm = Omit<Evaluation, 'id'> & { id: Evaluation['id'] | null }
type SaveMode = 'create' | 'edit'

export function useEvaluation() {
  const api = useApi()
  const evaluations = ref<Evaluation[]>([])
  const form = ref<EvaluationForm>({ id: null, title: '', start_date: '', end_date: '' })
  const loading = ref(false)
  const saving = ref(false)
  const error = ref('')

  const loadEvaluations = async () => {
    loading.value = true
    error.value = ''
    try {
      const response = await api.get<Response<Evaluation[]>>('/evaluations/get-evaluation')
      evaluations.value = response.data ?? []
      return true
    } catch (e: any) {
      error.value = e?.data?.message || e?.message || 'Unable to load evaluations.'
      return false
    } finally {
      loading.value = false
    }
  }

  const saveEvaluation = async (mode: SaveMode) => {
    error.value = ''
    if (!form.value.title.trim()) {
      error.value = 'Enter an evaluation topic.'
      return false
    }
    if (!form.value.start_date || !form.value.end_date || form.value.start_date > form.value.end_date) {
      error.value = 'End date must be on or after the start date.'
      return false
    }
    if (mode === 'edit' && form.value.id == null) {
      error.value = 'Evaluation ID is missing.'
      return false
    }

    saving.value = true
    try {
      const { id, title, start_date, end_date } = form.value
      if (mode === 'edit') {
        await api.put(`/evaluations/edit-evaluation/${id}`, { title, start_date, end_date })
      } else {
        await api.post('/evaluations/create-evaluation', { title, start_date, end_date })
      }
      await loadEvaluations()
      return true
    } catch (e: any) {
      error.value = e?.data?.message || e?.message || 'Unable to save evaluation.'
      return false
    } finally {
      saving.value = false
    }
  }

  return { evaluations, form, loading, saving, error, loadEvaluations, saveEvaluation }
}
