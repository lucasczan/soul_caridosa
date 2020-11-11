import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LogIn from '../screens/LogIn';
import {NavigationContainer} from '@react-navigation/native';
import SignUp from '../screens/SignUp';

const Stack = createStackNavigator();

function AuthRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Inicio" component={LogIn} />
        <Stack.Screen name="Cadastro" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthRoutes;
