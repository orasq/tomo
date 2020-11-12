import React, { useState } from "react";
import styled from "styled-components";

// Theme
import { paddings } from "../styles/theme";

// Constants
var userJSON = require("../constants/me.json");

// Components import
import {
  Container,
  Divider,
  Title,
  PreviewProfileButton,
  ProfileGalleryImage,
  ProfileMainInfos,
  ProfilePlans,
  ProfileInterests,
} from "../components";

const AccountProfilScreen = () => {
  // States
  const [userInfo, setUserInfo] = useState(userJSON.infos);
  const [userPictures, setUserPictures] = useState(userJSON.pictures);
  const [userPlans, setUserPlans] = useState(userJSON.plans);
  const [userInterests, setUserInterests] = useState(userJSON.interests);

  const processedPictures = () => {
    const newArray = userPictures;
    // Check how many blank images to add
    const numberOfImagesToAdd = 6 - userPictures.length;

    if (numberOfImagesToAdd != 0) {
      for (var i = 0; i < numberOfImagesToAdd; i++) {
        newArray.push({ id: newArray.length + 1 });
      }
    }
    return newArray;
  };

  return (
    <Container safeArea>
      {/* Generate gallery of images */}
      <ProfileGallery
        showsVerticalScrollIndicator={false}
        numColumns={3}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        data={processedPictures()}
        renderItem={({ item }) => <ProfileGalleryImage url={item.url} />}
        keyExtractor={(item) => item.id}
      />
      {/* Main user's info */}
      <ProfileMainInfos self data={userInfo} />
      <Divider />
      <ProfilePlans
        self
        image={null}
        name={userInfo.name}
        data={userPlans}
      />
      <Divider />
      {/* User's interests */}
      <Title colorText="darkGrey" center h2>
        Interests
      </Title>
      <Title colorText="mediumGrey" center h4>
        Lorem ipsum dolor sit amet
      </Title>
      {/* Generate interests categories + items */}
      {userInterests.map((item, index) => {
        return (
          <ProfileInterests
            self
            key={item.order}
            category={item.category}
            elements={item.elements}
            last={index === userInterests.length - 1 ? true : false}
          />
        );
      })}
    </Container>
  );
};

export default AccountProfilScreen;

// navigationOptions = function to be able to use navigation.getParam()
AccountProfilScreen.navigationOptions = ({ navigation }) => {
  // user infos for top-right profile page link
  const user = {
    name: "Olivier",
    age: 31,
    picture: "https://media.gerbeaud.net/2011/01/olivier.jpg",
  };
  return {
    title: "Edit your profile",
    headerRight: (
      <PreviewProfileButton
        user={user}
        onPress={() =>
          navigation.navigate("UsersProfileScreen", { user })
        }
      />
    ),
    headerRightContainerStyle: {
      alignItems: "center",
      paddingRight: paddings.main,
    },
  };
};

// Styles
const ProfileGallery = styled.FlatList`
  flex-direction: row;
`;
