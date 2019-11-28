import React, { useState } from "react";
import { TouchableOpacity, Keyboard, KeyboardAvoidingView } from "react-native";
import styled from "styled-components";

// Theme
import { colors, paddings, fonts } from "../styles/theme";

// Components import
import { Input, Button } from "../components";

// Variables
const VALID_EMAIL = "jean-jean@gmail.com";
const VALID_PASSWORD = "password123";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState(VALID_EMAIL);
  const [password, setPassword] = useState(VALID_PASSWORD);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
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
        navigation.navigate("HomeFlow");
      }
    }, 1000);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, justifyContent: "center" }}
      behavior="padding"
    >
      <Container>
        <H1>Login</H1>
        <Input
          label="E-mail Address"
          placeholder="ex: Jean-Jean@gmail.com"
          marginVertical={15}
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <Input
          secure
          label="Password"
          placeholder="Fill in your password"
          marginVertical={15}
          onChangeText={text => setPassword(text)}
          value={password}
        />
        <Error>
          {errors.length ? "Your email address or password is incorrect" : null}
        </Error>
        <Button
          loading={loading}
          text="Login"
          bgColor={colors.primary}
          textColor="white"
          marginVertical={30}
          onPress={() => handleLogin()}
        />
        <TouchableOpacity>
          <FooterText>Forgot your password ?</FooterText>
        </TouchableOpacity>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default Login;

// Styles

const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: ${paddings.login}px;
  padding-top: ${paddings.safeAreaTop}px;
`;

const H1 = styled.Text`
  padding-bottom: 30px;
  font-family: ${fonts.bold};
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
