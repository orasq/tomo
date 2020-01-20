import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";

// Theme
import { colors, paddings, fonts } from "../styles/theme";

// Components import
import { Container, Button, TextLink } from "../components";

const LandingScreen = ({ navigation }) => {
  return (
    <Container center login safeArea>
      <Logo>tomo</Logo>
      <Text>Lorem Ipsum Dolor</Text>
      <Slider></Slider>
      <Button
        textColor="white"
        marginVertical={10}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        Login
      </Button>
      <Button
        ghost
        bgColor="white"
        textColor={colors.mediumGrey}
        marginVertical={10}
        onPress={() => navigation.navigate("SignupScreen")}
      >
        Create an account
      </Button>
      <TextLink marginTop={20} onPress={() => {}}>
        Terms and conditions
      </TextLink>
    </Container>
  );
};

export default LandingScreen;

//Navigation options

LandingScreen.navigationOptions = {
  header: null
};

// Styles

const Logo = styled.Text`
  font-family: ${fonts.black};
  margin-top: 40px;
  font-size: 25px;
  color: ${colors.primary};
`;

const Text = styled.Text`
  margin-top: 15px;
  font-size: 16px;
  color: ${colors.mediumGrey};
`;

const Slider = styled.View`
  width: 100%;
  height: 400px;
  margin: 20px;
  background-color: ${colors.lightGrey};
`;
