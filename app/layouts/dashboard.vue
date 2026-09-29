<template>
    <div class="flex min-h-screen bg-[#f8f9fb]">
        <DashSidebar />
        <div class="flex flex-col flex-1 min-w-0">
            <DashNavbar />
            <main class="flex-1 overflow-y-auto">
                <slot />
            </main>
        </div>
    </div>
</template>