import React, { useState } from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { NavigationProp } from '../navigation/types';
import { MaskedTextInput } from 'react-native-mask-text';

export const SMSOTPScreen = ({ navigation }: { navigation: NavigationProp }) => {
    const [code, setCode] = useState('');

    return (
        <SafeAreaView className="flex-1 bg-primary p-5">
            <View className="mt-10">
                <TouchableOpacity onPress={() => navigation.goBack()} className='mb-6'>
                    <Image
                        source={require('../../assets/arrow_left.png')}
                    />
                </TouchableOpacity>
                <View className="flex-row items-center mb-12">
                    <Image
                        source={require('../../assets/logo_white.png')}
                        className='mr-2'
                    />
                    <Text className="text-5xl text-white font-semibold">Mo</Text>
                </View>
                <Text className="text-5xl text-white font-medium">
                    Enter the code{'\n'}you received
                </Text>
            </View>


            <View className="mt-10">
            <View className=" rounded-lg p-4 flex-row items-center">
                <Image
                    source={require('../../assets/mobile.png')}
                    className='mr-6'
                />
                <Text className="text-white text-lg">+456 1234 5678</Text>
            </View>
                <MaskedTextInput
                    className="bg-white/10 p-4 rounded-lg text-white text-2xl text-center mt-10 tracking-[8px]"
                    placeholder="111111"
                    keyboardType="numeric"
                    mask="999999"
                    onChangeText={(text, rawText) => setCode(rawText)}
                    value={code}
                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                />
                <TouchableOpacity
                    className="flex-row justify-center items-center mt-5 p-2.5"
                    onPress={() => navigation.navigate('WhatsAppOTP')}
                >
                    <Image
                        source={require('../../assets/message.png')}
                        className="w-6 h-6 mr-2"
                    />
                    <Text className="text-base text-white">Sending via SMS</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};