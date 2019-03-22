/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React from "react";
import { Image } from "react-native";
import {
    createStackNavigator,
    createAppContainer,
    createDrawerNavigator,
    createSwitchNavigator,
    NavigationActions
} from "react-navigation";
import { DrawerActions } from "react-navigation-drawer";
import Menu_Icon from "./src/components/Menu_Icon";
// SCREENS:
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import Scan_rfid from "./src/screens/Scan_rfid";
import Vinotheque from "./src/screens/Vinotheque";
import Product from "./src/screens/Product";
import Blockchain from "./src/screens/Blockchain";
import Splash_Screen from "./src/screens/Splash_Screen";
import Tuto_1 from "./src/screens/Tuto_1";
import Tuto_2 from "./src/screens/Tuto_2";
import Tuto_3 from "./src/screens/Tuto_3";
import Drawer_Content from "./DrawerContent"
import Caracteristique_detail from "./src/screens/Caracteristique_detail";
const WineStack = createStackNavigator(
    {
        Vinotheque: { screen: Vinotheque },
        Product: { screen: Product },
        Caracteristique_detail: {screen: Caracteristique_detail}
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerLeft: (
                <Menu_Icon
                    image={require("./Hamburger.png")}
                    onClick={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                    left
                />
            )
        })
    }
);

const TutorielStack = createStackNavigator(
    { Tuto_1: { screen: Tuto_1 }, Tuto_2: { screen: Tuto_2 }, Tuto_3: { screen: Tuto_3 } },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerLeft: (
                <Menu_Icon
                    image={require("./Hamburger.png")}
                    onClick={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                    left
                />
            )
        })
    }
);

const RegisterStack = createStackNavigator({
    Login: { screen: Login },
    Register: { screen: Register }
});

const DrawerRoutes = {
    VINOTHEQUE: {
        title: "VINOTHEQUE",
        onPress: function() {
            navigation.navigate("VINOTHEQUE");
        }
    },
    IDENTIFICATION: {
        title: "IDENTIFICATION",
        onPress: function() {
            navigation.navigate("IDENTIFICATION");
        }
    },
    Blockchain: {
        title: "Blockchain",
        onPress: function() {
            navigation.navigate("Blockchain");
        }
    },
    Tutoriel: {
        title: "Tutoriel",
        onPress: function() {
            navigation.navigate("Tutoriel");
        }
    }
};

const DashboardDrawNavigator = createDrawerNavigator(
    {
        VINOTHEQUE: { screen: WineStack },
        IDENTIFICATION: { screen: Scan_rfid },
        Blockchain: { screen: Blockchain },
        Tutoriel: { screen: TutorielStack }
    },
    {
        contentComponent: ({ navigation }) => (
            <Drawer_Content navigation={navigation} routes={DrawerRoutes} />
        )
    }
);

const LoginStack = createSwitchNavigator({
    /*Splash_Screen: { screen: Splash_Screen },*/
    RegisterStack: { screen: RegisterStack },
    DashboardDrawNavigator: { screen: DashboardDrawNavigator }
});

export default (App = createAppContainer(LoginStack));

// --------------------------------------
// Route de connexion
// --------------------------------------
/*const LoginStack = createStackNavigator(
  {
    Login: { screen: Login },
    Register: { screen: Register }
    /*ForgotPassword: {screen: ForgotPassword} à implémenter*/
//},
/*{
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  }
);*/

// --------------------------------------
// Route de la vinothèque
// --------------------------------------
/*const WineStack = createStackNavigator(
  {
    Vinotheque: { screen: Vinotheque },
    Product: { screen: Product }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  }
);*/

// --------------------------------------
// Route du menu
// --------------------------------------
/*const MenuStack = createDrawerNavigator(
  {
    IDENTIFICATION: { screen: Scan_rfid },
    VINOTHEQUE: { screen: WineStack }
  },
  {
    initialRouteName: 'VINOTHEQUE',
    order: ['IDENTIFICATION', 'VINOTHEQUE']
  }
);*/

// --------------------------------------
// Route du contenu avec le menu
// --------------------------------------
/*const DrawerNavigation = createStackNavigator(
  {
    MenuStack: { screen: MenuStack }
  },
  {
    headerMode: 'none',
    navigationOptions: ({ navigation }) => ({
      headerTintColor: 'white',
      title: 'Bla',
      headerLeft: (
        <Menu_Icon
          image={require('./Hamburger.png')}
          onClick={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          left
        />
      )
    })
  }
);*/

/*const RootNavigator = createStackNavigator(
  {
    LoginStack: { screen: LoginStack },
    DrawerNavigation: { screen: DrawerNavigation }
  },
  {
    // Default config for all screens
    headerMode: 'float',
    title: 'Main',
    initialRouteName: 'LoginStack',
    navigationOptions: ({ navigation }) => ({
      headerTintColor: 'white',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('./Hamburger.png')}
          resizeMode="contain"
          style={{ width: 20, height: 20, tintColor: 'blue' }}
        />
      )
    })
  }
);*/

// --------------------------------------
// Route des tutoriels
// --------------------------------------

//export default (App = createAppContainer(RootNavigator));
