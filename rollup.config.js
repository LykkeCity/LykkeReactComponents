import typescript from 'rollup-plugin-typescript';
import uglify from 'rollup-plugin-uglify';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import css from 'rollup-plugin-css-porter';
import {minify} from 'uglify-es';


export default {
  input: './src/index.tsx',
  output: {
    file: 'dist/bundle/lykke-react-components.js',
    format: 'umd',
    name: 'lykke-react-components',
    sourcemap: true
  },
  plugins: [
    css({dest: 'dist/bundle/style.css'}),
    typescript({
      importHelpers: true,
      typescript: require('typescript')
    }),
    commonjs(),
    nodeResolve({jsnext: true, main: true, browser: true}),
    uglify({}, minify)
  ]
}
