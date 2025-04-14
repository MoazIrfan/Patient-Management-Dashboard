import React, { createContext, useState, useMemo, ReactNode } from "react";
import { createTheme, ThemeProvider, Theme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Define the context type
interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

// Create context with a default value
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Theme provider props type
interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProviderWrapper: React.FC<ThemeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Toggle function
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  // Memoized theme
  const theme: Theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: {
            main: darkMode ? "#90caf9" : "#1976d2", // Light blue in dark mode
          },
          background: {
            default: darkMode ? "#121212" : "#ffffff", // Dark mode background
            paper: darkMode ? "#1e1e1e" : "#f5f5f5", // Card color
          },
          text: {
            primary: darkMode ? "#888" : "#000000", // Text color
          },
        },
      }),
    [darkMode]
  );

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProviderWrapper;
