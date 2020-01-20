import React from "react";
import styled from "styled-components";

// Theme
import { fonts, colors } from "../styles/theme";

const ErrorText = props => {
  const { children } = props;

  return <Text>{children}</Text>;
};

export default ErrorText;

const Text = styled.Text`
  font-family: ${fonts.semibold};
  font-size: 15px;
  color: ${colors.error};
  font-weight: 300;
`;
