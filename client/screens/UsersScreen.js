import React, { useState, useEffect } from "react";
import { ScrollView, FlatList, ActivityIndicator } from "react-native";
import styled from "styled-components";
import axios from "axios";

// Theme
import { colors } from "../styles/theme";

// Components import
import { UserCard, HomeHeader, Container } from "../components";

const UsersScreen = ({ navigation }) => {
  const [fakeUsers, setFakeUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://uinames.com/api/?ext&amount=25")
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

  return (
    <Container>
      <HomeHeader
        style={{ position: "sticky" }}
        active="users"
        navigation={navigation}
      />
      {loading ? (
        <ActivityIndicator size="large" color={colors.mediumGrey} />
      ) : (
        <FlatList
          horizontal={false}
          numColumns={2}
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

// const Container = styled.View`
//   flex: 1;
//   padding: ${paddings.main}px;
//   padding-top: ${paddings.safeAreaTop}px;
// `;

// const UsersWrap = styled(FlatList)`
//   padding-top: 100px;
//   flex: 1;
//   flex-flow: row wrap;
//   justify-content: space-between;
// `;

// const Text = styled.Text`
//   color: red;
// `;
