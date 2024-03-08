import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

import packageJson from './package.json' with { type: "json" }

export default {
    input: 'src/index.ts',
    output: {
      name: "utils",
      file: 'lib/index.js',
      format: "umd",
      banner: 
      `/*\n@package: ${packageJson.name}\n@author: ${packageJson.author}\n@update:${new Date().toISOString()}*/`
    },
    plugins: [
      typescript(),
      terser()
    ]
  };
  