import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'https://api.superjob.ru/2.0/' 
    }
  }
  plugins: [react(), tsconfigPaths()],
});
