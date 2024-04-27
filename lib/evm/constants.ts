import { EVM_NETWORK_KEYS } from "lib/app/network-protocol-mapping";
import { Address } from "viem";

export const ZeroAddress: Address =
  "0x0000000000000000000000000000000000000000";

export const NETWORK_CONTACTS_PROPS = {
  me: "me",
} as const;

export type NETWORK_CONTACTS_PROPS =
  (typeof NETWORK_CONTACTS_PROPS)[keyof typeof NETWORK_CONTACTS_PROPS];

type NETWORK_CONTRACT_SET = Record<NETWORK_CONTACTS_PROPS, Address>;

export const EVM_RMRK_CONTRACTS: Record<
  EVM_NETWORK_KEYS,
  NETWORK_CONTRACT_SET
> = {
  [EVM_NETWORK_KEYS.base]: {
    [NETWORK_CONTACTS_PROPS.me]: "0xb30b909c1fa58fd2b0f95eeea3fa0399b6f2382d",
  },
};
