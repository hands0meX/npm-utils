import ts from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.ts',
  output: [
    {
      name: 'hutils',
      file: 'lib/index.umd.js',
      format: "umd",
      // banner:
      //   `/*\n@package: ${packageJson.name}\n@author: ${packageJson.author}\n@update:${new Date().toISOString()}*/`,
      // sourcemap: true
    },
    {
      file: 'lib/index.esm.js',
      format: 'esm', // ES module
    }
  ],
  plugins: [
    resolve(),
    ts({
      module: "esnext",
    }),
    terser()
  ]
};
