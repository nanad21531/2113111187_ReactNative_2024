import { Alert, StyleSheet, Text, View, TextInput } from "react-native";
import ProfileScreen from "./components/ProfileScreen";
// import UseEffectExample from './components/UseEffectExample'
import AboutScreen from "./screens/AboutScreen";
import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/MenuScreen";
import CreatePostScreen from "./screens/CreatePostScreen";
import ProductScreen from "./screens/ProductScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderButtonsProvider } from "react-navigation-header-buttons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaProvider } from 'react-native-safe-area-context';

const HomeStack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();
const ProductStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <ProductStack.Navigator
      // screenOptions={
      //   {
      //     //global option for every stack
      //     // headerStyle: { backgroundColor: "#20b2ae" },
      //     // headerTintColor: "white",
      //     // headerTitleStyle: { fontWeight: "bold" },
      //     // headerTitleAlign: "center",
      //   }
      // }
      initialRouteName="Home"
    >
      <ProductStack.Screen
        name="Home"
        component={HomeScreen}
      // options={{ title: "หน้าหลัก" }}
      />
      <ProductStack.Screen
        name="Product"
        component={AboutScreen}
        options={{
          title: "เกี่ยวกับเรา",
          headerStyle: { backgroundColor: "#20b2ae" },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center",
        }}
      />
      <ProductStack.Screen name="CreatePost" component={CreatePostScreen} />
    </ProductStack.Navigator>
  );
}

function ProductStackScreen() {
  return (
    <ProductStack.Navigator
    >
      <ProductStack.Screen
        name="Product"
        component={ProductScreen}
      />
    </ProductStack.Navigator>
  );
}

const App = (): React.JSX.Element => {
  return (
    <SafeAreaProvider>
      <HeaderButtonsProvider stackType="native">
        <NavigationContainer>
          <Drawer.Navigator screenOptions={{ headerShown: false }} drawerContent={props => <MenuScreen{...props} />}>
            <Drawer.Screen name='HomeStack' component={HomeStackScreen} />
            <Drawer.Screen name='ProductStack' component={ProductStackScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </HeaderButtonsProvider>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});