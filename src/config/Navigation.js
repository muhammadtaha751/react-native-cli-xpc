import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Alert, Image,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../screens/Dashboard';
import Agreement from '../screens/Agreement';
import Company from '../screens/Company';
import Documents from '../screens/Documents';
import Profile from '../screens/Profile';
import Schedule from '../screens/Schedule';
import Statement from '../screens/Statement';
import Vacancy from '../screens/Vacancy';
import Vetting from '../screens/Vetting';
import Clock from '../screens/Clock';
import Login from '../screens/Login';
import Register from '../screens/Register'
import RegisterTwo from '../screens/RegisterTwo';
import RegisterThree from '../screens/RegisterThree';
import RegisterFour from '../screens/RegisterFour';
import RegisterFive from '../screens/RegisterFive';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


const MainDrawerNavigator = () => {
    
  return (
    
    <Drawer.Navigator
    screenOptions={{
      headerShown: true,
      drawerStyle: {
        marginTop: 55,
      },
      headerStyle: {
        backgroundColor: '#007d9c',
      },
      headerTintColor: 'white',
      headerTitle: () => (
        <Image
          source={require('../assets/logo.png')} 
          style={{ width: 160, height: 40 }} 
        />
      ),
    }}>
       
    <Drawer.Screen name="Dashboard" component={Dashboard} />
    <Drawer.Screen name="Profile" component={Profile} />
    <Drawer.Screen name="Documents" component={Documents} />
    <Drawer.Screen name="Company" component={Company} />
    <Drawer.Screen name="Clock" component={Clock} />
    <Drawer.Screen name="Schedule" component={Schedule} />
    <Drawer.Screen name="Vacancy" component={Vacancy} />
    <Drawer.Screen name="Vetting" component={Vetting} />
    <Drawer.Screen name="Agreement" component={Agreement} />
    <Drawer.Screen name="Statement" component={Statement} />

  </Drawer.Navigator>
  );
};

const AppNavigator = ({ toggleLogin }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" options={{ headerShown: false }}>
        {props => <Login {...props} toggleLogin={toggleLogin} />}
      </Stack.Screen>
      <Stack.Screen name="Register" options={{ headerShown: false }}>
        {props => <Register {...props} toggleLogin={toggleLogin} />}
      </Stack.Screen>
      <Stack.Screen name="RegisterTwo" options={{ headerShown: false }}>
        {props => <RegisterTwo {...props} toggleLogin={toggleLogin} />}
      </Stack.Screen>
      <Stack.Screen name="RegisterThree" options={{ headerShown: false }}>
        {props => <RegisterThree {...props} toggleLogin={toggleLogin} />}
      </Stack.Screen>
      <Stack.Screen name="RegisterFour" options={{ headerShown: false }}>
        {props => <RegisterFour {...props} toggleLogin={toggleLogin} />}
      </Stack.Screen>
      <Stack.Screen name="RegisterFive" options={{ headerShown: false }}>
        {props => <RegisterFive {...props} toggleLogin={toggleLogin} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};



const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <NavigationContainer>
      {isLoggedIn ? <MainDrawerNavigator /> : <AppNavigator toggleLogin={toggleLogin} />}
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({


});

export default App;