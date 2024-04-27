import { Address } from "viem";
import { ZeroAddress } from "lib/evm/constants";

export const getIsNullAddress = (address: Address) => address === ZeroAddress;
