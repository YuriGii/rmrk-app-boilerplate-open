import { useEnsName as useEnsNameWagmi } from "wagmi";
import { mainnet } from "viem/chains";
import { Address } from "viem";

type Props = {
  address: Address;
  enabled?: boolean;
};

export const useEnsName = ({ address, enabled = true }: Props) => {
  const chainId = mainnet.id;
  const isEnabled = enabled && !!address && !!chainId;

  const { data: accountName, refetch } = useEnsNameWagmi({
    address,
    chainId,
    query: { enabled: isEnabled },
  });

  return {
    accountName,
    refetch,
  };
};
