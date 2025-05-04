import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Welcome: undefined;
  Verify: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;