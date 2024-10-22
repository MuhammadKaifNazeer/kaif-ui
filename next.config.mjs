import createMDX from 'fumadocs-mdx/config';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com', 'ui.aceternity.com', 'fonts.gstatic.com', 'cdn.pixabay.com', 'ui.shadcn.com'],
  },
};
     
export default withMDX(config);
