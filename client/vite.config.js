/* eslint-disable no-undef */
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig(({ mode }) => {
   const env = loadEnv(mode, process.cwd(), '');
   return {
      plugins: [react(), tailwindcss()],
      define: {
         'process.env.VITE_API_URL': JSON.stringify(env.VITE_API_URL),
      },
      resolve: {
        alias: {
            '@/app': path.resolve(__dirname, 'src/'),
            '@/components': path.resolve(__dirname, 'src/components'),
            '@/functions': path.resolve(__dirname, 'src/functions'),
            '@/assets': path.resolve(__dirname, 'src/assets'),
            '@/ui': path.resolve(__dirname, 'src/components/ui'),
            '@/hooks': path.resolve(__dirname, 'src/hooks')
        }
      }
   };
});

/**
 * "@/app/*": ["./src/*"],
        "@/components/*": ["./src/components/new/*"],
        "@/functions/*": ["./src/functions/*"],
        "@/assets/*": ["./src/assets/*"],
        "@/ui/*": ["./src/components/new/ui/*"],
        "@/hooks/*": ["./src/hooks/*"],
 */
