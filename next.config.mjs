/** @type {import('next').NextConfig} */
/* global process */
import { withContentlayer } from "next-contentlayer";

// GITHUB_PAGES=true ise site statik HTML olarak dışa aktarılır (GitHub Pages için).
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const githubPagesConfig = {
  pageExtensions: ["js", "jsx", "mdx", "tsx", "ts"],
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    loader: "custom",
    loaderFile: "./image-loader.js",
  },
};

const vercelConfig = {
  pageExtensions: ["js", "jsx", "mdx", "tsx", "ts"],
  async redirects() {
    return [
      {
        source: "/asd",
        destination: "/autism",
        permanent: false,
      },
      {
        source: "/aspergers",
        destination: "/autism",
        permanent: false,
      },
      {
        source: "/bp",
        destination: "/bipolar",
        permanent: false,
      },
      {
        source: "/mpd",
        destination: "/did",
        permanent: false,
      },
      {
        source: "/anxietydisorder",
        destination: "/anxiety",
        permanent: false,
      },
      {
        source: "/sleeplessness",
        destination: "/insomnia",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/js/script.outbound-links.js",
        destination: "https://plausible.io/js/script.outbound-links.js",
      },
      {
        source: "/api/event",
        destination: "https://plausible.io/api/event",
      },
    ];
  },
};

const config = withContentlayer(
  isGithubPages ? githubPagesConfig : vercelConfig,
);

export default config;
