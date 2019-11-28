import React from "react";
import { Platform } from "react-native";
import styled from "styled-components";

// Theme
import { fonts } from "../styles/theme";

const UserStatusTag = props => {
  const { text, textColor, bgColor } = props;

  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
};

export default UserStatusTag;

const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 18px;
  padding: 0 10px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 9px;
`;

const Text = styled.Text`
  margin-top: ${Platform.OS === "android" ? -2 : 0}px;
  font-family: ${fonts.bold};
  font-size: 10px;
  color: white;
`;
