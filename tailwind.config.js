module.exports = {
  content: [
    './*.html',  // For HTML files in the root directory
    './**/*.html',  // For HTML files in subdirectories (if any)
    './*.{js,jsx,ts,tsx}',  // If you're using JavaScript/TypeScript
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
