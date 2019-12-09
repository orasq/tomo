import React from "react";
import styled from "styled-components";

// Theme
import { fonts, colors } from "../styles/theme";

const textStyle = size => {
  switch (size) {
    case "h1":
      return `
      margin-bottom: 5px;
      font-family: ${fonts.bold};
      font-size: ${fonts.h1};
    `;
    case "h2":
      return `
      font-family: ${fonts.bold};
      font-size: ${fonts.h2};
    `;
    case "h3":
      return `
      font-family: ${fonts.bold};
      font-size: ${fonts.h3};
    `;
    case "h4":
      return `
      font-family: ${fonts.semibold};
      font-size: ${fonts.h4};
    `;
  }
};

const Title = props => {
  const { children } = props;

  return <Text {...props}>{children}</Text>;
};

export default Title;

const Text = styled.Text`
  ${props => props.h1 && textStyle("h1")};
  ${props => props.h2 && textStyle("h2")};
  ${props => props.h3 && textStyle("h3")};
  ${props => props.center && "text-align: center"};
  ${props => props.marginTop && `margin-top: ${props.marginTop}px;`};
  ${props => props.marginBottom && `margin-bottom: ${props.marginBottom}px;`};

  color: ${props => `${colors[props.colorText]}` || "red"};
`;
