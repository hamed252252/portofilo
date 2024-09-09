import withMDX from "@next/mdx";

const nextConfig = withMDX({
  extension: /\.mdx?$/,
  options: {
    // You can add additional MDX options here if needed
  },
})({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
    ],
  },
});

// Corrected usage of withMDX
const finalConfig = {
  ...nextConfig,
  // Other Next.js configurations can go here
};

export default finalConfig;
