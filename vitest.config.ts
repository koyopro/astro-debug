import { getViteConfig } from "astro/config";

export default getViteConfig({
  test: {
    'setupFiles': ['./tests/setup.ts'],
  }
})
