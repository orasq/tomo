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
  UserProfilePlan
} from "../components";

// Theme
import { colors, fonts } from "../styles/theme";

const UserProfilScreen = props => {
  const { navigation } = props;

  const user = navigation.getParam("userInfo");

  return (
    <Container>
      <ContentWrap>
        <ProfileImage images={user.photo} navigation={navigation} />
        <BigInterestTag number={user.age} />
        <TopInfoWrap>
          <NameWrap>
            <Name>{user.name}</Name>
            <Age> - {user.age}</Age>
          </NameWrap>
          <PositionWrap>
            <Entypo name="location-pin" size={20} color={colors.mediumGrey} />
            <Position>13 km</Position>
          </PositionWrap>
        </TopInfoWrap>
        <MainTags>
          <Tag type="temp">Leaving in 4 days</Tag>
          <Tag type="home">Brussels, Belgium</Tag>
          <Tag type="job">Graphiste</Tag>
          <Tag type="character">Introvert</Tag>
          <Tag type="language">French</Tag>
          <Tag type="language">English</Tag>
          <Tag type="smoke">Never</Tag>
        </MainTags>
        <Description>
          Lorem ipsum dolor sit amet 😎 consectetur, adipisicing elit. Quidem
          corporis minus, rerum impedit esse sit similique officiis recusandae!
          Magnam quis necessitatibus labore? 🙌
        </Description>
        <Divider />
        <Title colorText="darkGrey" center h2>
          Plans
        </Title>
        <Title colorText="mediumGrey" center h4>
          {user.name} is looking for friends to ...
        </Title>
        <PlansWrap>
          <UserProfilePlan image={user.photo}>Have a drink</UserProfilePlan>
          <UserProfilePlan common image={user.photo}>
            Discover the city
          </UserProfilePlan>
          <UserProfilePlan image={user.photo}>
            Go to a concert: Denzel Curry (20/12/2019)
          </UserProfilePlan>
          <UserProfilePlan image={user.photo}>Learn Japanese</UserProfilePlan>
        </PlansWrap>
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
      </ContentWrap>
    </Container>
  );
};

export default UserProfilScreen;

UserProfilScreen.navigationOptions = {
  header: null
};

// Styles

const ContentWrap = styled.View`
  flex: 1;
`;

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

const MainTags = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 25px;
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

const PlansWrap = styled.View`
  margin-top: 20px;
`;

const TagsWrap = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 10px;
`;
