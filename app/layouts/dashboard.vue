<template>
    <div class="flex min-h-screen bg-slate-50">
        <DashSidebar />
        <div class="flex flex-col flex-1 min-w-0">
            <DashNavbar />
            <main class="flex-1 p-6 overflow-y-auto">
                <slot />
            </main>
        </div>
    </div>
</template>