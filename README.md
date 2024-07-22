# Astro Strapi Tailwind Setup

This project is a basic website structure using Astro, Strapi, and Tailwind CSS, with Vite as the build tool.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/astro-strapi-tailwind-setup.git
   cd astro-strapi-tailwind-setup
   ```

2. Install dependencies for Astro frontend:
   ```
   npm install
   ```

3. Install dependencies for Strapi backend:
   ```
   cd strapi
   npm install
   ```

### Development

To start the development servers:

1. Start Strapi backend:
   ```
   cd strapi
   npm run develop
   ```

2. In a new terminal, start Astro frontend:
   ```
   npm run dev
   ```

Open your browser and navigate to `http://localhost:3000` to see the Astro site. The Strapi admin panel will be available at `http://localhost:1337/admin`.

### Building for Production

To build the site for production:

1. Build Strapi backend:
   ```
   cd strapi
   npm run build
   ```

2. Build Astro frontend:
   ```
   npm run build
   ```

This will generate production-ready builds for both Strapi and Astro.

### Preview Production Build

To preview the Astro production build:

```
npm run preview
```

## Project Structure

- `src/`: Astro source files
  - `layouts/`: Layout components
  - `pages/`: Astro pages
- `public/`: Static assets
- `astro.config.mjs`: Astro configuration
- `tailwind.config.cjs`: Tailwind CSS configuration
- `strapi/`: Strapi backend
  - `src/`: Strapi source files
  - `config/`: Strapi configuration files

## Strapi Integration

The Strapi backend is set up with a basic "Post" content type. To create and manage posts:

1. Go to `http://localhost:1337/admin`
2. Create an admin account
3. Navigate to "Content Manager" > "Post"
4. Create new posts

The Astro frontend fetches and displays these posts on the homepage and individual post pages.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).