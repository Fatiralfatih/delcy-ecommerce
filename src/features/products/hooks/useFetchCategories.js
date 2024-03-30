import { axiosInstance } from "@/lib"
import { useQuery } from "@tanstack/react-query"

const useFetchCategories = () => {
    return useQuery({
        queryKey: ['categories-data'],
        queryFn: async () => {
            try {
                const response = await axiosInstance.get('categories');
                return response.data
            } catch (error) {
                throw new Error(error.message);
            }
        }
    })
}

export { useFetchCategories }