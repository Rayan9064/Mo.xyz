import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeScreen } from './src/screens/WelcomeScreen';
import { VerifyScreen } from './src/screens/VerifyScreen';
import { RootStackParamList } from './src/navigation/types';
import { withExpoSnack } from 'nativewind';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Verify" component={VerifyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default withExpoSnack(App);
