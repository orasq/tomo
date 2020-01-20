import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Entypo, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

// Components import
import {
  Container,
  BigInterestTag,
  ProfileImage,
  Tag,
  Divider,
  Title,
  ProfileMainInfos,
  ProfilePlans
} from "../components";

// Theme
import { colors, fonts } from "../styles/theme";

const UsersProfileScreen = props => {
  const { navigation } = props;

  const user = navigation.getParam("userInfo");

  return (
    <Container safeArea>
      <ProfileImage images={user.photo} navigation={navigation} />
      <BigInterestTag number={user.age} />
      <ProfileMainInfos user={user} />
      <Divider />
      <ProfilePlans user={user} />
      <Divider />
      <Title colorText="darkGrey" center h2>
        Interests
      </Title>
      <Title colorText="mediumGrey" center h4>
        Lorem ipsum dolor sit amet
      </Title>
      {/* Music */}
      <Title colorText="darkGrey" marginTop={20} marginBottom={20} center h3>
        <MaterialCommunityIcons name="music" size={20} /> Music
      </Title>
      <TagsWrap>
        <Tag>Arctic Monkeys</Tag>
        <Tag>Eminem</Tag>
        <Tag common>DJ Furax</Tag>
        <Tag>Four Tet</Tag>
        <Tag>Kojak Klack</Tag>
        <Tag common>System of a Down</Tag>
        <Tag common>Sam Smith</Tag>
        <Tag>King Gizzard and the Lizard Wizard</Tag>
        <Tag>Taylor Swift</Tag>
        <Tag>MF DOOM</Tag>
        <Tag>Camille Poteau</Tag>
        <Tag common>Jeanne D'Arc</Tag>
        <Tag>Petrocious</Tag>
        <Tag common>Koba Lad</Tag>
        <Tag>Union</Tag>
        <Tag>Muse</Tag>
        <Tag>Celophane</Tag>
        <Tag>Ptit Biscuit</Tag>
        <Tag common>Clark</Tag>
        <Tag>Aphex Twin</Tag>
      </TagsWrap>
      <Divider />
      {/* Sports */}
      <Title colorText="darkGrey" marginBottom={20} center h3>
        <Ionicons name="ios-football" size={20} /> Sports
      </Title>
      <TagsWrap>
        <Tag>Football</Tag>
        <Tag>Running</Tag>
        <Tag common>Bodybuilding</Tag>
        <Tag>Fc Barcelona</Tag>
      </TagsWrap>
      <Divider />
      {/* Books */}
      <Title colorText="darkGrey" marginBottom={20} center h3>
        <Entypo name="book" size={20} /> Literature
      </Title>
      <TagsWrap>
        <Tag>Le moniteur automobile</Tag>
        <Tag>L'etranger</Tag>
        <Tag common>Harry Potter et la Croupe de Feu</Tag>
        <Tag>Allez les Bleus !</Tag>
      </TagsWrap>
    </Container>
  );
};

export default UsersProfileScreen;

UsersProfileScreen.navigationOptions = {
  header: null
};

// Styles

const TagsWrap = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 10px;
`;
