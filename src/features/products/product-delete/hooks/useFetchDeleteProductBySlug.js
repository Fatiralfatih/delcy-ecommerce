import { axiosInstance } from "@/lib";
import { useMutation } from "@tanstack/react-query";

export const useFetchDeleteProductBySlug = ({ slug, token, onSuccess, onError, onSettled }) => {
    return useMutation({
        mutationKey: ["delete-product"],
        mutationFn: async () => {
            const response = await axiosInstance.delete(`/product/${slug}/delete`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response;
        },
        onSuccess,
        onError,
        onSettled
    });
}
