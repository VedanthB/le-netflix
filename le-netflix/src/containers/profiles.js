import React from "react";
import { Header, Profiles } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

export default function SelectProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        </Header.Frame>
      </Header>
    </>
  );
}
