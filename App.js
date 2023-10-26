import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import Map from "./src/components/Pages/CommercialDetail/Map";
import HomePage from "./src/components/Pages/HomePage/HomePage";
import store from "./Store/Store";
import CommercialDetail from "./src/components/Pages/CommercialDetail/CommercialDetail";
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home page"
            options={{ headerShown: false }}
            component={HomePage}
          />
          <Stack.Screen name="CommercialDetail" component={CommercialDetail} />
          <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
