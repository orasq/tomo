import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components";

// Theme
import { colors, fonts, sizes } from "../styles/theme";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");
const bubbleWidth = deviceWidth / 1.5;

const ChatBubble = props => {
  const { children, sender, recipient } = props;

  return (
    <Block contactBubble={sender !== "Olivier"}>
      <Text contactBubble={sender !== "Olivier"}>{children}</Text>
    </Block>
  );
};

export default ChatBubble;

const Block = styled.View`
  /* Align bubble on the right side + auto-size with content */
  flex-shrink: 1;
  align-self: flex-end;
  ${props => props.contactBubble && "align-self: flex-start"};
  max-width: ${bubbleWidth};
  margin-bottom: 10px;
  padding: 10px 15px;
  background-color: ${colors.whiteGrey};
  ${props => props.contactBubble && `background-color: ${colors.primary}`};
  border-radius: ${sizes.mediumRadius};
`;

const Text = styled.Text`
  font-family: ${fonts.regular};
  font-size: 16px;
  line-height: 20;
  color: ${colors.darkGrey};
  ${props => props.contactBubble && "color: white"};
`;
