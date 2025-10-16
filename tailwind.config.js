// tailwind.config.js

module.exports = {
  // 🎯 CRITICAL: This tells Tailwind to scan all .html and .js files 
  // in the current directory (`./`) and any subdirectories (`**`)
  content: [
    './*.html', // Scans all HTML files in the root folder
    './**/*.js', // Scans all JS files in all subfolders
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}