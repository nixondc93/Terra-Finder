import type { NextPage } from "next";
import styled from "styled-components";
import SearchBar from "../components/SeachBar";

const PageStyles = styled.div`
  background: #0c3694;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SearchBarWrapper = styled.div`
  width: 608px;
`;

const Header = styled.h2`
  color: white;
`;

const Home: NextPage = () => {
  return (
    <PageStyles>
      <div>
        <Header>Terra Finder</Header>
      </div>
      <SearchBarWrapper>
        <SearchBar />
      </SearchBarWrapper>
    </PageStyles>
  );
};

export default Home;
