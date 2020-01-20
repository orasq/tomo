import React, { useState, useEffect } from "react";
import { ScrollView, TouchableOpacity, Keyboard, FlatList } from "react-native";
import styled from "styled-components";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

// Theme
import { colors, sizes, paddings } from "../styles/theme";

// Components import
import { ChatBubble } from "../components";

const ChatScreen = () => {
  // Keyboard handling
  const [keyboardHeight, setKeyboardHeight] = useState(25);

  useEffect(() => {
    const moveUpInput = event => {
      setKeyboardHeight(event.endCoordinates.height + 55);
      this.scrollView.scrollToEnd({ animated: false });
    };

    let moveDownInput = () => {
      setKeyboardHeight(25);
    };

    let setKeyboardWillShowSub = Keyboard.addListener(
      "keyboardDidShow",
      moveUpInput
    );

    let setKeyboardWillHideSub = Keyboard.addListener(
      "keyboardDidHide",
      moveDownInput
    );

    return function cleanup() {
      setKeyboardWillShowSub.remove();
      setKeyboardWillHideSub.remove();
    };
  }, []);

  // Input handling
  const [inputMessage, setInputMessage] = useState("");
  const [fakeData, setFakeData] = useState(fakeChatMessages);

  const handleInput = () => {
    setFakeData([
      ...fakeData,
      {
        id: "12",
        sender: "Olivier",
        recipient: "John",
        message: inputMessage
      }
    ]);
    setInputMessage("");
  };

  return (
    <ChatScreenContainer style={{ paddingBottom: keyboardHeight }}>
      <ScrollView
        ref={ref => (this.scrollView = ref)}
        onContentSizeChange={(contentWidth, contentHeight) => {
          this.scrollView.scrollToEnd({ animated: false });
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <ChatLog>
          {fakeData.length > 0 ? (
            <FlatList
              data={fakeData}
              renderItem={({ item }) => (
                <ChatBubble sender={item.sender} recipient={item.recipient}>
                  {item.message}
                </ChatBubble>
              )}
              keyExtractor={item => item.id}
            />
          ) : (
            <Text>No messages</Text>
          )}
        </ChatLog>
      </ScrollView>
      <InputWrap>
        <InputField
          multiline
          textAlignVertical={"center"}
          placeholder="Write message ..."
          value={inputMessage}
          onSubmitEditing={() => handleInput()}
          onChangeText={text => setInputMessage(text)}
        />
        <InputButton>
          <TouchableOpacity
            style={{
              height: 55,
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={() => handleInput()}
          >
            <Ionicons name="md-send" size={30} color={colors.primary} />
          </TouchableOpacity>
        </InputButton>
      </InputWrap>
    </ChatScreenContainer>
  );
};

export default ChatScreen;

// navigationOptions = function to be able to use navigation.getParam()
ChatScreen.navigationOptions = ({ navigation }) => {
  const user = navigation.getParam("user");
  return {
    title: user.name,
    headerRight: (
      <HeaderLinkWrapper
        onPress={() =>
          navigation.navigate("UsersProfileScreen", { userInfo: user })
        }
      >
        <HeaderLinkIcon name="eye" size={14} color="white" />
        <HeaderLinkAvatar source={{ uri: user.photo }} />
      </HeaderLinkWrapper>
    ),
    headerRightContainerStyle: {
      alignItems: "center",
      paddingRight: paddings.main
    }
  };
};

const ChatScreenContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding: ${paddings.main}px;
  padding-top: 0;
`;

const ChatLog = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  padding-top: 20px;
`;

const InputWrap = styled.View`
  flex-direction: row;
  padding-top: 5px;
`;

const InputField = styled.TextInput`
  justify-content: center;
  align-items: center;
  /* text-align: center;
  align-self: center; */
  width: 88%;
  min-height: 55px;
  padding: 10px 20px;
  border-radius: 26px;
  border: 1px ${colors.mediumGrey};
  background-color: white;
`;

const InputButton = styled.View`
  align-self: center;
  width: 12%;
  /* position: absolute;
  top: 20px;
  right: 12px; */
`;

const Text = styled.Text``;

const HeaderLinkWrapper = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: ${sizes.smallRadius};
  background-color: #000000;
  overflow: hidden;
`;

const HeaderLinkAvatar = styled.Image`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${colors.lightGrey};
  border-color: ${colors.whiteGrey};
  opacity: 0.5;
`;

const HeaderLinkIcon = styled(FontAwesome)`
  z-index: 10;
`;

// Fake Data

// const fakeChatMessages = [];

const fakeChatMessages = [
  {
    id: "1",
    sender: "John",
    recipient: "Olivier",
    message: "Yoh! What's up dude?"
  },
  {
    id: "2",
    sender: "Olivier",
    recipient: "John",
    message: "Aight"
  },
  {
    id: "3",
    sender: "Olivier",
    recipient: "John",
    message: "U ?"
  },
  {
    id: "4",
    sender: "John",
    recipient: "Olivier",
    message: "Aight!"
  }
];
