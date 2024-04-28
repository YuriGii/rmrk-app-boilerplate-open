import React from "react";
import { Box, Heading, VStack } from "@chakra-ui/react";
import { EVM_NETWORK_KEYS } from "lib/app/network-protocol-mapping";
import { Address } from "viem";

type Props = {
  network: EVM_NETWORK_KEYS;
  collectionId: Address;
};

export const CollectionDetails = ({ network, collectionId }: Props) => {
  return (
    <VStack data-name="collection-details">
      <Heading as={"h4"}>Collection Details</Heading>
      <Box>
        id: {network}-{collectionId}
      </Box>
    </VStack>
  );
};
