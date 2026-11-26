/* global process */
// GitHub Pages (statik export) için görsel yükleyici: kök-göreli yollara basePath ekler.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function imageLoader({ src }) {
  if (/^(https?:)?\/\//.test(src) || src.startsWith("data:")) return src;
  if (basePath && src.startsWith("/") && !src.startsWith(basePath + "/")) {
    return basePath + src;
  }
  return src;
}
