"use client";
import React from "react";
import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { EVM_NETWORK_KEYS } from "lib/app/network-protocol-mapping";
import { Address } from "viem";
import { useRmrkEquippableChildrenOf } from "lib/evm/hooks/rmrk-equippable";
import { InventoryItem } from "components/page-home/inventory-item";

type Props = {
  network: EVM_NETWORK_KEYS;
  collectionId: Address;
  tokenId: bigint;
};

export const Inventory = ({ network, collectionId, tokenId }: Props) => {
  const { childrenOf } = useRmrkEquippableChildrenOf({
    network,
    collectionId,
    tokenId,
  });

  return childrenOf ? (
    <Flex
      data-name="inventory"
      flexDirection={"column"}
      gap={4}
      p={4}
      backgroundColor={"gray.700"}
      borderRadius={"md"}
    >
      <Heading size={"md"}>Inventory</Heading>
      <SimpleGrid gap={6} columns={[1, 2, 3]}>
        {childrenOf?.map((item) => (
          <InventoryItem
            key={item.tokenId.toString()}
            collectionId={item.contractAddress}
            tokenId={item.tokenId}
            network={network}
          />
        ))}
      </SimpleGrid>
    </Flex>
  ) : null;
};
