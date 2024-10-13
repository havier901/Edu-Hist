import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#ce87400" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 5,
    borderRadius: 20,
    backgroundColor: "#0000ff",
    alignContent: 'center',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "#ffffff",
    padding: 8,
    fontSize: 20,
  },
});

/*
o with export components you no longer have to import 'react-native'
o Its good practice to keep your stylesheet close to the JSX code it effects
o You have to import your components with every JSX file
o Passing in props to your component allows it to access your JS objects
o Using Pressable component to wrap our View element allows us to make 
  each individual element pressable, which will come in hand for deletion
  --"Touchable" is the old Pressable, is being deprecated
o We are using the bind method on our onPress function so that we might pass
  in the properties of our pressed element without manually doing it by calling
  a helper function within the function
o Android Pressable components have an "android_ripple" property which you can set to a color using a simple {key:val}
  - android_ripple={{color: '#cccccc'}}
*/
