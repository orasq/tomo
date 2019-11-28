import React from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

console.log(LinearGradient);

// Theme
import { paddings, fonts, sizes } from "../styles/theme";

// Components import
import InterestTag from "./InterestTag";
import UserStatusTag from "./UserStatusTag";

const { width, height } = Dimensions.get("window");

const cardWidth = (width - paddings.main * 3) / 2;
const cardHeight = cardWidth * 1.5;

const UserCard = props => {
  const { first, order, name, interests, profileImage, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Container first={first}>
        <Image source={{ uri: profileImage }}>
          <InterestTag number={interests} />
          <UserInfo>
            <Name>{name}</Name>
            <Tags>
              <UserStatusTag text="Leaving in 4 days" />
            </Tags>
          </UserInfo>
        </Image>
        <LinearGradient
          colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.7)"]}
          start={[0, 0]}
          end={[0, 1]}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 65
          }}
        />
      </Container>
    </TouchableOpacity>
  );
};

export default UserCard;

// Styles

const Container = styled.View`
  width: ${cardWidth}px;
  height: ${cardHeight}px;
  /* ${props => props.first && `height: ${cardWidth}px`}; */
  margin-bottom: ${paddings.main};
  border-radius: ${sizes.mainRadius}px;
  overflow: hidden;
`;

const Image = styled.ImageBackground`
  flex: 1;
`;

const UserInfo = styled.View`
  position: absolute;
  bottom: 10px;
  left: 15px;
  flex-direction: column;
  z-index: 2;
`;

const Name = styled.Text`
  font-size: 20px;
  font-family: ${fonts.semibold};
  color: white;
`;

const Tags = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 4px;
`;
