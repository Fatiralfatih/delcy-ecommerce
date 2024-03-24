import { axiosInstance } from "@/lib"
import { useQuery } from "@tanstack/react-query"


const useProducts = () => {
    return useQuery({
        queryKey: ['product-data'],
        queryFn: () => axiosInstance.get('/products').catch(error => console.log('products ' + error.message))
    })
}

export { useProducts };
