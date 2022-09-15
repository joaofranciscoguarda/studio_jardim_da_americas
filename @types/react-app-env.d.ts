declare namespace NodeJS {
  interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      REACT_APP_PUBLIC_GOOGLE_MAPS_API_KEY: string;

  }
}