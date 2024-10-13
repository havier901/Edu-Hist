import { Platform, StyleSheet, Text } from "react-native";



function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: 'white',
    textAlign: "center",
    //borderWidth: Platform.OS === 'android' ? 2 : 0,
    //borderWidth: Platform.select({ios: 0, android: 2}),
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
    maxWidth: '80%',
    width: 300,
  },
});

/*
o Percentage use combined with min and max limits can help you adjust your
  compnent's size in order to make them more compatible with different devices

o We are using react native's Platform API in order to edit our style according to which
  platform it is being run on
*/