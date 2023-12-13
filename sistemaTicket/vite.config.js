import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})




// vite.config.js
// const viteConfig= {
//   // ...otras configuraciones...
//   resolve: {
//     alias: {
//       // Asegúrate de que la ruta sea correcta
//       'redux-thunk': require.resolve('redux-thunk'),
//     },
//   },
// };


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react-swc';
// import path from 'path';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       'redux-thunk': path.resolve(__dirname, 'node_modules/redux-thunk/dist/redux-thunk.esm.js'),
//     },
//   },
// });
