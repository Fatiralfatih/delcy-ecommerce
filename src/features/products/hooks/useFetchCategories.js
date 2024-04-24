import { axiosInstance } from "@/libs"
import { useQuery } from "@tanstack/react-query"

const useFetchCategories = ({ token }) => {
    return useQuery({
        queryKey: ['categories-data'],
        queryFn: async () => {
            try {
                const response = await axiosInstance.get('categories', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                return response.data
            } catch (error) {
                throw new Error(error.message);
            }
        }
    })
}

export { useFetchCategories }