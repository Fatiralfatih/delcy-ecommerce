import { axiosInstance } from "@/libs";
import { useMutation } from "@tanstack/react-query";

export const useMutationLogout = ({ authedUser, onSuccess, onError }) => {
    return useMutation({
        mutationKey: [`logout-${authedUser?.username}`],
        mutationFn: async () => {
            const response = await axiosInstance.post("/logout", null, {
                headers: {
                    Authorization: `Bearer ${authedUser.token}`,
                },
            });
            return response.data;
        },
        onSuccess,
        onError,
    });
}