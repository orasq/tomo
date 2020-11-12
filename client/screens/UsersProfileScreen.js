import React, { useState, useEffect } from "react";

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

// Constants
// var userJSON = require("../constants/user.json");

const UsersProfileScreen = props => {
  const { navigation } = props;

  // getting data from nav
  const user = navigation.getParam("userInfo");

   // States
   const [userInfos, setUserInfos] = useState(user.infos);
   const [userPictures, setUserPictures] = useState(user.pictures);
   const [userPlans, setUserPlans] = useState(user.plans);
   const [userInterests, setUserInterests] = useState(user.interests);
   const [commonInterests, setCommonInterests] = useState(user.commonInterests);

  return (
    <Container safeArea> 
       <ProfileImage images={userPictures[0].url} navigation={navigation} />
      <BigInterestTag number={commonInterests} />
      <ProfileMainInfos
        data={userInfos}
      />
      <Divider />
      <ProfilePlans name={userInfos.name} data={userPlans} />
      <Divider />

      <Title colorText="darkGrey" center h2>
        Interests
      </Title>
      <Title colorText="mediumGrey" center h4>
        Lorem ipsum dolor sit amet
      </Title> 
      {/* Music */}
      {userInterests.map((item, index) => {
        return (
          <ProfileInterests
            key={item.order}
            category={item.category}
            elements={item.elements}
            // check if last element of the array
            last={index === userInterests.length - 1 ? true : false}
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
