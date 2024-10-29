const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');
const path = require('path');

module.exports = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: process.env.ELECTRON === 'true' ? './' : '/',
  build: {
    outDir: 'dist',
    assetsDir: '.',
    emptyOutDir: true,
  },
}); 