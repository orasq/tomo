import React, { useState, useEffect } from "react";
import { FlatList, ActivityIndicator } from "react-native";
import styled from "styled-components";
import axios from "axios";
import _ from "lodash";

// Theme
import { colors, paddings } from "../styles/theme";

// Components import
import { Container, UserCard, HomeHeader } from "../components";

const UsersScreen = ({ navigation }) => {
  const [fakeUsers, setFakeUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://uinames.com/api/?ext&amount=200")
      .then(function(response) {
        // handle success
        setFakeUsers(response.data);
        setLoading(false);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }, []);

  // Check scroll position and pass it to HomeHeader
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);

  const handleScroll = e => {
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
            paddingTop: 70 /* = HomeHeader component height */
          }}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          data={fakeUsers}
          renderItem={({ item }) => (
            <UserCard
              onPress={() =>
                navigation.navigate("UsersProfileScreen", { userInfo: item })
              }
              name={item.name}
              interests={item.age}
              profileImage={item.photo}
            />
          )}
          keyExtractor={item => item.phone}
        />
      )}
    </Container>
  );
};

export default UsersScreen;

UsersScreen.navigationOptions = {
  header: null
};

// Styles
