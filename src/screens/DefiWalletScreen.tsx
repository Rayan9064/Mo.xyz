import React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { NavigationProp } from '../navigation/types';

export const DefiWalletScreen = ({ navigation }: { navigation: NavigationProp }) => {
    return (
        <SafeAreaView className="flex-1 bg-gray_7">
            <View className="flex-1">
                <View className="px-6 pt-10 pb-4">
                    <View className="flex-row items-center justify-between">
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            className="p-2"
                        >
                            <Image source={require('../../assets/arrow_left_black.png')} />
                        </TouchableOpacity>
                        <Text className="text-xl text-gray_1 font-semibold">Add money</Text>
                        <View className="w-8" />
                    </View>
                </View>

                <View className="px-6 flex-1">
                    <Text className="text-3xl text-gray_1 text-center font-semibold mt-4">Send USDC on Base</Text>

                    <View className="items-center justify-center mt-4">
                        <Image
                            source={require('../../assets/dummy_wallet_QR.png')}
                            className="w-64 h-64"
                            resizeMode="contain"
                        />
                        <View className="flex-row items-center mt-8">
                            <View className='flex-1 flex-row justify-between items-center'>
                                <Text className="text-base text-gray_2">
                                    0x9522228904d728aa3ddd{'\n'}
                                    38bcc1a1d155cc4bafe5
                                </Text>
                                <TouchableOpacity
                                    className="bg-brand_green_3 px-6 py-2 rounded-3xl ml-2"
                                    onPress={() => {/* Implement copy functionality */ }}
                                >
                                    <Text className="text-white text-base font-medium">Copy</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View className="my-4 rounded-lg">
                        <Text className="text-base font-normal">
                            <Text className="text-red_500">⚠️ </Text>
                            <Text>Only send USDC on Base Network. Other tokens and networks may result in losses.</Text>
                        </Text>
                    </View>

                    <TouchableOpacity
                        className="bg-brand_green_3 py-3.5 rounded-xl mt-2"
                        onPress={() => navigation.goBack()}
                    >
                        <Text className="text-white text-center text-base font-medium">I transferred</Text>
                    </TouchableOpacity>
                </View>

                <View className="absolute bottom-0 left-0 right-0">
                    <View className="flex-row justify-between items-center px-8 py-4 bg-white border-t border-gray-200">
                        <TouchableOpacity>
                            <Image source={require('../../assets/home.png')} className="tint-brand_green_3" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../assets/trending_up.png')} className="opacity-50" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../assets/dollar.png')} className="opacity-50" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../assets/history.png')} className="opacity-50" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../assets/profile.png')} className="opacity-50" />
                        </TouchableOpacity>
                    </View>
                    <View className="h-8 bg-white" />
                </View>
            </View>
        </SafeAreaView>
    );
};