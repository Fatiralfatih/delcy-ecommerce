import { axiosInstance } from "@/lib"
import { useQuery } from "@tanstack/react-query"
export const useProductBySlug = ({ slug }) => {

    const fetchProductBySlug = async () => {
        try {
            const response = await axiosInstance.get(`/product/${slug}`);
            return response;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    return useQuery({
        queryKey: [`detail-product`],
        queryFn: () => fetchProductBySlug()
    })
}
