import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
  
const queryClient = new QueryClient();

function App() {
  
  return(
    <QueryClientProvider client={queryClient}>
      <HomeScreen />

    </QueryClientProvider>
  )
}

export default App;
