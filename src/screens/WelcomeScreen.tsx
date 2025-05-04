import React, { useState } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, Image, TextInput } from 'react-native';
import { NavigationProp } from '../navigation/types';
import CountryPicker, { Country, CountryCode } from 'react-native-country-picker-modal';

export const WelcomeScreen = ({ navigation }: { navigation: NavigationProp }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+456');
  const [countryPickerCode, setCountryPickerCode] = useState<CountryCode>('US');
  const [visible, setVisible] = useState(false);

  const onSelect = (country: Country) => {
    setCountryCode(`+${country.callingCode[0]}`);
    setCountryPickerCode(country.cca2);
  };

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
          <TouchableOpacity
            onPress={() => setVisible(true)}
            className="w-[90px] bg-white/10 rounded-lg flex-row items-center justify-center"
            style={{ height: 56 }}
          >
            <Text className="text-white text-lg">{countryCode}</Text>
            <CountryPicker
              visible={visible}
              onClose={() => setVisible(false)}
              onSelect={onSelect}
              countryCode={countryPickerCode}
              withFilter
              withFlag
              withCallingCode
              withEmoji
              withAlphaFilter
              containerButtonStyle={{ display: 'none' }}
              theme={{
                onBackgroundTextColor: '#FFFFFF',
                backgroundColor: '#077330',
              }}
            />
            <Image 
            source={require('../../assets/arrow_down.png')}
            className='mx-2'
          />
          </TouchableOpacity>
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
        <View className="flex-row items-center mt-10">
          <Image 
            source={require('../../assets/tick.png')}
            className='mr-6'
          />
          <Text className="text-lg text-white font-semibold flex-1">
            By continuing, you agree to our{'\n'}Terms of Service.
          </Text>
        </View>
        <TouchableOpacity 
          onPress={() => navigation.navigate('VerifySilent')}
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