import { useLayoutEffect } from "react";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({ route, navigation }) {
  //const route = useRoute();
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals}/>
}

export default MealsOverviewScreen;



/*
o Just like the navigation prop, you get a route prop with every component that
    you register as a navigatable screen
o The route prop gives you access to params, which is an object containing all of the
    parameters that you passed to the screen
o Just like the navigation prop, you can import the useRoute prop so that you can access it in other
    functions/components
o Instead of having to use a lot of dot notation into itemData in order to pass in all of our props
    we created a helper function which contains an object filled with the key value pairs we need
    o We then used the spread method in our MealItem component to copy and pass in all of those properties
o Instead of setting option on the App.js screen for dynamic properties, you can also set them
  in the component itself, using the navigation.setOptions() method
  o NOTE: you can set these inside of the component but its best to use the useEffect hook and set the paramaters
    inside 
o Instead of sticking with our useEffect hook, we use the useLayoutEffect hook which allows our changes to render 
  as the component is rendering for the first time, instead of lagging behind and making the UI see clunky
*/
