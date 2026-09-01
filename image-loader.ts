"use client";

import type { ImageLoaderProps } from "next/image";
import { withBasePath } from "@/lib/paths";

export default function imageLoader({ src }: ImageLoaderProps) {
  return withBasePath(src);
}
