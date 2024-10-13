import { StyleSheet, Text } from "react-native";

import Colors from "../../constants/colors";

function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 24,
  },
});

/*
o Adding a style prop as an argument to this component function allows us to 
  add aditional styling in addition to the styling we have on it already
o We use an array to pass in our styles instead of a simple object
o NOTE: Styles can be overrided as code moves from left to right in the array
o This can mimic the cascading effects of CSS
*/
