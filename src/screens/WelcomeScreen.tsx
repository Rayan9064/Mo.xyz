import React, { useState, useRef } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, Image, TextInput } from 'react-native';
import { NavigationProp } from '../navigation/types';

export const WelcomeScreen = ({ navigation }: { navigation: NavigationProp }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+456');

  return (
    <SafeAreaView className="flex-1 bg-primary p-5">
      <View className="mt-10">
        <View className="flex-row items-center my-12">
          <Image 
            source={require('../../assets/logo_white.png')}
            className='mr-2'
          />
          <Text className="text-5xl text-white font-semibold">Mo</Text>
        </View>
        <Text className="text-5xl text-white font-medium">
          Welcome. Now,{'\n'}let's get started.
        </Text>
      </View>
      
      <View className="mt-10">
        <View className="flex-row space-x-3">
          <TextInput
            className="w-[90px] bg-white/10 rounded-lg text-white text-lg text-center"
            placeholder="+456"
            keyboardType="numeric"
            value={countryCode}
            onChangeText={setCountryCode}
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            style={{
              height: 56,
              paddingHorizontal: 12
            }}
          />
          <TextInput
            className="flex-1 bg-white/10 px-4 rounded-lg text-white text-lg"
            placeholder="1234 5678"
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            style={{
              height: 56
            }}
          />
        </View>
        <View className="flex-row items-center mt-5">
          <Image 
            source={require('../../assets/tick.png')}
            className='mr-6'
          />
          <Text className="text-lg text-white font-semibold flex-1">
            By continuing, you agree to our{'\n'}Terms of Service.
          </Text>
        </View>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Verify')}
          className="mx-auto mt-10 p-2"
        >
          <Image 
            source={require('../../assets/navigation.png')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};