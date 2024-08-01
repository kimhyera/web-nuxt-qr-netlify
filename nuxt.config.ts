// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    assets: '/<rootDir>/assets',
  },
  ssr: false,

  // 서버 사이드 렌더링을 사용하도록 설정

  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
  runtimeConfig: {
    apikey: 'useApi-key-154898-+7298(*@%',
    public: {
      VITE_API_URL: process.env.VITE_API_URL,
      VITE_AUTH_KEY: process.env.VITE_AUTH_KEY,
      VITE_KAKAO_API_KEY: process.env.VITE_KAKAO_API_KEY,
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
				   @import "@/assets/common/scss/_variables.scss";
				   @import "@/assets/common/scss/_mixins.scss";
				 `,
        },
      },
    },
  },

  css: ['@/assets/common/scss/common.scss'],
});
