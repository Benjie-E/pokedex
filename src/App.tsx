import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layouts";
import PokemonScreen from "./screens/PokemonScreen";
  import ErrorPage from "./error-page"
const HomeScreen = lazy(() => import("./screens/HomeScreen"));


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route
              index
              path={"/"}
              element={
                <Suspense fallback={<h1 className="text-5xl">Loading...</h1>}>
                  <HomeScreen />
                </Suspense>
                
              }
            />
            <Route path={"/pokemon/:id"} element={<PokemonScreen />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />

        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
