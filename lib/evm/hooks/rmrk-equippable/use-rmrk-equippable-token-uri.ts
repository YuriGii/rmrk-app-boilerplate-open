import { useReadContract } from "wagmi";
import { Address } from "viem";
import { RMRKEquippable } from "lib/evm/abi";
import { EVM_NETWORK_KEYS } from "lib/app/network-protocol-mapping";
import { getActiveChainFromNetworkKey } from "lib/evm/utils";

type Props = {
  collectionId: Address | undefined;
  network: EVM_NETWORK_KEYS | undefined;
  tokenId: bigint | undefined;
  enabled?: boolean;
};

export const useRmrkEquippableTokenURI = ({
  collectionId,
  network,
  tokenId,
  enabled = true,
}: Props) => {
  const { id: chainId } = getActiveChainFromNetworkKey(network);
  const isEnabled =
    !!enabled && !!collectionId && !!network && !!chainId && !!tokenId;

  const {
    data: tokenURI,
    isLoading,
    isError,
    isSuccess,
    error,
    refetch,
  } = useReadContract({
    chainId,
    address: collectionId,
    abi: RMRKEquippable,
    args: isEnabled ? [tokenId] : undefined,
    functionName: "tokenURI",
    query: {
      enabled: isEnabled,
    },
  });

  return {
    isLoading: isLoading && isEnabled,
    isSuccess,
    isError,
    error,
    tokenURI,
    refetch,
  };
};
