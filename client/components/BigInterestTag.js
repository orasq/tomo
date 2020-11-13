import React from "react";
import { Platform } from "react-native";
import styled from "styled-components";

// Components import
import { VennIcon } from "./Icons";

// Theme
import { colors, fonts } from "../styles/theme";

const BigInterestTag = (props) => {
  const { number } = props;

  return (
    <Container>
      <Tag>
        <VennIcon />
        <Text>You share {number} common points</Text>
      </Tag>
    </Container>
  );
};

export default BigInterestTag;

// Styles

const Container = styled.View`
  justify-content: center;
  align-items: center;
  width: auto;
  margin-top: -15px;
`;

const Tag = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 30px;
  padding: 0 15px;
  background-color: ${colors.primary};
  border-radius: 15px;
`;

const Text = styled.Text`
  margin-top: ${Platform.OS === "android" ? -2 : 0}px;
  margin-left: 7px;
  font-family: ${fonts.bold};
  font-size: 16px;
  line-height: 30;
  color: white;
`;
