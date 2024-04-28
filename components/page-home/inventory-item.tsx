import React from "react";
import {
  Box,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/react";
import { EVM_NETWORK_KEYS } from "lib/app/network-protocol-mapping";
import { Address } from "viem";
import { useRmrkEquippableTokenURI } from "lib/evm/hooks/rmrk-equippable";
import { useFetchIpfsMetadata } from "@rmrk-team/rmrk-hooks";

type Props = {
  network: EVM_NETWORK_KEYS;
  collectionId: Address;
  tokenId: bigint;
};

export const InventoryItem = ({ network, collectionId, tokenId }: Props) => {
  const { tokenURI } = useRmrkEquippableTokenURI({
    network,
    collectionId,
    tokenId,
  });

  const { data: metadata } = useFetchIpfsMetadata({ metadataUri: tokenURI });

  return (
    <Card data-name="inventory-item" maxW={"100%"} backgroundColor={"gray.800"}>
      <CardBody>
        <Image
          backgroundColor={"gray.800"}
          src={metadata?.thumbnailUri}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{metadata?.name}</Heading>
          <Text>{metadata?.description}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};
