import { Chain } from "viem";
import { base } from "wagmi/chains";
import { isProd } from "lib/app/constants";
import { EVM_NETWORK_KEYS } from "lib/app/network-protocol-mapping";

export const supportedChains: Record<EVM_NETWORK_KEYS, Chain> = {
  [EVM_NETWORK_KEYS.base]: base,
};

export const connectedChains: readonly [Chain, ...Chain[]] = isProd
  ? [supportedChains[EVM_NETWORK_KEYS.base]]
  : [supportedChains[EVM_NETWORK_KEYS.base]];
