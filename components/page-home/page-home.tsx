import React from "react";
import { VStack, Flex, Box } from "@chakra-ui/react";
import { Page } from "components/app/page";
import { EVM_RMRK_CONTRACTS } from "lib/evm/constants";
import { NftRenderer } from "components/common/nft-renderer";
import { EVM_NETWORK_KEYS } from "lib/app/network-protocol-mapping";
import { getActiveChainFromNetworkKey } from "lib/evm/utils";

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
    </VStack>
  </Page>
);
