import { axiosInstance } from "@/lib"
import { useQuery } from "@tanstack/react-query"

export const useGalleriesByIdProduct = ({ product }) => {
    return useQuery({
        queryKey: ['galleries-by-id-product'],
        queryFn: async () => {
            if (product.data && product.data.data.id) {
                const response = await axiosInstance.get(`galleries/1`)
                return response
            }
        }
    })
}