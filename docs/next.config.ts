import type { NextConfig } from "next"
import createMDX from "@next/mdx"

const nextConfig: NextConfig = {
  pageExtensions: ['tsx', 'ts', 'mdx'],
  transpilePackages: ["@devrosui/react"]
}

const withMDX = createMDX({
  extension: /\.mdx?$/
})

export default withMDX(nextConfig)
