import { axiosInstance } from "@/lib"
import { useQuery } from "@tanstack/react-query"


const useCategories = () => {
    return useQuery({
        queryKey: ['categories-data'],
        queryFn: () => axiosInstance.get('/categories').catch(error => { throw new Error(error.message) })
    })
}

export { useCategories }