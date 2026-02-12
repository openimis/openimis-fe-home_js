import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';
import envCompatible from 'vite-plugin-env-compatible';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
      jsxImportSource: '@emotion/react',
    }),
    svgr(),
    envCompatible(),
  ],
  build: {
    lib: {
      entry: 'src/index.js',
      name: '@openimis/fe-home',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'es' : 'cjs'}.js`,
    },
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      external: [
        /^@babel.*/,
        /^@date-io\/.*/,
        /^@openimis.*/,
        'classnames',
        'clsx',
        'history',
        /^lodash.*/,
        'moment',
        'prop-types',
        /^react.*/,
        /^redux.*/,
        /^@mui\/material/,
        /^@mui\/icons-material/,
        '@mui/x-date-pickers',
        /^@emotion\/react/,
        /^@emotion\/styled/,
        /^@emotion\/cache/,
        '@mui/styled-engine',
      ],
      output: {
        globals: {},
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
}); 