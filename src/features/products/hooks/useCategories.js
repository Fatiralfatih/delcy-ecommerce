import { axiosInstance } from "@/lib"
import { useQuery } from "@tanstack/react-query"


const useCategories = () => {
    return useQuery({
        queryKey: ['categories-data'],
        queryFn: () => axiosInstance.get('/categories').catch(error => console.log(error.message))
    })
}

export { useCategories }