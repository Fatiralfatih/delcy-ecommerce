import { axiosInstance } from "@/lib";
import { useMutation } from "@tanstack/react-query";


export const useFetchCreateProduct = ({ onSuccess, onError }) => {
    return useMutation({
        mutationKey: ["create-product"],
        mutationFn: async (body) => {
            const formData = new FormData();
            formData.append("category", body.category);
            formData.append("description", body.description);
            formData.append("price", body.price);
            formData.append("status", body.status === true ? 1 : 0);
            formData.append("variant", JSON.stringify({
                color: body.color,
                size: body.size,
            }))
            formData.append("stock", body.stock);
            formData.append("title", body.title);
            formData.append("thumbnail", body.thumbnail[0]);
            const response = await axiosInstance.post("/product/create", formData);
            return response.data;
        },
        onSuccess,
        onError
    });
}