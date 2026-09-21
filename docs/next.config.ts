import type { NextConfig } from "next"
import createMDX from "@next/mdx"

const nextConfig: NextConfig = {
  pageExtensions: ['tsx', 'ts', 'mdx'],
  transpilePackages: ["@devrosui/react"],
  redirects() {
    return [
      {
        source: "/docs",
        destination: "/docs/getting-started/prerequisites",
        permanent: true
      },
      {
        source: "/docs/getting-started",
        destination: "/docs/getting-started/prerequisites",
        permanent: true
      },
      {
        source: "/docs/components",
        destination: "/docs/components/accordion",
        permanent: true
      },
    ]
  }
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [["remark-gfm", {"strict": true, throwOnError: true}]]
  }
})

export default withMDX(nextConfig)
