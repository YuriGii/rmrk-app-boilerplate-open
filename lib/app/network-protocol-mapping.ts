import { base } from "wagmi/chains";

export enum EVM_NETWORK_KEYS {
  base = "base",
}

export const EVM_NETWORKS = {
  [EVM_NETWORK_KEYS.base]: base.name,
} as const;

export type EVM_NETWORKS = (typeof EVM_NETWORKS)[keyof typeof EVM_NETWORKS];
