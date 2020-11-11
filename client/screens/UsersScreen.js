import React, { useState, useEffect } from "react";
import { FlatList, ActivityIndicator } from "react-native";
import styled from "styled-components";
import axios from "axios";
import _ from "lodash";

// Theme
import { colors, paddings } from "../styles/theme";

// Components import
import { Container, UserCard, HomeHeader } from "../components";

// Constants
var usersJSON = require("../constants/user.json");

const UsersScreen = ({ navigation }) => {
  const [usersList, setUsersList] = useState(usersJSON);
  const [loading, setLoading] = useState(true);


  // Fake loading time
  useEffect(() => {
    setTimeout(() => { setLoading(false); }, 1000);
  }, []);

  // Check scroll position and pass it to HomeHeader for hiding purposes
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);
  const handleScroll = (e) => {
    setCurrentScrollPosition(Math.floor(e.nativeEvent.contentOffset.y));
  };

  return (
    <Container home>
      <HomeHeader
        currentScrollPosition={currentScrollPosition}
        active="users"
        navigation={navigation}
      />
      {/* Check if 'loading', otherwise display UserCard list */}
      {loading ? (
        <ActivityIndicator size="large" color={colors.mediumGrey} />
      ) : (
        <FlatList
          onScroll={handleScroll}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          contentContainerStyle={{
            flexGrow: 1,
            paddingTop: 70 /* = HomeHeader component height */,
          }}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          data={usersList}
          renderItem={({ item }) => (
            <UserCard
              onPress={() =>
                navigation.navigate("UsersProfileScreen", { userInfo: item })
              }
              name={item.infos.name}
              interests={item.commonInterests}
              profileImage={item.pictures[0].url}
              geoStatus={item.infos.details.geoStatus}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </Container>
  );
};

export default UsersScreen;

UsersScreen.navigationOptions = {
  header: null,
};

// Styles
