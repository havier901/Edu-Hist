import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalisVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalisVisible(true);
  }

  function endAddGoalHandler() {
    setModalisVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...courseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#ffffff"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
/*
o Buttons don't have style attributes themselves in RN
o map() is a great way to populate your list
o useState() keeps track of a variable and updates it using a function
o sometimes you have to make tiny code adjustments to target a platform
  in the right way, iOS vs Android vs Web
o unlike with CSS style properties do not cascade
o By default the View element is not scrollable in mobile apps
o ScrollView takes its available space from its direct parent element
  - Scrollview con: it renders ALL of its child items, potential performance
  issue
o FlatList only renders viewable items, which boosts app performance
  - does not use the map() function to render
  - wraps each item of data into an object, renders it according to our specs
  - object contains other metadata and methods
    - itemData.index, itemData.item
o Passing objects into flatlist instead of flat data will only make the list more dynamic
  - for instance, including a key property will cause flatList to look for a key and automatically
  - supply it to the element rendered for the item
o keyExtractor() can supply keys from an object
o imported StatusBar from expo, which has a style attribute we set to light (vs dark, or auto)

DEBUGGING NOTES
o console.log
o react-devtools (still can't get it to work with native)
o react debugger (m in command line with app open)
o Documentation
*/
