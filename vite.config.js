import { defineConfig } from 'vite';  // Correct import
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
});
