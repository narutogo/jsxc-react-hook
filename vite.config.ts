import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), libInjectCss(), dts()],
  build: {
    lib: {
       // Could also be a dictionary or array of multiple entry points
       entry: './src/Jsxc.tsx',//resolve(__dirname, './src/libMain.tsx'),
       name: 'jsxc-react-hook',
       // the proper extensions will be added
       fileName: 'jsxc-react-hook',
     },
     rollupOptions: {
       // make sure to externalize deps that shouldn't be bundled
       // into your library
       external: ['react'],
       output: {
         // Provide global variables to use in the UMD build
         // for externalized deps
         globals: {
           react: 'React',
         },
       },
     },
  },
})
