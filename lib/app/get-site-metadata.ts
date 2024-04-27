import type { Metadata } from "next";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

export const getSiteMetadata = (props?: {
  title?: string;
  ogImages?: OpenGraph["images"];
}) => {
  const { title, ogImages } = props || {};
  const rootSiteMetadata: Metadata = {
    title: title || "RMRK boilerplate",
    description: "Launch your own RMRK NFT 2.0 app",
    openGraph: {
      siteName: "RMRK boilerplate",
      title: title || "RMRK boilerplate",
      description: "Launch your own RMRK NFT 2.0 app",
      images: ogImages,
    },
    twitter: {
      description: "Launch your own RMRK NFT 2.0 app",
      card: "summary_large_image",
      site: "@RmrkApp",
      images: ogImages,
    },
  };

  return rootSiteMetadata;
};
