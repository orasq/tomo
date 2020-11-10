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
    const numberOfImagesToAdd = 6 - userPictures.length;

    for (var i = 0; i < numberOfImagesToAdd; i++) {
      newArray.push({ id: newArray.length + 1 });
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
        image={userPictures[0].url}
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
  const user = {
    name: "Olivier",
    age: 31,
    photo: require("../assets/images/olivier-1.jpg"),
  };
  return {
    title: "Edit your profile",
    headerRight: (
      <PreviewProfileButton
        user={user}
        onPress={() =>
          navigation.navigate("UsersProfileScreen", { userInfo: user })
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

// OLD Fake Data Structure

// const fakePictures = [
//   {
//     id: 1,
//     url:
//       "https://www.jardiner-malin.fr/wp-content/uploads/2015/11/olivier.jpg"
//   },
//   {
//     id: 2,
//     url:
//       "https://www.jardiner-malin.fr/wp-content/uploads/2015/11/olivier1.jpg"
//   },
//   {
//     id: 3,
//     url:
//       "https://www.jardiner-malin.fr/wp-content/uploads/2018/10/olivier.jpg"
//   },
//   {
//     id: 4,
//     url: "https://media.gerbeaud.net/2011/01/olivier.jpg"
//   }
// ];

// const fakeInfosTags = {
//   geoStatus: "Leaving in 4 days",
//   city: "Brussels, Belgium",
//   job: "Graphic Designer",
//   character: "Introvert",
//   languages: ["French", "Spanish"],
//   smoke: ";)"
// };

// const fakeDescription = {
//   description:
//     "Lorem ipsum dolor sit amet 😎 consectetur, adipisicing elit. Quidem corporis minus, rerum impedit esse sit similique officiis recusandae! Magnam quis necessitatibus labore? 🙌"
// };

// const fakePlans = [
//   { id: "1", plan: "Have a drink", image: user.photo },
//   { id: "2", plan: "Discover the city", image: user.photo },
//   {
//     id: "3",
//     plan: "Go to a concert: Denzel Curry (20/12/2019)",
//     image: user.photo
//   },
//   { id: "4", plan: "Learn Spanish", image: user.photo }
// ];

// const fakeInterests = [
//   {
//     category: "music",
//     order: 1,
//     elements: [
//       "Arctic Monkeys",
//       "Eminem",
//       "DJ Furax",
//       "Four Tet",
//       "Kojak Klack",
//       "System of a Down",
//       "Sam Smith",
//       "King Gizzard and the Lizard Wizard",
//       "MF DOOM",
//       "Camille Poteau",
//       "Jeanne Dark",
//       "Petrocious",
//       "Koba Lad",
//       "Union",
//       "Muse",
//       "Celophane",
//       "Ptit Biscuit",
//       "Clark",
//       "Aphex Twin"
//     ]
//   },
//   {
//     category: "sport",
//     order: 2,
//     elements: ["Football", "Running", "Fitness", "Fc Barcelona"]
//   },
//   {
//     category: "books",
//     order: 3,
//     elements: [
//       "Le moniteur automobile",
//       "L'étranger",
//       "Harry Potter et la Croupe de Feu",
//       "Allez les Bleus !"
//     ]
//   }
// ];
