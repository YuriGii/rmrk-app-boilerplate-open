import React from "react";
import { Image } from "@chakra-ui/react";
import makeBlockie from "ethereum-blockies-base64";
import { Address } from "viem";

type Props = {
  address: Address;
};

export const UserBlockie = ({ address }: Props) => (
  <Image
    src={makeBlockie(address)}
    width={6}
    height={6}
    data-name="user-blockie"
  />
);
