<script setup>
import { useEvaluation } from '~/composables/service/evaluations'

definePageMeta({ layout: 'dashboard' })
useHead({ title: 'Evaluations · PersonSystem' })

const { evaluations, form, loading, saving, error, loadEvaluations, saveEvaluation } = useEvaluation()

const modalOpen = ref(false)
const mode = ref('create')

function dateLabel(value) {
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? value : new Intl.DateTimeFormat('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric',
  }).format(date)
}

function dateInput(value) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value.slice(0, 10)
  return new Date(date.getTime() - date.getTimezoneOffset() * 60_000).toISOString().slice(0, 10)
}

const columns = [
  { key: 'title', label: 'Evaluation topic' },
  { key: 'period', label: 'Assessment period', value: row => `${dateLabel(row.start_date)} – ${dateLabel(row.end_date)}` },
  { key: 'action', label: 'Actions' },
]
const { search, filteredRows } = useTableData(evaluations, { columns, searchKeys: ['title', 'start_date', 'end_date'] })

function openModal(row) {
  mode.value = row ? 'edit' : 'create'
  form.value = row
    ? { id: row.id, title: row.title, start_date: dateInput(row.start_date), end_date: dateInput(row.end_date) }
    : { id: null, title: '', start_date: '', end_date: '' }
  error.value = ''
  modalOpen.value = true
}

function actionItems(row) {
  return [{ label: 'Edit evaluation', icon: 'i-lucide-pencil', onSelect: () => openModal(row) }]
}

async function submitEvaluation() {
  if (await saveEvaluation(mode.value)) modalOpen.value = false
}

onMounted(loadEvaluations)
</script>

<template>
  <main class="min-w-0 flex-1 px-5 py-5 sm:px-7">
    <div class="w-full space-y-4">
      <PageHeader section="Workspace" title="Evaluations"
        description="Create and manage assessment topics and periods.">
        <template #actions>
          <UButton label="Create evaluation" icon="i-lucide-plus" color="neutral" @click="openModal()" />
          <UButton label="Refresh" icon="i-lucide-refresh-cw" color="neutral" variant="outline"
            :loading="loading" @click="loadEvaluations" />
        </template>
      </PageHeader>

      <UAlert v-if="error && !modalOpen" color="error" variant="soft"
        title="Could not load evaluations" :description="error" />

      <section class="overflow-hidden rounded-lg border border-gray-200 bg-white">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 px-3 py-2">
          <BaseInput v-model="search" icon="i-lucide-search" placeholder="Search evaluations…"
            aria-label="Search evaluations" width="search" />
          <span class="px-1 text-xs text-gray-500">{{ filteredRows.length }} evaluations</span>
        </div>

        <Table :rows="filteredRows" :columns="columns" :loading="loading"
          :empty-text="error ? 'Unable to load evaluations.' : 'No evaluations found.'">
          <template #action="{ row }">
            <div>
              <UDropdownMenu :items="actionItems(row)">
                <UButton icon="i-lucide-ellipsis" color="neutral" variant="ghost" aria-label="Evaluation actions" />
              </UDropdownMenu>
            </div>
          </template>
        </Table>
      </section>
    </div>

    <UModal v-model:open="modalOpen">
      <template #content>
        <div class="space-y-5 p-5 sm:p-6">
          <header class="space-y-1">
            <h2 class="text-lg font-semibold text-gray-900">{{ mode === 'edit' ? 'Edit evaluation' : 'Create evaluation' }}</h2>
            <p class="text-sm text-gray-500">Choose a topic and assessment period.</p>
          </header>
          <UAlert v-if="error" color="error" variant="soft" :description="error" />
          <form class="space-y-4" @submit.prevent="submitEvaluation">
            <label class="block space-y-1.5">
              <span class="text-sm font-medium text-gray-700">Evaluation topic</span>
              <UInput v-model="form.title" placeholder="e.g. Professional skills assessment" required class="w-full" />
            </label>
            <div class="grid gap-3 sm:grid-cols-2">
              <label class="block space-y-1.5">
                <span class="text-sm font-medium text-gray-700">Start date</span>
                <UInput v-model="form.start_date" type="date" required class="w-full" />
              </label>
              <label class="block space-y-1.5">
                <span class="text-sm font-medium text-gray-700">End date</span>
                <UInput v-model="form.end_date" type="date" required class="w-full" />
              </label>
            </div>
            <footer class="flex justify-end gap-2 border-t border-gray-100 pt-4">
              <UButton label="Cancel" color="neutral" variant="ghost" type="button"
                :disabled="saving" @click="modalOpen = false" />
              <UButton :label="mode === 'edit' ? 'Save changes' : 'Create evaluation'" color="neutral"
                type="submit" :loading="saving" />
            </footer>
          </form>
        </div>
      </template>
    </UModal>
  </main>
</template>