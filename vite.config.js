// Static preview only: Vite serves the root index.html without React, TypeScript, Tailwind, or server code.
import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  publicDir: false,
  server: {
    host: true
  }
});
