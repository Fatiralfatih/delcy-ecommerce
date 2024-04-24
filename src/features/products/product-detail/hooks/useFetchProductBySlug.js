import { axiosInstance } from "@/libs";
import { useQuery } from "@tanstack/react-query"

export const useFetchProductBySlug = ({ slug, token }) => {

    const fetchProductBySlug = async (slug) => {
        try {
            const response = await axiosInstance.get(`/product/${slug}/show`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
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
