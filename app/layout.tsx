import "@rainbow-me/rainbowkit/styles.css";
import "@rmrk-team/rmrk-2d-renderer/dist/styles.css";
import "@rmrk-team/nft-renderer/dist/styles.css";
import type { Viewport } from "next";
import React, { ReactNode } from "react";
import { Providers } from "components/app/providers";
import { getSiteMetadata } from "lib/app/get-site-metadata";

export const metadata = getSiteMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1,
};

export type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
