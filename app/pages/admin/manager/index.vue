<template>
    <div class="bg-white p-2 rounded-[10px]">
        <div class="px-3 pb-3 border-b border-gray-300">
            <h1 class="font-bold">TEST</h1>
            <p class="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, numquam?</p>
        </div>
        <UTable :data="data" :columns="columns" class="flex-1">
            <!-- สร้าง Slot สำหรับคอลัมน์ actions -->
            <template #actions-data="{ row }">
                <div class="flex items-center justify-end gap-2">
                    <UButton size="xs" color="gray" variant="ghost" icon="i-lucide-pencil" @click="editRow(row)" />
                    <UButton size="xs" color="red" variant="ghost" icon="i-lucide-trash" @click="deleteRow(row)" />
                </div>
            </template>
        </UTable>
    </div>
</template>

<script setup lang="ts">

definePageMeta({
    layout: "dashboard"
})


// 1. กำหนด Columns เอง เพื่อให้สามารถเพิ่มคอลัมน์ Actions ได้
const columns = [
    { id: 'id', accessorKey: 'id', header: 'ID' },
    { id: 'date', accessorKey: 'date', header: 'Date' },
    { id: 'status', accessorKey: 'status', header: 'Status' },
    { id: 'email', accessorKey: 'email', header: 'Email' },
    { id: 'amount', accessorKey: 'amount', header: 'Amount' },
    { id: 'actions', header: '' } // คอลัมน์เปล่าๆ สำหรับใส่ปุ่ม
]

// 2. สร้างฟังก์ชันสำหรับรับ Action
function editRow(row: any) {
    alert('Edit ID: ' + row.id)
}

function deleteRow(row: any) {
    if (confirm('Delete ID: ' + row.id + '?')) {
        data.value = data.value.filter(item => item.id !== row.id)
    }
}

const data = ref([
    {
        id: '4600',
        date: '2024-03-11T15:30:00',
        status: 'paid',
        email: 'james.anderson@example.com',
        amount: 594
    },
    {
        id: '4599',
        date: '2024-03-11T10:10:00',
        status: 'failed',
        email: 'mia.white@example.com',
        amount: 276
    },
    {
        id: '4598',
        date: '2024-03-11T08:50:00',
        status: 'refunded',
        email: 'william.brown@example.com',
        amount: 315
    },
    {
        id: '4597',
        date: '2024-03-10T19:45:00',
        status: 'paid',
        email: 'emma.davis@example.com',
        amount: 529
    },
    {
        id: '4596',
        date: '2024-03-10T15:55:00',
        status: 'paid',
        email: 'ethan.harris@example.com',
        amount: 639
    }
])
</script>