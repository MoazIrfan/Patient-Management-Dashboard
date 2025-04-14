import ThemeProviderWrapper from "./ThemeContext";
import { RouterProvider } from "react-router-dom";
import router from './routes'
import "./App.css";

function App() {
  return (
    <ThemeProviderWrapper>
      <RouterProvider router={router} />
    </ThemeProviderWrapper>
  );
}

export default App;