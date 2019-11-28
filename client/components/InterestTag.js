import React from "react";
import { Platform } from "react-native";
import styled from "styled-components";

// Theme
import { colors, fonts } from "../styles/theme";

// Composants import
import { VennIcon } from "../components/Icons";

const InterestTag = props => {
  const { number } = props;

  return (
    <Container>
      <VennIcon size="30" />
      <Text>{number}</Text>
    </Container>
  );
};

export default InterestTag;

const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 8px;
  right: 10px;
  width: auto;
  height: 25px;
  padding: 0 8px;
  background-color: ${colors.primary};
  border-radius: 13px;
`;

const Text = styled.Text`
  margin-top: ${Platform.OS === "android" ? -2 : 0}px;
  margin-left: 5px;
  font-family: "nunito-bold";
  font-size: 14px;
  color: white;
`;
