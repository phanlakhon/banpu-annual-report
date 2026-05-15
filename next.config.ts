import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  ...(process.env.EXPORT === '1' && { 
    output: 'export',
    basePath: '/ebooks/banpu-annual-report-2025',
  }),
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
