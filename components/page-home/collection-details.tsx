"use client";
import React from "react";
import {
  Box,
  Heading,
  Card,
  CardHeader,
  CardBody,
  Stack,
  Text,
  StackDivider,
} from "@chakra-ui/react";
import { EVM_NETWORK_KEYS } from "lib/app/network-protocol-mapping";
import { Address } from "viem";
import {
  useRmrkEquippableMaxSupply,
  useRmrkEquippableName,
  useRmrkEquippableTotalSupply,
} from "lib/evm/hooks/rmrk-equippable";

type Props = {
  network: EVM_NETWORK_KEYS;
  collectionId: Address;
};

export const CollectionDetails = ({ network, collectionId }: Props) => {
  const { maxSupply } = useRmrkEquippableMaxSupply({ collectionId, network });
  const { totalSupply } = useRmrkEquippableTotalSupply({
    collectionId,
    network,
  });
  const { name } = useRmrkEquippableName({
    collectionId,
    network,
  });

  return (
    <Card data-name="collection-details">
      <CardHeader>
        <Heading size="md">Collection Details</Heading>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Name
            </Heading>
            <Text pt="2" fontSize="sm">
              {name}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              ID
            </Heading>
            <Text pt="2" fontSize="sm">
              {network}-{collectionId}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Max Supply
            </Heading>
            <Text pt="2" fontSize="sm">
              {Number(maxSupply)}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Total Supply
            </Heading>
            <Text pt="2" fontSize="sm">
              {Number(totalSupply)}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};
