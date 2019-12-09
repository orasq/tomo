import React from "react";
import styled from "styled-components";

// Theme
import { paddings } from "../styles/theme";

// Components import
import { HomeHeader } from "../components";

const PlansScreen = props => {
  const { navigation } = props;

  return (
    <Container>
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

const Container = styled.View`
  flex: 1;
  padding: ${paddings.main}px;
  padding-top: ${paddings.safeAreaTop}px;
`;

const Text = styled.Text``;
