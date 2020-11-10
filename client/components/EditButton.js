import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { FontAwesome } from "@expo/vector-icons";

// Theme
import { colors, fonts } from "../styles/theme";

const EditButton = (props) => {
  const { positionTop } = props;

  return (
    <Wrapper positionTop={positionTop}>
      <FontAwesome name="pencil" color="white" size={13} />
      <Text>Edit</Text>
    </Wrapper>
  );
};

export default EditButton;

// Styles

const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  ${(props) => props.positionTop && `top: ${props.positionTop}px;`};
  right: 0;
  padding: 2px 10px;
  background-color: ${colors.primary};
  border-radius: 14px;
  z-index: 100;
`;

const Text = styled.Text`
  padding-left: 6px;
  font-family: ${fonts.regular};
  font-size: 14px;
  color: #ffffff;
`;
