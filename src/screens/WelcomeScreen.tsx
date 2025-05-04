import React, { useState } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { MaskedTextInput } from 'react-native-mask-text';
import { NavigationProp } from '../navigation/types';

export const WelcomeScreen = ({ navigation }: { navigation: NavigationProp }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-primary p-5">
      <View className="mt-10">
        <View className="flex-row items-center my-12">
          <Image 
            source={require('../../assets/logo_white.png')}
            className='mr-2'
          />
          <Text className="text-3xl text-white font-semibold">Mo</Text>
        </View>
        <Text className="text-5xl text-white font-medium">
          Welcome. Now,{'\n'}let's get started.
        </Text>
      </View>
      
      <View className="mt-10">
        <View className="flex-row gap-3">
          <MaskedTextInput
            className="flex-[2] bg-white/10 p-4 rounded-lg text-white text-lg"
            placeholder="+456"
            keyboardType="numeric"
            mask="+999"
            onChangeText={(text, rawText) => {}}
            value="+456"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
          />
          <MaskedTextInput
            className="flex-[3] bg-white/10 p-4 rounded-lg text-white text-lg"
            placeholder="1234 5678"
            keyboardType="numeric"
            mask="9999 9999"
            onChangeText={(text, rawText) => setPhoneNumber(rawText)}
            value={phoneNumber}
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
          />
        </View>
        <View className="flex-row items-center mt-5">
          <Image 
            source={require('../../assets/tick.png')}
            className='mr-2'
          />
          <Text className="text-lg text-white font-semibold flex-1">
            By continuing, you agree to our{'\n'}Terms of Service.
          </Text>
        </View>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Verify')}
          className="self-center mt-10 p-2"
        >
          <Image 
            source={require('../../assets/navigation.png')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};