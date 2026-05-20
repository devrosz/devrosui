import type { NextConfig } from "next"
import createMDX from "@next/mdx"

const nextConfig: NextConfig = {
  pageExtensions: ['tsx', 'ts', 'mdx']
}

const withMDX = createMDX({
  extension: /\.mdx?$/
})

export default withMDX(nextConfig)
