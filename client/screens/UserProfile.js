import React from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo, Ionicons } from "@expo/vector-icons";

// Components import
import { Container, BigInterestTag, ProfileImage } from "../components";

// Theme
import { colors, fonts } from "../styles/theme";

const UserProfil = props => {
  const { navigation } = props;

  const user = navigation.getParam("userInfo");

  return (
    <ScrollView>
      <Container>
        <ContentWrap>
          <ProfileImage images={user.photo} navigation={navigation} />
          <BigInterestTag />
          <NameWrap>
            <Name>{user.name}</Name>
            <PositionWrap>
              <Entypo name="location-pin" size={20} color={colors.mediumGrey} />
              <Position>13 km</Position>
            </PositionWrap>
          </NameWrap>
          <MainTags>
            <Tag>Brussels, Belgium</Tag>
            <Tag>Graphiste</Tag>
            <Tag>Introvert</Tag>
            <Tag>French</Tag>
            <Tag>English</Tag>
            <Tag>Never</Tag>
          </MainTags>
        </ContentWrap>
      </Container>
    </ScrollView>
  );
};

export default UserProfil;

UserProfil.navigationOptions = {
  header: null
};

// Styles

const ContentWrap = styled.View`
  flex: 1;
`;

const NameWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 25px;
  margin-bottom: 25px;
`;

const Name = styled.Text`
  font-family: ${fonts.bold};
  font-size: 25px;
  color: ${colors.darkGrey};
`;

const PositionWrap = styled.View`
  flex-direction: row;
`;

const Position = styled.Text`
  margin-left: 8px;
  font-family: ${fonts.semibold};
  font-size: 16px;
  color: ${colors.mediumGrey};
`;

const MainTags = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 100%;
  height: 100px;
`;

const Tag = styled.Text`
  height: 25px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 0 10px;
  border: 1px solid ${colors.mediumGrey};
  border-radius: 13px;
  font-family: ${fonts.semibold};
  font-size: 12px;
  line-height: 25;
  color: ${colors.darkGrey};
`;
