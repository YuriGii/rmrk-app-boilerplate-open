"use client";
import React from "react";
import { Box, Heading, VStack } from "@chakra-ui/react";
import { EVM_NETWORK_KEYS } from "lib/app/network-protocol-mapping";
import { Address } from "viem";
import { useRmrkEquippableDirectOwnerOf } from "lib/evm/hooks/rmrk-equippable/use-rmrk-equippable-direct-owner-of";

type Props = {
  network: EVM_NETWORK_KEYS;
  collectionId: Address;
  tokenId: bigint;
};

export const NftDetails = ({ network, collectionId, tokenId }: Props) => {
  const { directOwnerOf } = useRmrkEquippableDirectOwnerOf({
    network,
    collectionId,
    tokenId,
  });

  return (
    <VStack data-name="nft-details">
      <Heading as={"h4"}>NFT Details</Heading>
      <Box>token id: {Number(tokenId)}</Box>
      <Box>owner: {directOwnerOf}</Box>
    </VStack>
  );
};
