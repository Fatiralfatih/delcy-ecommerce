import { axiosInstance } from "@/lib";
import { useMutation } from "@tanstack/react-query";

export const useMutationRegister = ({ onSuccess, onError }) => {
    return useMutation({
        mutationKey: ["register"],
        mutationFn: async (body) => {
            const response = await axiosInstance.post("/register", body);
            return response.data;
        },
        onSuccess,
        onError,
    });
}