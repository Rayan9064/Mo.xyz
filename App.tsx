import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  WelcomeScreen,
  VerifySilentScreen,
  SMSOTPScreen,
  WhatsAppOTPScreen,
  CreateWalletScreen,
  HomeScreen,
  DefiWalletScreen,
  BanksAndCardsScreen,
} from './src/screens';
import { RootStackParamList } from './src/navigation/types';

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
        <Stack.Screen name="VerifySilent" component={VerifySilentScreen} />
        <Stack.Screen name="SMSOTP" component={SMSOTPScreen} />
        <Stack.Screen name="WhatsAppOTP" component={WhatsAppOTPScreen} />
        <Stack.Screen name="CreateWallet" component={CreateWalletScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DefiWallet" component={DefiWalletScreen} />
        <Stack.Screen name="BanksAndCards" component={BanksAndCardsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
