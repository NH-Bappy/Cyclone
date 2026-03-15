import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const App = () => {
  // Create a client
  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>

    </>
  );
};

export default App;
