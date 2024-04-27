import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  coinbaseWallet,
  metaMaskWallet,
  talismanWallet,
  rainbowWallet,
  subWallet,
} from "@rainbow-me/rainbowkit/wallets";

const appName = "RMRK boilerplate";
const projectId = "rmrk-boilerplate";

export const connectors = connectorsForWallets(
  [
    {
      groupName: "RMRK boilerplate",
      wallets: [
        rainbowWallet,
        metaMaskWallet,
        coinbaseWallet,
        talismanWallet,
        subWallet,
      ],
    },
  ],
  {
    appName,
    projectId,
  }
);
