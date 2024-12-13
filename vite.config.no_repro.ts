import { defineConfig } from "vite";
import griffel from "@griffel/vite-plugin";

export default defineConfig({
  plugins: [griffel()],
  build: {
    rollupOptions: {
      input: {
        no_repro: "src/no_repro.ts",
      },
    },
  },
});
