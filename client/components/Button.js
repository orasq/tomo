import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components";

// Theme
import { fonts, colors } from "../styles/theme";

const Button = props => {
  const {
    children,
    bgColor,
    textColor,
    marginVertical,
    ghost,
    onPress,
    loading
  } = props;

  return (
    <Btn {...props}>
      {loading ? (
        <ActivityIndicator
          size="small"
          color={textColor ? textColor : "white"}
        />
      ) : (
        <Text textColor={textColor}>{children}</Text>
      )}
    </Btn>
  );
};

export default Button;

const Btn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55px;
  ${props => props.marginVertical && `margin: ${props.marginVertical}px 0`};
  border-radius: 28px;
  background-color: ${props =>
    props.bgColor ? props.bgColor : colors.primary};

  /* Ghost Button */
  ${props => props.ghost && `border: 1px ${props.textColor};`}
`;

const Text = styled.Text`
  font-family: ${fonts.bold};
  font-size: 14px;
  color: ${props => (props.textColor ? props.textColor : "white")};
  text-transform: uppercase;
`;
