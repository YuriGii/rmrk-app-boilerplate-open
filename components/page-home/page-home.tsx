import React from "react";
import { VStack, Flex, Box } from "@chakra-ui/react";
import { Page } from "components/app/page";
import { base } from "wagmi/chains";
import { EVM_RMRK_CONTRACTS } from "lib/evm/constants";
import { NftRenderer } from "components/common/nft-renderer";

export const PageHome = () => (
  <Page data-name="page-home">
    <VStack align={"center"} justify={"center"} w={"100%"} h={"100vh"}>
      <Box w={"500px"} h={"500px"}>
        <NftRenderer
          chainId={base.id}
          contractAddress={EVM_RMRK_CONTRACTS.base.me}
          tokenId={BigInt(51)}
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
