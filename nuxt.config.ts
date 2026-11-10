// Stands in for a large app: the server graph takes longer than the shared warmup budget (20 s) to transform.
export default defineNuxtConfig({
  compatibilityDate: '2026-11-01',
  vite: {
    plugins: [{
      name: 'slow-ssr-transform',
      async transform(_code, id, options) {
        if (options?.ssr && id.endsWith('/utils/heavy.ts'))
          await new Promise(resolve => setTimeout(resolve, 21_000))
      },
    }],
  },
})
