import React from "react";
import styled from "styled-components";

// Theme
import { fonts, colors } from "../styles/theme";

const TextLink = props => {
  const { children, onPress, marginTop } = props;

  return (
    <Btn {...props}>
      <Text>{children}</Text>
    </Btn>
  );
};

export default TextLink;

const Btn = styled.TouchableOpacity`
  margin-top: ${props => (props.marginTop ? props.marginTop : 0)}px;
`;

const Text = styled.Text`
  font-family: ${fonts.regular};
  font-size: 15px;
  color: ${colors.mediumGrey};
  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-color: ${colors.mediumGrey};
`;
