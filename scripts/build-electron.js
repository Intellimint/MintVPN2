const { build } = require('esbuild');
const path = require('path');

build({
  entryPoints: [
    path.resolve(__dirname, '../electron/main.ts'),
    path.resolve(__dirname, '../electron/preload.ts'),
  ],
  bundle: true,
  platform: 'node',
  outdir: path.resolve(__dirname, '../dist/electron'),
  external: ['electron'],
  format: 'cjs',
  target: 'node16',
}).catch(() => process.exit(1)); 