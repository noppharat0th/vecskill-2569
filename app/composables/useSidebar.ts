const collapsed = ref(false)

export function useSidebar() {
    const toggle = () => {
        collapsed.value = !collapsed.value
    }

    return {
        collapsed,
        toggle,
    }
}
