import React from "react";
import { VStack, Flex, Box, HStack } from "@chakra-ui/react";
import { Page } from "components/app/page";
import { EVM_RMRK_CONTRACTS } from "lib/evm/constants";
import { NftRenderer } from "components/common/nft-renderer";
import { EVM_NETWORK_KEYS } from "lib/app/network-protocol-mapping";
import { getActiveChainFromNetworkKey } from "lib/evm/utils";
import { CollectionDetails } from "components/page-home/collection-details";
import { NftDetails } from "components/page-home/nft-details";

const MockLoadData = {
  network: EVM_NETWORK_KEYS.base,
  collectionId: EVM_RMRK_CONTRACTS.base.me,
  tokenId: BigInt(51),
};

export const PageHome = () => (
  <Page data-name="page-home">
    <VStack align={"center"} justify={"center"} w={"100%"} h={"100vh"}>
      <Box w={"500px"} h={"500px"}>
        <NftRenderer
          chainId={getActiveChainFromNetworkKey(MockLoadData.network).id}
          contractAddress={MockLoadData.collectionId}
          tokenId={MockLoadData.tokenId}
          loader={
            <Flex align={"center"} justify={"center"}>
              Loading...
            </Flex>
          }
        />
      </Box>
      <HStack gap={10}>
        <CollectionDetails
          network={MockLoadData.network}
          collectionId={MockLoadData.collectionId}
        />
        <NftDetails
          network={MockLoadData.network}
          collectionId={MockLoadData.collectionId}
          tokenId={MockLoadData.tokenId}
        />
      </HStack>
    </VStack>
  </Page>
);
