import { J as useState, K as navigateTo } from '../virtual/entry.mjs';
import { u as useApi } from './useApi-BHbECEYe.mjs';
import { computed } from 'vue';
import { p as publicAssetsURL } from '../routes/renderer.mjs';

//#region app/composables/useAuth.ts
var useAuth = () => {
	const user = useState("auth.user", () => null);
	const isLoggedIn = computed(() => !!user.value);
	const Login = async (form) => {
		const api = useApi();
		await api.post("/auth/login", form);
		const response = await api.get("/auth/me");
		user.value = response.data;
		await navigateTo("/admin");
	};
	const Register = async (form) => {
		await useApi().post("/auth/register", form);
		await navigateTo("/");
	};
	const logout = async () => {
		user.value = null;
		await useApi().post("/auth/logout");
		await navigateTo("/");
	};
	return {
		user,
		isLoggedIn,
		Login,
		Register,
		logout
	};
};
//#endregion
//#region \0virtual:public?%2Flogo2.png
var _virtual_public__2Flogo2_default = publicAssetsURL("/logo2.png");

export { _virtual_public__2Flogo2_default as _, useAuth as u };
//# sourceMappingURL=_virtual_public-DtqpTDnc.mjs.map
