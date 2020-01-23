import React from "react";
import styled from "styled-components";
import { FontAwesome } from "@expo/vector-icons";

// Theme
import { paddings } from "../styles/theme";

// Components import
import {
  Container,
  Divider,
  Title,
  PreviewProfileButton,
  ProfileGalleryImage,
  ProfileMainInfos,
  ProfilePlans,
  ProfileInterests
} from "../components";
import { FlatList } from "react-native-gesture-handler";

const AccountProfilScreen = () => {
  const user = {
    name: "Olivier",
    age: 31,
    photo:
      "https://www.jardiner-malin.fr/wp-content/uploads/2015/11/olivier.jpg"
  };

  const fakePictures = [
    {
      id: 1,
      url:
        "https://www.jardiner-malin.fr/wp-content/uploads/2015/11/olivier.jpg"
    },
    {
      id: 2,
      url:
        "https://www.jardiner-malin.fr/wp-content/uploads/2015/11/olivier1.jpg"
    },
    {
      id: 3,
      url:
        "https://www.jardiner-malin.fr/wp-content/uploads/2018/10/olivier.jpg"
    },
    {
      id: 4,
      url: "https://media.gerbeaud.net/2011/01/olivier.jpg"
    }
  ];

  const processedPictures = () => {
    const newArray = fakePictures;
    const numberOfImagesToAdd = 6 - fakePictures.length;

    for (i = 0; i < numberOfImagesToAdd; i++) {
      newArray.push({ id: newArray.length + 1 });
    }
    return newArray;
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

  const fakePlans = [
    { id: "1", plan: "Have a drink", image: user.photo },
    { id: "2", plan: "Discover the city", image: user.photo },
    {
      id: "3",
      plan: "Go to a concert: Denzel Curry (20/12/2019)",
      image: user.photo
    },
    { id: "4", plan: "Learn Spanish", image: user.photo }
  ];

  const fakeInterests = [
    {
      category: "music",
      order: 1,
      elements: [
        "Arctic Monkeys",
        "Eminem",
        "DJ Furax",
        "Four Tet",
        "Kojak Klack",
        "System of a Down",
        "Sam Smith",
        "King Gizzard and the Lizard Wizard",
        "MF DOOM",
        "Camille Poteau",
        "Jeanne Dark",
        "Petrocious",
        "Koba Lad",
        "Union",
        "Muse",
        "Celophane",
        "Ptit Biscuit",
        "Clark",
        "Aphex Twin"
      ]
    },
    {
      category: "sport",
      order: 2,
      elements: ["Football", "Running", "Fitness", "Fc Barcelona"]
    },
    {
      category: "books",
      order: 3,
      elements: [
        "Le moniteur automobile",
        "L'étranger",
        "Harry Potter et la Croupe de Feu",
        "Allez les Bleus !"
      ]
    }
  ];

  return (
    <Container safeArea>
      <ProfileGallery
        showsVerticalScrollIndicator={false}
        numColumns={3}
        contentContainerStyle={{
          flexGrow: 1
        }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        data={processedPictures()}
        renderItem={({ item }) => <ProfileGalleryImage url={item.url} />}
        keyExtractor={item => item.id}
      />
      <ProfileMainInfos
        self
        user={user}
        data={fakeInfosTags}
        description={fakeDescription}
      />
      <Divider />
      <ProfilePlans self user={user} data={fakePlans} />
      <Divider />

      <Title colorText="darkGrey" center h2>
        Interests
      </Title>
      <Title colorText="mediumGrey" center h4>
        Lorem ipsum dolor sit amet
      </Title>
      {/* Music */}
      {fakeInterests.map((item, index) => {
        return (
          <ProfileInterests
            self
            key={item.order}
            category={item.category}
            elements={item.elements}
            last={index === fakeInterests.length - 1 ? true : false}
          />
        );
      })}
    </Container>
  );
};

export default AccountProfilScreen;

// navigationOptions = function to be able to use navigation.getParam()
AccountProfilScreen.navigationOptions = () => {
  const user = {
    name: "Olivier",
    age: 31,
    photo:
      "https://www.jardiner-malin.fr/wp-content/uploads/2015/11/olivier.jpg"
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
      paddingRight: paddings.main
    }
  };
};

// Styles
const ProfileGallery = styled.FlatList`
  flex-direction: row;
`;
