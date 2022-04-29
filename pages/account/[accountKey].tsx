import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Navigation from "../../components/Navigation";
import styled from "styled-components";
import Address from "../../components/sections/Address";
import { Container } from "@mui/material";
import Coins from "../../components/sections/Coins";
import Transactions from "../../components/sections/Transactions";
import NoResults from "../../components/NoResults";
import axios from "axios";
import { useRouter } from "next/router";
import { validateAccount } from "../../utils/urls";

const PageStyles = styled.div`
  width: 100%;
  height: 100%;
`;

const Header = styled.h2``;

const Account: NextPage = () => {
  const router = useRouter();
  const { accountKey } = router.query;
  const [error, setError] = useState(false);

  const isAccountValid = async () => {
    try {
      const account = accountKey as string;
      await axios.get(validateAccount(account));
      setError(false);
    } catch (e) {
      setError(true);
    }
  };

  useEffect(() => {
    if (accountKey) isAccountValid();
  }, [accountKey]);

  return (
    <PageStyles>
      <Navigation />
      <Container maxWidth="xl">
        {error && <NoResults />}
        {!error && (
          <>
            <Header>Account Detail</Header>
            <Address />
            <Coins />
            <Transactions />
          </>
        )}
      </Container>
    </PageStyles>
  );
};

export default Account;
