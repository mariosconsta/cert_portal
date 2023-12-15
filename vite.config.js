import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/cert_portal/",
  server: {
    host: "localhost",
    port: 3000,
  },
});
