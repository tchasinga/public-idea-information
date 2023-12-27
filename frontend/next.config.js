// next.config.js
module.exports = {
    distDir: 'build', // Change 'build' to your preferred directory name
    // Other configurations...
    reactStrictMode: true, // Enable React strict mode
    poweredByHeader: false, // Disable the X-Powered-By header for security reasons
    webpack5: true, // Use Webpack 5 for building
    images: {
      domains: ['https://imgs.search.brave.com/GMUx8P3lW7Mw6iL0Is3cCVqG6tXIBRJjMW91gAXkZbk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZWNvZGVjYW1w/Lm9yZy9uZXdzL2Nv/bnRlbnQvaW1hZ2Vz/L3NpemUvdzIwMDAv/MjAxOS8xMS9Hcm91/cC0xLnBuZw'], // Add domains for image optimization
    },
    // Add any other Next.js configurations you may need
  };
  