import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Switch to HashRouter
import "./App.css";
import Layout from "./layouts";
import PokemonScreen from "./screens/PokemonScreen";
import ErrorPage from "./error-page";

const HomeScreen = lazy(() => import("./screens/HomeScreen"));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router> {/* Make sure this is HashRouter */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <Suspense fallback={<h1 className="text-5xl">Loading...</h1>}>
                  <HomeScreen />
                </Suspense>
              }
            />
            <Route path="pokemon/:id" element={<PokemonScreen />} />
          </Route>
          <Route path="*" element={<ErrorPage />} /> {/* Handle unknown routes */}
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
