import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
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
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>

    </>
  );
};

export default App;
