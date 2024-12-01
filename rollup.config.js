import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
export default [{
  input: 'dist/index.js',
  output: {
    name: "GenerateSlug",
    file: "slug.min.js",
    format: 'iife'
  },
  plugins: [
    resolve(),
    commonjs(),
  ],
}];