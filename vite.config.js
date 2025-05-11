// // vite.config.js
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     lib: {
//       entry: 'src/main.jsx',
//       name: 'CbwChatbot',
//       fileName: 'cbw-chatbot',
//       formats: ['iife'],
//     },
//     rollupOptions: {
//       external: [],
//     },
//   },
//   define: {
//     // This provides a mock for process.env to prevent errors
//     'process.env': JSON.stringify({}),
//     // For React in production mode
//     'process.env.NODE_ENV': JSON.stringify('production')
//   }
// })

// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/main.jsx',
      name: 'CbwChatbot',
      fileName: 'cbw-chatbot',
      formats: ['iife'],
    },
    rollupOptions: {
      external: [],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {},
        // Ensure the chatbot initializes itself when loaded
        inlineDynamicImports: true,
      },
    },
    // Output directly to the test folder
    // outDir: 'public/fake',
  },
  define: {
    'process.env': JSON.stringify({}),
    'process.env.NODE_ENV': JSON.stringify('production')
  }
})