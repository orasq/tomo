import React from "react";
import styled from "styled-components";
import { Entypo } from "@expo/vector-icons";

// Components import
import Tag from "./Tag";
import EditButton from "./EditButton";

// Theme
import { colors, fonts } from "../styles/theme";
import { ScrollView } from "react-native-gesture-handler";

const ProfileMainInfos = props => {
  const { user, data, description, self } = props;

  return (
    <Wrapper>
      <TopInfoWrap>
        <NameWrap>
          <Name>{user.name}</Name>
          <Age> - {user.age}</Age>
        </NameWrap>
        {self ? (
          <EditButton />
        ) : (
          <PositionWrap>
            <Entypo name="location-pin" size={20} color={colors.mediumGrey} />
            <Position>13 km</Position>
          </PositionWrap>
        )}
      </TopInfoWrap>
      <ScrollView
        contentContainerStyle={{
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "flex-start",
          width: "100%",
          marginBottom: 25
        }}
      >
        {// convert 'object' to 'array', to be able to use map()
        Object.entries(data).map(item => {
          // [0] gives us the 'key' (ex: geoStatus, city, ...)
          let key = item[0];
          // [1] gives us the 'value' (ex: leaving in 4 days, Brussels, ...)
          let value = item[1];

          // if 'item' contains an array of values (ex: languages), create a <tag> of each
          if (Array.isArray(value)) {
            return value.map(el => {
              return (
                <Tag key={el} type={key}>
                  {el}
                </Tag>
              );
            });
          } else {
            return (
              <Tag key={item} type={key}>
                {value}
              </Tag>
            );
          }
        })}
      </ScrollView>
      <Description>{description.description}</Description>
    </Wrapper>
  );
};

export default ProfileMainInfos;

// Styles

const Wrapper = styled.View``;

const TopInfoWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  margin-top: 25px;
  margin-bottom: 25px;
`;

const NameWrap = styled.View`
  flex-direction: row;
`;

const Name = styled.Text`
  font-family: ${fonts.bold};
  font-size: 28px;
  color: ${colors.darkGrey};
`;

const Age = styled.Text`
  font-family: ${fonts.regular};
  font-size: 28px;
  color: ${colors.darkGrey};
`;

const PositionWrap = styled.View`
  flex-direction: row;
`;

const Position = styled.Text`
  margin-left: 8px;
  font-family: ${fonts.semibold};
  font-size: 18px;
  color: ${colors.mediumGrey};
`;

const Description = styled.Text`
  width: 100%;
  font-family: ${fonts.regular};
  font-size: 16px;
  line-height: 28;
  text-align: left;
  color: ${colors.darkGrey};
  font-weight: 300;
`;
