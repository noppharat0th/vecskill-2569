import { $ as $fetch$2 } from '../virtual/entry.mjs';

//#region app/composables/useApi.ts
var useApi = () => {
	return {
		get: (url, params) => $fetch$2(`/api${url}`, {
			method: "GET",
			params
		}),
		post: (url, body) => $fetch$2(`/api${url}`, {
			method: "POST",
			body
		}),
		put: (url, body) => $fetch$2(`/api${url}`, {
			method: "PUT",
			body
		}),
		patch: (url, body) => $fetch$2(`/api${url}`, {
			method: "PATCH",
			body
		}),
		delete: (url) => $fetch$2(`/api${url}`, { method: "DELETE" })
	};
};

export { useApi as u };
//# sourceMappingURL=useApi-BHbECEYe.mjs.map
