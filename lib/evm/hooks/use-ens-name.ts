import { useEnsName as useEnsNameWagmi } from "wagmi";
import { mainnet } from "viem/chains";
import { Address } from "viem";

type Props = {
  address: Address;
  enabled?: boolean;
};

export const useEnsName = ({ address, enabled }: Props) => {
  const chainId = mainnet.id;

  const { data: accountName, refetch } = useEnsNameWagmi({
    address,
    chainId,
    query: {
      enabled: enabled && !!address,
    },
  });

  return {
    accountName,
    refetch,
  };
};
