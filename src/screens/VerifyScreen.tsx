import React, { useState } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { MaskedTextInput } from 'react-native-mask-text';
import { NavigationProp } from '../navigation/types';

export const VerifyScreen = ({ navigation }: { navigation: NavigationProp }) => {
  const [code, setCode] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-primary p-5">
      <View className="mt-10">
        <View className="flex-row items-center mb-6">
          <Image 
            source={require('../../assets/logo_white.png')}
            className="w-10 h-10 mr-2"
            resizeMode="contain"
          />
          <Text className="text-2xl text-white font-semibold">Mo</Text>
        </View>
        <Text className="text-3xl text-white font-semibold leading-10">
          Enter the code you received
        </Text>
      </View>
      
      <View className="mt-10">
        <MaskedTextInput
          className="bg-white/10 p-4 rounded-lg text-white text-2xl text-center tracking-[8px]"
          placeholder="111111"
          keyboardType="numeric"
          mask="999999"
          onChangeText={(text, rawText) => setCode(rawText)}
          value={code}
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
        />
        <TouchableOpacity className="flex-row justify-center items-center mt-5 p-2.5">
          <Image 
            source={require('../../assets/whatsapp.png')}
            className="w-6 h-6 mr-2"
            resizeMode="contain"
          />
          <Text className="text-base text-white">Sending via WhatsApp</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};