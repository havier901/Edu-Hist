import "./gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
//import FavoritesContextProvider from "./store/context/favorites-context";
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#2d5dfc" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#00356a" },
        drawerContentStyle: { backgroundColor: "#2d5dfc" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#ff019e",
        drawerActiveBackgroundColor: "#a9d0fc",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} />,
        }}
      />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{
        drawerIcon: ({color, size}) => <Ionicons name="star" color={color} size={size}/>,
      }}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/*<FavoritesContextProvider>*/}
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#2d5dfc" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#00356a" },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{
              title: "About The Meal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
      {/*</FavoritesContextProvider>*/}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

/*
o We installed the package React Navigation (as well as a couple dependencies) so that
  we can use the NavigationContainer component, which we wrap around everything that
  we would like to be navigatable (which is usually the entire app, sans statusbar)
o We used the native-stack navigator, which gives us two more components which will help us 
  render our own components as props
o We can use the options prop to style the individual pages, and the screenOptions prop
  to style the app as a whole with default stylings
o Using options inside each screen, we can dynamically set certain configurations by using the
  route and navigation props which are passed into them
o We can add a button to the header by using the options property on the screen component
  o This is not a good way to render a header button IF the button needs to react with
    the content of the component it was created inside of
o Using both stack and drawer we nested our navigation components so that we can add a Favorites
  tab. 
o Since both navigators default to including a header, we turned the option for the stack header off
  inside of our drawer component. It returns in the unnested components
o Note: The contentStyle is called the sceneContainerStyle in the drawer component. Used to change
  the background color
o We wrapped our entire app in our FavoritesContextProvider components so that we can use state to
  connect various components, notably the favorites screen and the star button on the menu details screen
*/
