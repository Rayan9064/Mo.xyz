import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Welcome: undefined;
  VerifySilent: undefined;
  SMSOTP: undefined;
  WhatsAppOTP: undefined;
  CreateWallet: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;