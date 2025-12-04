import { AxiosError } from "axios";

export const handleSessionExpired = async (error: AxiosError) => {
	if (error.response?.status === 401) {
		/*
		useAuthStore.getState().clearAuth();
		*/
	}

	return Promise.reject(error);
};