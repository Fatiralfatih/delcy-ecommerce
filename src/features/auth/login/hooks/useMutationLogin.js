import { axiosInstance } from "@/libs";
import { useMutation } from "@tanstack/react-query"

export const useMutationLogin = ({ onSuccess, onError }) => {
    return useMutation({
        mutationKey: ["login"],
        mutationFn: async (body) => {
            const response = await axiosInstance.post("/login", body);
            return response.data;
        },
        onSuccess,
        onError,
    });
}