import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";

// Theme
import { colors, paddings, fonts } from "../styles/theme";

// Components import
import Button from "../components/Button";

const LandingScreen = ({ navigation }) => {
  return (
    <Container>
      <Logo onPress={() => navigation.navigate("Signup")}>tomo</Logo>
      <Text>Lorem Ipsum Dolor</Text>
      <Slider onPress={() => navigation.navigate("Signup")}></Slider>
      <Button
        text="Login"
        bgColor={colors.primary}
        textColor="white"
        marginVertical={10}
        onPress={() => navigation.navigate("LoginScreen")}
      />
      <Button
        shadow
        text="Create an account"
        bgColor="white"
        textColor={colors.mediumGrey}
        marginVertical={10}
        onPress={() => navigation.navigate("SignupScreen")}
      />
      <TouchableOpacity>
        <FooterText>Terms and conditions</FooterText>
      </TouchableOpacity>
    </Container>
  );
};

export default LandingScreen;

//Navigation options

LandingScreen.navigationOptions = {
  header: null
};

// Styles

const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: ${paddings.login}px;
  padding-top: ${paddings.safeAreaTop}px;
`;

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

const FooterText = styled.Text`
  margin-top: 30px;
  font-size: 14px;
  color: ${colors.mediumGrey};
`;
