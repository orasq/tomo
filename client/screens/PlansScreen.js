import React from "react";
import styled from "styled-components";

// Theme
import { paddings } from "../styles/theme";

// Components import
import { HomeHeader, Container } from "../components";

const PlansScreen = props => {
  const { navigation } = props;

  return (
    <Container home>
      <HomeHeader active="plans" navigation={navigation} />
      <Text>Plans screen</Text>
    </Container>
  );
};

export default PlansScreen;

PlansScreen.navigationOptions = {
  header: null
};

// Styles

const Text = styled.Text`
  background-color: yellow;
`;
