/**
yarn add react-navigation
yarn add react-native-safe-area-context
yarn add @react-navigation/bottom-tabs
yarn add @react-navigation/native
yarn add @react-navigation/native-stack
yarn add @react-navigation/drawer
yarn add react-native-gesture-handler 
yarn add react-native-reanimated
 */
import * as React from "react";
import { Settings, Main, Chart, Profile, Booked } from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { fontSizes, colors } from "../constants";
import Icon from "react-native-vector-icons/FontAwesome5";
import "react-native-gesture-handler";
import { View } from "react-native";
const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
  headerShown: false,
  tabBarActiveTintColor: "#5567c9",
  tabBarActiveBackgroundColor: 'white',
  tabBarInactiveBackgroundColor: 'white',
  tabBarBackground: () => (
    <View style={{ backgroundColor: colors.primary, flex: 1 }}></View>
  ),
  tabBarIcon: ({ focused, color, size }) => {
    return (
      <Icon
        style={{
          paddingTop: 5,
        }}
        name={
          route.name == "Booked"
            ? "calendar-check"
            : route.name == "FoodList"
            ? "accusoft"
            : route.name == "Settings"
            ? "cogs"
            : route.name == "Main"
            ? "home"
            : route.name == "Chart"
            ? "chart-line"
            : route.name == "Profile"
            ? "stack-overflow"
            : ""
        }
        size={23}
        color={focused ? "#5567c9" : colors.inactive}
      />
    );
  },
});
function UITab(props) {
  return (
    
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name={"Main"}
        component={Main}
        options={{
          tabBarLabel: "Main",
          tabBarLabelStyle: {
            fontSize: fontSizes.h6,
          },
        }}
      />
      <Tab.Screen
        name={"Booked"}
        component={Booked}
        options={{
          tabBarLabel: "Booked",
          tabBarLabelStyle: {
            fontSize: fontSizes.h6,
          },
        }}
      />
      <Tab.Screen
        name={"Chart"}
        component={Chart}
        options={{
          tabBarLabel: "Chart",
          tabBarLabelStyle: {
            fontSize: fontSizes.h6,
          },
        }}
      />
      <Tab.Screen
        name={"Settings"}
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          tabBarLabelStyle: {
            fontSize: fontSizes.h6,
          },
        }}
      />
      <Tab.Screen
        name={"Profile"}
        component={Profile}
        options={{
          tabBarLabel: "Available",
          tabBarLabelStyle: {
            fontSize: fontSizes.h6,
          },
        }}
      />
    </Tab.Navigator>
  );
}
export default UITab;