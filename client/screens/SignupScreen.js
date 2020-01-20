import React, { useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView
} from "react-native";
import styled from "styled-components";

import { colors, paddings, fonts } from "../styles/theme";

// Components import
import { Container, Input, Button, Title, ErrorText } from "../components";

const VALID_EMAIL = "jean-jean@gmail.com";
const VALID_PASSWORD = "password123";

const SignupScreen = ({ navigation }) => {
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
        navigation.navigate("HomeStack");
      }
    }, 1000);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, justifyContent: "center" }}
      behavior="padding"
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Container center login safeArea>
          <Title h1 marginBottom={30}>
            Create an Account
          </Title>
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
          <ErrorText>{}</ErrorText>
          <Button
            loading={loading}
            marginVertical={30}
            onPress={() => handleSignup()}
          >
            Signup
          </Button>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;

// Styles
