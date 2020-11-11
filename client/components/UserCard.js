import React from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

// Theme
import { paddings, fonts, sizes } from "../styles/theme";

// Components import
import UserCardInterestTag from "./UserCardInterestTag";
import UserCardStatusTag from "./UserCardStatusTag";

// Misc. variables
const { width } = Dimensions.get("window");
const cardWidth = (width - paddings.main * 3) / 2;
const cardHeight = cardWidth * 1.5;

const UserCard = props => {
  const { first, order, name, interests, profileImage, geoStatus, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Container first={first}>
        <Image source={{ uri: profileImage }}>
          <LinearGradient
            colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.7)"]}
            start={[0, 0]}
            end={[0, 1]}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: cardWidth,
              height: 70
            }}
          />
          <UserCardInterestTag number={interests} />
          <UserInfo>
            <Name>{name}</Name>
            {geoStatus ? <Tags>
              <UserCardStatusTag text={geoStatus} />
            </Tags> : null}
          </UserInfo>
        </Image>
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
  justify-content: space-between; /* put InterestTag at the top, and UserInfo at the bottom */
  padding: 15px;
`;

const UserInfo = styled.View`
  flex-direction: column;
  width: 100%;
  z-index: 2;
`;

const Name = styled.Text`
  font-size: 20px;
  font-family: ${fonts.semibold};
  color: white;
`;

const Tags = styled.View`
  align-self: flex-start; /* width of element depends on its content */
  margin-top: 4px;
`;
