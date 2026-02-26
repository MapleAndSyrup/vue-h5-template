// env.d.ts
/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
  readonly VITE_USE_MOCK: string
  readonly VITE_USE_ERUDA: string
  readonly VITE_USE_COMPRESS: string
  readonly VITE_USE_REPORT: string
  readonly VITE_USE_HTTPS: string
  readonly VITE_USE_PWA: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
