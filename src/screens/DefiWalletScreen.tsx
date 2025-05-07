import React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { NavigationProp } from '../navigation/types';

export const DefiWalletScreen = ({ navigation }: { navigation: NavigationProp }) => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="px-6 py-4">
                <View className="flex-row items-center justify-between">
                    <TouchableOpacity 
                        onPress={() => navigation.goBack()}
                        className="p-2 -ml-2"
                    >
                        <Image source={require('../../assets/arrow_left.png')} />
                    </TouchableOpacity>
                    <Text className="text-xl text-gray_1 font-semibold">Add money</Text>
                    <View className="w-8" /> {/* Spacer for center alignment */}
                </View>

                <Text className="text-xl text-gray_1 font-semibold mt-8">Send USDC on Base</Text>
                
                <View className="items-center justify-center mt-8">
                    <Image 
                        source={require('../../assets/dummy_wallet_QR.png')} 
                        className="w-64 h-64"
                        resizeMode="contain"
                    />
                    <Text className="text-sm text-gray_2 mt-4 text-center">
                        0x9522228904d728aa3ddd{'\n'}
                        38bcc1a1d155cc4bafe5
                    </Text>
                    <TouchableOpacity 
                        className="bg-gray_7 px-4 py-2 rounded-lg mt-4"
                        onPress={() => {/* Implement copy functionality */}}
                    >
                        <Text className="text-gray_1">Copy</Text>
                    </TouchableOpacity>
                </View>

                <View className="mt-8 bg-red-50/50 p-4 rounded-lg">
                    <Text className="text-red-500 text-sm">
                        ⚠️ Only send USDC on Base Network. Other tokens and networks may result in losses.
                    </Text>
                </View>

                <TouchableOpacity 
                    className="bg-brand_green_3 py-3.5 rounded-xl mt-8"
                    onPress={() => navigation.goBack()}
                >
                    <Text className="text-white text-center text-base font-medium">I transferred</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};