import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://jlzhang-yzu.github.io/",
  markdown: {
    shikiConfig: {
      theme: "github-light"
    }
  }
});
