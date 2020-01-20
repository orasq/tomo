import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components";
import { Entypo } from "@expo/vector-icons";

// Components import
import Tag from "./Tag";

// Theme
import { colors, fonts } from "../styles/theme";
import { ScrollView } from "react-native-gesture-handler";

const ProfileMainInfos = props => {
  const { user } = props;

  const fakeInfosTop = {
    name: user.name,
    age: user.age
  };

  const fakeInfosTags = {
    geoStatus: "Leaving in 4 days",
    city: "Brussels, Belgium",
    job: "Graphic Designer",
    character: "Introvert",
    languages: ["French", "Spanish"],
    smoke: ";)"
  };

  const fakeDescription = {
    description:
      "Lorem ipsum dolor sit amet 😎 consectetur, adipisicing elit. Quidem corporis minus, rerum impedit esse sit similique officiis recusandae! Magnam quis necessitatibus labore? 🙌"
  };

  return (
    <Wrapper>
      <TopInfoWrap>
        <NameWrap>
          <Name>{fakeInfosTop.name}</Name>
          <Age> - {fakeInfosTop.age}</Age>
        </NameWrap>
        <PositionWrap>
          <Entypo name="location-pin" size={20} color={colors.mediumGrey} />
          <Position>13 km</Position>
        </PositionWrap>
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
        Object.entries(fakeInfosTags).map(item => {
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
      <Description>{fakeDescription.description}</Description>
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
