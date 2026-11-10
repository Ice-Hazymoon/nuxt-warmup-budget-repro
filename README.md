# Nuxt dev warmup: client crawl gets no time

`nuxt.config.ts` delays the SSR transform of `app/utils/heavy.ts` by 21 s, standing in for an app whose server graph takes longer than the 20 s warmup budget.

```sh
pnpm install
CONSOLA_LEVEL=4 pnpm dev
```

Wait without opening the page. Output on Nuxt 4.6.4:

```
Vite server warmed up 79 of 80 modules in 21213ms (abandoned)
Vite client warmed up 0 of 0 modules in 0ms (abandoned)
```
