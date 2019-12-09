import React, { useState, useEffect } from "react";
import { ScrollView, TouchableOpacity, Keyboard, FlatList } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

// Theme
import { colors, fonts, paddings } from "../styles/theme";

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

ChatScreen.navigationOptions = {
  title: "NOM_CONTACT",
  headerTintColor: colors.darkGrey,
  headerTitleStyle: {
    fontWeight: "200" /* use to be able to set custom font */,
    fontFamily: fonts.bold
  },
  headerStyle: {
    /* remove default shadow */
    shadowColor: "#5bc4ff",
    shadowOpacity: 0,
    shadowOffset: {
      height: 0
    },
    shadowRadius: 0,
    elevation: 1
  }
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
  align-items: center;
  width: 88%;
  height: 55px;
  padding-left: 20px;
  padding-right: 50px;
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
    message: "I'm great!"
  }
];
