<script lang="ts" setup>
import { ref } from 'vue';
import { DonutChart, BarChart } from 'vue-chrts';

definePageMeta({
    layout: "dashboard"
});

// --- Stat Card Data ---
const stats = ref({
    activeEvaluations: 24,
    completedEvaluations: 186,
    pendingReviews: 12,
    avgScore: 78.4,
})

// --- Donut Chart: Evaluation Completion Status ---
const statusData = ref([12, 8, 24]);
const statusCategories = {
    'Completed': { name: 'Completed', color: '#22c55e' },
    'In Progress': { name: 'In Progress', color: '#3b82f6' },
    'Pending': { name: 'Pending', color: '#e5e7eb' },
};

// --- Bar Chart: Score Distribution ---
const scoreData = ref([
    { range: 'Needs Improvement', count: 8 },
    { range: 'Fair', count: 18 },
    { range: 'Good', count: 42 },
    { range: 'Very Good', count: 35 },
    { range: 'Excellent', count: 17 },
]);
const scoreCategories = {
    count: { name: 'Evaluatees', color: '#3b82f6' }
};
const xFormatterScore = (i: number) => scoreData.value[i]?.range ?? '';

// --- Recent Evaluations Table ---
const recentEvaluations = ref([
    { id: 'EV-2024-041', evaluatee: 'Somsak Prasert', evaluator: 'Dr. Natthapong', department: 'Engineering', score: 85, status: 'Completed' },
    { id: 'EV-2024-040', evaluatee: 'Ananya Klinhom', evaluator: 'Dr. Natthapong', department: 'Engineering', score: null, status: 'In Progress' },
    { id: 'EV-2024-039', evaluatee: 'Kittisak Wongsa', evaluator: 'Prof. Sureerat', department: 'Science', score: 72, status: 'Completed' },
    { id: 'EV-2024-038', evaluatee: 'Ploy Ratanakorn', evaluator: 'Prof. Sureerat', department: 'Science', score: null, status: 'Pending' },
    { id: 'EV-2024-037', evaluatee: 'Nattawut Jaipong', evaluator: 'Dr. Wichai', department: 'Business', score: 91, status: 'Completed' },
])

const statusColor = (status: string) => {
    if (status === 'Completed') return 'text-emerald-600 bg-emerald-50'
    if (status === 'In Progress') return 'text-blue-600 bg-blue-50'
    return 'text-gray-500 bg-gray-100'
}

</script>

<template>
    <div class="p-6 space-y-6 mx-auto">

        <!-- Stat Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <DashCard
                variant="primary"
                title="Active Evaluations"
                :value="stats.activeEvaluations"
                icon="i-lucide-clipboard-list"
                trend="+6"
                trend-direction="up"
                period="vs last month"
            />
            <DashCard
                title="Completed"
                :value="stats.completedEvaluations"
                icon="i-lucide-check-circle"
                trend="+23"
                trend-direction="up"
                period="vs last month"
            />
            <DashCard
                title="Pending Reviews"
                :value="stats.pendingReviews"
                icon="i-lucide-clock"
                trend="-4"
                trend-direction="down"
                period="vs last month"
            />
            <DashCard
                title="Avg. Score"
                :value="stats.avgScore + '%'"
                icon="i-lucide-trending-up"
                trend="+2.1%"
                trend-direction="up"
                period="vs last month"
            />
        </div>

        <!-- Charts Row -->
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-4">
            <!-- Donut Chart -->
            <div class="lg:col-span-2 bg-white border border-gray-100 p-6 rounded-2xl flex flex-col">
                <div class="flex items-center justify-between mb-1">
                    <h3 class="text-sm font-semibold text-gray-800">Evaluation Status</h3>
                    <UButton icon="i-lucide-ellipsis" color="neutral" variant="ghost" size="xs" class="text-gray-400" />
                </div>
                <p class="text-xs text-gray-400 mb-4">Current cycle overview</p>
                <div class="flex-grow flex items-center justify-center min-h-[240px]">
                    <DonutChart :data="statusData" :categories="statusCategories" :height="240" :radius="6" />
                </div>
            </div>

            <!-- Bar Chart -->
            <div class="lg:col-span-3 bg-white border border-gray-100 p-6 rounded-2xl flex flex-col">
                <div class="flex items-center justify-between mb-1">
                    <h3 class="text-sm font-semibold text-gray-800">Score Distribution</h3>
                    <UButton icon="i-lucide-ellipsis" color="neutral" variant="ghost" size="xs" class="text-gray-400" />
                </div>
                <p class="text-xs text-gray-400 mb-4">Breakdown of evaluatee performance scores</p>
                <div class="flex-grow flex items-center justify-center min-h-[240px]">
                    <BarChart
                        :data="scoreData"
                        :categories="scoreCategories"
                        :xFormatter="xFormatterScore"
                        :height="240"
                        :yAxis="['count']"
                        xAxis="range"
                        :radius="6"
                    />
                </div>
            </div>
        </div>

        <!-- Recent Evaluations Table -->
        <div class="bg-white border border-gray-100 rounded-2xl overflow-hidden">
            <div class="flex items-center justify-between p-6 pb-0">
                <div>
                    <h3 class="text-sm font-semibold text-gray-800">Recent Evaluations</h3>
                    <p class="text-xs text-gray-400 mt-0.5">Latest evaluation records across all departments</p>
                </div>
                <UButton label="View All" color="neutral" variant="ghost" size="xs" trailing-icon="i-lucide-arrow-right" />
            </div>
            <div class="overflow-x-auto">
                <table class="w-full text-sm">
                    <thead>
                        <tr class="text-left text-xs text-gray-400 font-medium border-b border-gray-50">
                            <th class="px-6 py-3">ID</th>
                            <th class="px-6 py-3">Evaluatee</th>
                            <th class="px-6 py-3">Evaluator</th>
                            <th class="px-6 py-3">Department</th>
                            <th class="px-6 py-3">Score</th>
                            <th class="px-6 py-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="row in recentEvaluations" :key="row.id"
                            class="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                            <td class="px-6 py-3.5 font-mono text-xs text-gray-500">{{ row.id }}</td>
                            <td class="px-6 py-3.5 font-medium text-gray-800">{{ row.evaluatee }}</td>
                            <td class="px-6 py-3.5 text-gray-500">{{ row.evaluator }}</td>
                            <td class="px-6 py-3.5 text-gray-500">{{ row.department }}</td>
                            <td class="px-6 py-3.5 font-semibold" :class="row.score ? 'text-gray-800' : 'text-gray-300'">
                                {{ row.score !== null ? row.score : '—' }}
                            </td>
                            <td class="px-6 py-3.5">
                                <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium"
                                    :class="statusColor(row.status)">
                                    {{ row.status }}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</template>
