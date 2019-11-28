import React, { useState } from "react";
import { TouchableOpacity, Keyboard, KeyboardAvoidingView } from "react-native";
import styled from "styled-components";

import { colors, paddings, fonts } from "../styles/theme";

// Components import
import { Input, Button } from "../components";

const VALID_EMAIL = "jean-jean@gmail.com";
const VALID_PASSWORD = "password123";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const hasErrors = key => (errors.includes(key) ? true : false);

  const handleSignup = () => {
    const errors = [];

    setLoading(true);

    Keyboard.dismiss();
    // Server request simulation
    setTimeout(() => {
      if (email !== VALID_EMAIL) {
        errors.push("email");
      }

      if (password !== VALID_PASSWORD) {
        errors.push("password");
      }

      setErrors(errors);
      setLoading(false);

      if (!errors.length) {
        navigation.navigate("Users");
      }
    }, 1000);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, justifyContent: "center" }}
      behavior="padding"
    >
      <Container on>
        <H1>Create an Account</H1>
        <Input
          error={hasErrors("email")}
          label="E-mail Address"
          placeholder="ex: Jean-Jean@gmail.com"
          marginVertical={15}
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <Input
          error={hasErrors("password")}
          secure
          label="Password"
          placeholder="Min. 5 characters"
          marginVertical={15}
          onChangeText={text => setPassword(text)}
          value={password}
        />
        <Input
          error={hasErrors("password")}
          secure
          label="Confirm Password"
          placeholder="Min. 5 characters"
          marginVertical={15}
          onChangeText={text => setPasswordConfirm(text)}
          value={passwordConfirm}
        />
        <Error>{}</Error>
        <Button
          loading={loading}
          text="Signup"
          bgColor={colors.primary}
          textColor="white"
          marginVertical={30}
          onPress={() => handleSignup()}
        />
        <TouchableOpacity>
          <FooterText>Forgot your password ?</FooterText>
        </TouchableOpacity>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default Signup;

// Styles

const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: ${paddings.login}px;
  padding-top: ${paddings.safeAreaTop}px;
`;

const H1 = styled.Text`
  margin-bottom: 40px;
  font-size: ${fonts.h1}px;
  color: ${colors.darkGrey};
`;

const Error = styled.Text`
  font-size: 15px;
  color: red;
  font-weight: 300;
`;

const FooterText = styled.Text`
  font-size: 14px;
  color: ${colors.mediumGrey};
  text-decoration: underline;
`;
