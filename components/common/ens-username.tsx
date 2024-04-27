import React from "react";
import { useAccountName } from "lib/evm/hooks";
import { Box, BoxProps } from "@chakra-ui/react";
import { shortenAccountId } from "lib/app/utils";
import { getIsNullAddress } from "lib/evm/utils";
import { Address } from "viem";

type Props = BoxProps & {
  address: Address;
  shorten?: boolean;
};

export const EnsUsername = ({ address, shorten, ...restProps }: Props) => {
  const { accountName } = useAccountName({ address });
  const username =
    accountName || (getIsNullAddress(address) ? "NullAddress" : address);

  const parsedUsername =
    shorten && !accountName ? shortenAccountId(username, true) : username;

  return (
    <Box data-name="ens-username" {...restProps}>
      {parsedUsername}
    </Box>
  );
};
