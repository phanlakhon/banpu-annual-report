import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  ...(process.env.EXPORT === '1' && { output: 'export' }),
};

export default withNextIntl(nextConfig);
