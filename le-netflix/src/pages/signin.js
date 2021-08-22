import React, { useContext, useState } from "react";
import { FirebaseContext } from "../context/firebase";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import * as ROUTES from "../constants/routes";
import { useHistory } from "react-router-dom";

export default function SignIn() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === "" || emailAddress === "";

  const handleSignin = (e) => {
    e.preventDefault();

    return firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((err) => {
        setEmailAddress("");
        setPassword("");
        setError(err.message);
      });
  };

  return (
    <>
      <HeaderContainer></HeaderContainer>
      <FooterContainer />
    </>
  );
}
