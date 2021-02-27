import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'
export default {
  plugins: [
    VitePWA(),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('input-')
        }
      }
    }),
  ],
  optimizeDeps: {
    include: ['@maslick/radiaslider'],
  }
}