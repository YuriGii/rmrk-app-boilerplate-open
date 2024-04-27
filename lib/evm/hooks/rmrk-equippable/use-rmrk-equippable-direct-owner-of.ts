import { useReadContract } from "wagmi";
import { Address } from "viem";
import { RMRKEquippable } from "lib/evm/abi";
import { EVM_NETWORK_KEYS } from "lib/app/network-protocol-mapping";
import { getActiveChainFromNetworkKey } from "lib/evm/utils";

type Props = {
  collectionId: Address | undefined;
  tokenId: bigint | undefined;
  network: EVM_NETWORK_KEYS | undefined;
  enabled?: boolean;
};

export const useRmrkEquippableDirectOwnerOf = ({
  collectionId,
  tokenId,
  network,
  enabled = true,
}: Props) => {
  const { id: chainId } = getActiveChainFromNetworkKey(network);
  const isEnabled =
    !!enabled && !!collectionId && !!network && !!tokenId && !!chainId;

  const {
    data: directOwnerOf,
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
    functionName: "directOwnerOf",
    query: {
      enabled: isEnabled,
    },
  });

  return {
    isLoading: isLoading && isEnabled,
    isSuccess,
    isError,
    error,
    directOwnerOf,
    refetch,
  };
};
