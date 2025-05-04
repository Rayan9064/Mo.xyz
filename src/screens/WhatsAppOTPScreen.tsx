import React, { useState } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { MaskedTextInput } from 'react-native-mask-text';
import { NavigationProp } from '../navigation/types';

export const WhatsAppOTPScreen = ({ navigation }: { navigation: NavigationProp }) => {
  const [code, setCode] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-primary p-5">
      <View className="mt-10">
        <View className="mt-10 flex-row items-center">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image 
              source={require('../../assets/arrow_left.png')}
              className="w-6 h-6 tint-white"
            />
          </TouchableOpacity>
          <View className="flex-row items-center flex-1 justify-center">
            <Image 
              source={require('../../assets/logo_white.png')}
              className="w-8 h-8 mr-2"
            />
            <Text className="text-2xl text-white font-semibold">Mo</Text>
          </View>
        </View>

        <View className="mt-8">
          <Text className="text-4xl text-white font-semibold">
            Enter the code{'\n'}you received
          </Text>
        </View>

        <View className="mt-8 bg-white/10 rounded-lg p-4 flex-row items-center">
          <Image 
            source={require('../../assets/mobile.png')}
            className="w-6 h-6 tint-white mr-3"
          />
          <Text className="text-white text-lg">+456 1234 5678</Text>
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
          <TouchableOpacity 
            className="flex-row justify-center items-center mt-5 p-2.5"
            onPress={() => navigation.navigate('SMSOTP')}
          >
            <Image 
              source={require('../../assets/whatsapp.png')}
              className="w-6 h-6 mr-2"
              resizeMode="contain"
            />
            <Text className="text-base text-white">Sending via WhatsApp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};