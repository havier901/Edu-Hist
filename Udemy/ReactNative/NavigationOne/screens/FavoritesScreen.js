import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import { FavoritesContext } from "../store/context/favorites-context";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";

function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
    </View>
  }
  return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
});

/*
o After changing our Meals List function into its own component (used in MealDeatail Screen)
     we reused its logic here in Favorites Screen by coupling it with useContext. Now we
     have an displayed list of favorite meals that changes with state
o NOTE: You still have to import the Context function even though you wrap the app with the context
    provider function
*/
