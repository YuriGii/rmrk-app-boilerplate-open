import React from "react";
import { Container, ContainerProps as Props } from "@chakra-ui/react";

export const Page = ({ children, ...restProps }: Props) => (
  <Container
    data-name="page"
    flexGrow={1}
    display={"flex"}
    flexDirection={"column"}
    alignItems={"center"}
    maxW={"1200px"}
    {...restProps}
  >
    {children}
  </Container>
);
