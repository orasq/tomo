import React from "react";

// Components import
import {
  Container,
  BigInterestTag,
  ProfileImage,
  Divider,
  Title,
  ProfileMainInfos,
  ProfilePlans,
  ProfileInterests
} from "../components";

const UsersProfileScreen = props => {
  const { navigation } = props;

  const user = navigation.getParam("userInfo");

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
      <ProfileImage images={user.photo} navigation={navigation} />
      <BigInterestTag number={user.age} />
      <ProfileMainInfos
        user={user}
        data={fakeInfosTags}
        description={fakeDescription}
      />
      <Divider />
      <ProfilePlans user={user} data={fakePlans} />
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

export default UsersProfileScreen;

UsersProfileScreen.navigationOptions = {
  header: null
};
