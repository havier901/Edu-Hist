import React from "react";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        padding: 50,
        flexDirection: "row",
        width: "80%",
        height: 300,
        justifyContent: "space-around",
        alignItems: "stretch",
      }}
    >
      <View
        style={{
          backgroundColor: "red",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: "blue",
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}

/*
o Every <View> in React native uses flexbox
o '' '' Organizes children in column
  - column, row-reverse, column-reverse
o By default flex boxes are only as large as necessary to hold each child element
  - they inherit the cross axis from the parent
  - you change the main axis via the child elements via flex: {number}
o Flex numbers are relative to each other
o Flexbox is the tool to stucture your content on a page
o Typically work with a lot of views as well, nesting them within eachother
o You can have views within views, with each having their on flexbox
*/
