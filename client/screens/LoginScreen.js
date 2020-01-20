import React, { useState } from "react";
import { TouchableOpacity, Keyboard, KeyboardAvoidingView } from "react-native";
import styled from "styled-components";

// Theme
import { colors, paddings, fonts } from "../styles/theme";

// Components import
import {
  Container,
  Input,
  Button,
  TextLink,
  Title,
  ErrorText
} from "../components";

// Variables
const VALID_EMAIL = "jean-jean@gmail.com";
const VALID_PASSWORD = "password123";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState(VALID_EMAIL);
  const [password, setPassword] = useState(VALID_PASSWORD);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    const errors = [];

    setLoading(true);

    // Slide out the keyboard
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
        navigation.navigate("UsersStack");
      }
    }, 1000);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, justifyContent: "center" }}
      behavior="padding"
    >
      <Container center login safeArea>
        <Title h1 marginBottom={30}>
          Login
        </Title>
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
        <ErrorText>
          {errors.length ? "Your email address or password is incorrect" : null}
        </ErrorText>
        <Button
          loading={loading}
          marginVertical={30}
          onPress={() => handleLogin()}
        >
          Login
        </Button>
        <TextLink onPress={() => {}}>Forgot your password ?</TextLink>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

// Styles
