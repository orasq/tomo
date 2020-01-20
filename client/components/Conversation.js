import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";

// Theme
import { colors, fonts, sizes } from "../styles/theme";

const Conversation = props => {
  const { userName, excerpt, avatar, unreadMessages, onPress } = props;

  const notificationBubbleRender = () => {
    if (unreadMessages > 0) {
      return <NotificationBubble>{unreadMessages}</NotificationBubble>;
    } else {
      return null;
    }
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Block>
        <Avatar source={{ uri: avatar }} />
        <TextWrap>
          <NameWrap>
            <Name>{userName}</Name>
            {notificationBubbleRender()}
          </NameWrap>
          <Excerpt numberOfLines={1}>{excerpt}</Excerpt>
        </TextWrap>
      </Block>
    </TouchableOpacity>
  );
};

export default Conversation;

const Block = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.whiteGrey};
`;

const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  background-color: ${colors.lightGrey};
  border-color: ${colors.whiteGrey};
  border-radius: ${sizes.mediumRadius};
`;

const TextWrap = styled.View`
  flex-shrink: 1;
  margin-left: 15px;
  padding-right: 10px;
`;

const NameWrap = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Name = styled.Text`
  font-family: ${fonts.bold};
  font-size: 18px;
  color: ${colors.darkGrey};
`;

const NotificationBubble = styled.Text`
  margin-left: 12px;
  padding: 1px 6px;
  background-color: ${colors.primary};
  border-radius: 10px;
  font-family: ${fonts.bold};
  font-size: 10px;
  color: white;
  overflow: hidden;
`;

const Excerpt = styled.Text`
  font-family: ${fonts.regular};
  font-size: 14px;
  color: ${colors.darkGrey};
`;
