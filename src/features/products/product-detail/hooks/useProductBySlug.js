import { axiosInstance } from "@/lib"
import { useQuery } from "@tanstack/react-query"

export const useProductBySlug = ({ slug }) => {

    return useQuery({
        queryKey: ['detail-product'],
        queryFn: () =>
            axiosInstance.get(`/product/${slug}`).catch(error => console.log(error.message)),
    })
}
