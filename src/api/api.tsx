import {
    useQuery,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();

export const useGetApi = () => {
    return useQuery({
        queryKey: ["get product api"],
        queryFn: async () => {
            const res = await fetch("https://dummyjson.com/products");
            const data = await res.json();
            return data;
        }
    })
}