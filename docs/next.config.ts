import type { NextConfig } from "next"
import createMDX from "@next/mdx"
import remarkGfm from "remark-gfm"

const nextConfig: NextConfig = {
  pageExtensions: ['tsx', 'ts', 'mdx'],
  transpilePackages: ["@devrosui/react"]
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [["remark-gfm", {"strict": true, throwOnError: true}]]
  }
})

export default withMDX(nextConfig)
