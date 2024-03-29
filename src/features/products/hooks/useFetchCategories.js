import { axiosInstance } from "@/lib"
import { useQuery } from "@tanstack/react-query"

const useFetchCategories = () => {
    return useQuery({
        queryKey: ['categories-data'],
        queryFn: async () => {
            const response = await axiosInstance.get('categories');
            return response.data
        }
    })
}

export { useFetchCategories }