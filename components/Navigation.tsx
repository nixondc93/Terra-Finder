import Link from "next/link";
import SearchBar from "./SeachBar";
import styled from "styled-components";

const Nav = styled.nav`
    width: 100%;
    height 60px;
    display: inline-block;
    padding-top: 12px;
    background: #0c3694;
`;

const StyledLink = styled.a`
    color: white;
    font-size 24px;
    padding-left: 24px;
    padding-right: 48px;
    display: inline-block;
`;

const SearchBarWrapper = styled.div`
  width: 608px;
  display: inline-block;
  justify-self: center;
`;

const Navigation = () => (
  <Nav>
    <Link href="/" passHref>
      <StyledLink>Terra Finder</StyledLink>
    </Link>
    <SearchBarWrapper>
      <SearchBar />
    </SearchBarWrapper>
  </Nav>
);

export default Navigation;
