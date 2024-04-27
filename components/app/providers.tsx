"use client";
import React, { ReactNode } from "react";
import { darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { wagmiConfig } from "lib/configs/wagmi/config";
import { theme } from "lib/configs/chakra-ui/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RMRKContextProvider } from "@rmrk-team/rmrk-hooks";

const queryClient = new QueryClient();

export const Providers = ({ children }: { children: ReactNode }) => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={wagmiConfig}>
        <RainbowKitProvider theme={darkTheme()}>
          <RMRKContextProvider
            config={{
              utilityContracts: {},
            }}
          >
            <Flex minH={"100vh"} direction={"column"}>
              {children}
            </Flex>
          </RMRKContextProvider>
        </RainbowKitProvider>
      </WagmiProvider>
    </QueryClientProvider>
  </ChakraProvider>
);
