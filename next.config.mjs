/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['github.com','res.cloudinary.com','images.credly.com','miro.medium.com','media2.dev.to','img-c.udemycdn.com','td-mainsite-cdn.tutorialsdojo.com','media.licdn.com'], // Allow images from github.com
    },
    eslint: {
      ignoreDuringBuilds: true, // Disables ESLint checks during the build process
    },
    typescript: {
      ignoreBuildErrors: true, // Ignores TypeScript errors during the build process
    },
  };
  
  export default nextConfig;
  