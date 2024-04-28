import React from "react";
import { Box, Flex, HStack, VStack } from "@chakra-ui/react";
import { Page } from "components/app/page";
import { EVM_RMRK_CONTRACTS } from "lib/evm/constants";
import { NftRenderer } from "components/common/nft-renderer";
import { EVM_NETWORK_KEYS } from "lib/app/network-protocol-mapping";
import { getActiveChainFromNetworkKey } from "lib/evm/utils";
import { CollectionDetails } from "components/page-home/collection-details";
import { NftDetails } from "components/page-home/nft-details";
import { Inventory } from "components/page-home/inventory";

const MockLoadData = {
  network: EVM_NETWORK_KEYS.base,
  collectionId: EVM_RMRK_CONTRACTS.base.me,
  tokenId: BigInt(51),
};

export const PageHome = () => (
  <Page data-name="page-home" py={20}>
    <VStack gap={10}>
      <Flex gap={10} direction={["column", "row"]}>
        <Box flexShrink={0} w={"800px"} h={"800px"}>
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
        <VStack gap={10}>
          <CollectionDetails
            network={MockLoadData.network}
            collectionId={MockLoadData.collectionId}
          />
          <NftDetails
            network={MockLoadData.network}
            collectionId={MockLoadData.collectionId}
            tokenId={MockLoadData.tokenId}
          />
        </VStack>
      </Flex>
      <Inventory
        network={MockLoadData.network}
        collectionId={MockLoadData.collectionId}
        tokenId={MockLoadData.tokenId}
      />
    </VStack>
  </Page>
);
