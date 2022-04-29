import { useRouter } from "next/router";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NoResults = () => {
  const router = useRouter();
  const { accountKey } = router.query;
  return (
    <Wrapper>
      <h1>Search not found</h1>
      <p>
        Sorry, we couldn&apos;t find any results for {accountKey} Please input
        the correct account address.
      </p>
    </Wrapper>
  );
};

export default NoResults;
