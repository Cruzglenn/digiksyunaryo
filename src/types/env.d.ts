/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GEMINI_API_KEY: string;
  readonly VITE_DIGIKSYUNARYO_SECRET_KEY: string;
  readonly VITE_RECAPTCHA_SITE_KEY: string;
  readonly VITE_ENABLE_ANTI_DEBUGGING: string;
  readonly VITE_ENABLE_STORAGE_ENCRYPTION: string;
  readonly VITE_ENABLE_SUSPICIOUS_MONITORING: string;
  readonly VITE_SAFE_MODE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Server-side environment variables (not exposed to client)
declare namespace NodeJS {
  interface ProcessEnv {
    readonly RECAPTCHA_SECRET_KEY: string;
    readonly NODE_ENV: 'development' | 'production' | 'test';
  }
}
