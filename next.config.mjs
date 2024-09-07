import withMDX from "@next/mdx";

const nextConfig = withMDX({
  extension: /\.mdx?$/,
  options: {
    // You can add additional MDX options here if needed
  },
})({
  // Add your existing Next.js config options here
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
});

export default nextConfig;
