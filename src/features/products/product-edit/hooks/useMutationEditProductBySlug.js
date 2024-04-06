import { axiosInstance } from "@/lib"
import { useMutation } from "@tanstack/react-query"

export const useMutationEditProductBySlug = ({ slug, onSuccess, onError }) => {

    return useMutation({
        mutationKey: ["create-product", slug],
        mutationFn: async (body) => {

            const data = {
                category_id: parseInt(body.category_id),
                description: body.description,
                price: body.price,
                status: body.status === true ? 1 : 0,
                variant: JSON.stringify({
                    color: body.color,
                    size: body.size
                }),
                stock: body.stock,
                title: body.title,
                "_method": "PUT"
            }

            const response = await axiosInstance.post(`/product/${slug}/update`, data);
            return response.data;
        },
        onSuccess,
        onError,
    }
    )
}
