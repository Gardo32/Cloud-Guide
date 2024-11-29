"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      {...props}
      defaultTheme="light" // Force light mode by default
      enableSystem={false} // Disable system preference to avoid automatic dark mode
    >
      {children}
    </NextThemesProvider>
  );
}
