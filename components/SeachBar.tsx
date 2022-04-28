import styled from "styled-components";
import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";

const SearchInput = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.9);
  font-size: 16px;
  height: 40px;
  color: #fff;
  background: transparent;
  padding-left: 10px !important;
  padding-right: 45px !important;
  border-radius: 0;
  word-break: normal;
  ::placeholder {
    color: white;
  }
  :foucs {
    outline: none;
  }
`;

const SubmitButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 1px;
  height: 39px;
  outline: 0;
  cursor: pointer;
  margin: 0;
  background: transparent;
  border: none;
  span {
    color: white;
  }
`;

const Form = styled.form`
  position: relative;
`;

const SearchBar = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    router.push(`/account/${query}`);
  };

  const changeHandler = (event: FormEvent) => {
    const target = event.target as HTMLInputElement;
    setQuery(target.value);
  };

  return (
    <Form onSubmit={submitHandler}>
      <SearchInput
        placeholder="Search Block / Tx / Account"
        onChange={changeHandler}
      />
      <SubmitButton type="submit">
        <span className="material-icons-sharp">search</span>
      </SubmitButton>
    </Form>
  );
};

export default SearchBar;
