module.exports = {
    content: [
      "./node_modules/flowbite/**/*.js",
      "./src/**/*.{js,jsx,ts,tsx,html}"
    ],
    theme: {
      extend: {
        screens: {
          xs: '480px', // Example for an extra small breakpoint
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
    },
    plugins: [require('flowbite/plugin')],
  };
  