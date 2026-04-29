import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: Set base to your GitHub repo name for Pages deployment
// e.g. if your repo is github.com/you/norse-guide, set base: '/norse-guide/'
// For a user/org site (github.com/you/you.github.io), set base: '/'
export default defineConfig({
  plugins: [react()],
  base: '/norse-guide/',
})
