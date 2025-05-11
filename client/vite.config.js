/* eslint-disable no-undef */
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   define: {
//     // eslint-disable-next-line no-undef
//     'process.env': process.env
//   }
// })


export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
      plugins: [react()],
        define: {
            'process.env.VITE_API_URL': JSON.stringify(env.VITE_API_URL),
        },
    };
});
