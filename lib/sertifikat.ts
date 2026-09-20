import fs from "node:fs";
import path from "node:path";

export type Sertifikat = { name: string; link: string };

export function getSertifikat(): Sertifikat[] {
  const dir = path.join(process.cwd(), "public", "image");

  return fs
    .readdirSync(dir)
    .filter((file) => /\.(png|jpe?g|webp|avif)$/i.test(file))
    .sort((a, b) => a.localeCompare(b))
    .map((file) => ({
      name: path.parse(file).name.trim(),
      link: `/image/${encodeURIComponent(file)}`,
    }));
}