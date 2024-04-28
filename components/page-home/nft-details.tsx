"use client";
import React from "react";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { EVM_NETWORK_KEYS } from "lib/app/network-protocol-mapping";
import { Address } from "viem";
import {
  useRmrkEquippableChildrenOf,
  useRmrkEquippableDirectOwnerOf,
} from "lib/evm/hooks/rmrk-equippable";
import { EnsUsername } from "components/common/ens-username";

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
  const { childrenOf } = useRmrkEquippableChildrenOf({
    network,
    collectionId,
    tokenId,
  });

  return (
    <Card data-name="nft-details">
      <CardHeader>
        <Heading size="md">NFT Details</Heading>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Token ID
            </Heading>
            <Text pt="2" fontSize="sm">
              {Number(tokenId)}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Owner
            </Heading>
            {directOwnerOf && (
              <Text pt="2" fontSize="sm">
                <EnsUsername address={directOwnerOf[0]} />
              </Text>
            )}
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              NFTs in inventory
            </Heading>
            <Text pt="2" fontSize="sm">
              {childrenOf?.length}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};
