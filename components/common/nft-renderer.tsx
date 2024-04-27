"use client";
import { ComponentProps } from "react";
import { NFTRenderer as NFTRendererExternal } from "@rmrk-team/nft-renderer";

type Props = ComponentProps<typeof NFTRendererExternal>;
export const NftRenderer = (props: Props) => <NFTRendererExternal {...props} />;
