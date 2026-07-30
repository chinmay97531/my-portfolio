/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export so the site can be hosted on GitHub Pages (chinmaymittal.dev)
  output: "export",
  images: {
    // GitHub Pages has no image optimization server, so serve images as-is.
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
