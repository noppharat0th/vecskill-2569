export const useApi = () => {
    return {
        get: <T>(url: string, params?: Record<string, any>) =>
            $fetch<T>(`/api${url}`, { method: 'GET', params }),

        post: <T>(url: string, body?: any) =>
            $fetch<T>(`/api${url}`, { method: 'POST', body }),

        put: <T>(url: string, body?: any) =>
            $fetch<T>(`/api${url}`, { method: 'PUT', body }),

        patch: <T>(url: string, body?: any) =>
            $fetch<T>(`/api${url}`, { method: 'PATCH', body }),

        delete: <T>(url: string) =>
            $fetch<T>(`/api${url}`, { method: 'DELETE' }),
    }
}
