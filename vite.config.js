import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/TronxHub/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        components: resolve(__dirname, 'components.html'),
        projects: resolve(__dirname, 'projects.html'),
        quiz: resolve(__dirname, 'quiz.html'),
        forum: resolve(__dirname, 'forum.html')
      }
    }
  }
});
