import { createContext, useState, useMemo } from "react";
import {createTheme } from "@mui/material/styles";

// color design tokens
export const tokens = (mode) => ({
    ...(mode === 'light' ? {
        yellow: {
    100: "#f6f6f6",
    200: "#eeeeee",
    300: "#e5e5e5",
    400: "#dddddd",
    500: "#d4d4d4",
    600: "#aaaaaa",
    700: "#7f7f7f",
    800: "#555555",
    900: "#2a2a2a"
} 
    } : {
        // dark mode colors
    })
})
