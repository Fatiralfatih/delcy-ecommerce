import { axiosInstance } from "@/lib"
import { useQuery } from "@tanstack/react-query"

export const useFetchProductBySlug = ({ slug }) => {

    const fetchProductBySlug = async (slug) => {
        try {
            const response = await axiosInstance.get(`/product/${slug}/show`);
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    return useQuery({
        queryKey: [`detail-product`, slug],
        queryFn: () => fetchProductBySlug(slug),
    })
}
