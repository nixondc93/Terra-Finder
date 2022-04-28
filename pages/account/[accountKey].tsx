import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Navigation from "../../components/Navigation";
import styled from "styled-components";
import Address from "../../components/sections/Address";
import { Container } from "@mui/material";
import Coins from "../../components/sections/Coins";
import Transactions from "../../components/sections/Transactions";

const PageStyles = styled.div`
  width: 100%;
  height: 100%;
`;

const PageContent = styled.div``;

const Header = styled.h2``;

const SectionContainer = styled.div``;

const Account: NextPage = () => {
  const router = useRouter();

  useEffect(() => {}, []);

  return (
    <PageStyles>
      <Navigation />
      <Container maxWidth="lg">
        <Header>Account Detail</Header>
        <Address />
        <Coins />
        <Transactions />
      </Container>
    </PageStyles>
  );
};

export default Account;
