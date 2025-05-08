import React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { NavigationProp } from '../navigation/types';

export const BanksAndCardsScreen = ({ navigation }: { navigation: NavigationProp }) => {
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
                    <TouchableOpacity 
                        className="bg-brand_green_3 px-4 py-6 rounded-2xl flex-row items-center justify-between mt-4"
                    >
                        <View className="flex-row items-center">
                            <View className=" rounded-full items-center justify-center mr-4">
                                <Image 
                                    source={require('../../assets/card_white.png')}
                                />
                            </View>
                            <View>
                                <Text className="text-base font-medium text-white">U.S. Debit Card</Text>
                                <Text className="text-white text-base">Free and Instant</Text>
                            </View>
                        </View>
                        <Image source={require('../../assets/arrow_right.png')} className="tint-white" />
                    </TouchableOpacity>

                    <TouchableOpacity 
                        className="bg-white p-4 rounded-2xl flex-row items-center justify-between mt-4"
                    >
                        <View className="flex-row items-center">
                        <View className=" rounded-full items-center justify-center mr-4">
                                <Image 
                                    source={require('../../assets/bank.png')}
                                />
                            </View>
                            <View>
                                <Text className="text-base text-gray_1">Banco Santander</Text>
                                <Text className="text-gray_1 font-semibold">****1234</Text>
                            </View>
                        </View>
                        <Image source={require('../../assets/arrow_right_black.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity 
                        className="bg-white p-4 rounded-2xl flex-row items-center justify-between mt-4"
                    >
                        <View className="flex-row items-center">
                        <View className=" rounded-full items-center justify-center mr-4">
                                <Image 
                                    source={require('../../assets/card_black.png')}
                                />
                            </View>
                            <View>
                                <Text className="text-base text-gray_1">Mastercard</Text>
                                <Text className="text-gray_1 font-semibold">****1234</Text>
                            </View>
                        </View>
                        <Image source={require('../../assets/arrow_right_black.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity 
                        className="bg-white p-4 rounded-2xl flex-row items-center justify-between mt-4"
                    >
                        <View className="flex-row items-center">
                            <View className=" rounded-full py-2 items-center justify-center mr-4">
                                <Image 
                                    source={require('../../assets/add.png')}
                                />
                            </View>
                            <Text className="text-base text-gray_1">Add a bank account or card</Text>
                        </View>
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

                <TouchableOpacity className="absolute bottom-24 left-0 right-0 mx-6 my-6">
                    <Text className="text-gray_1 text-center text-lg">Need help?</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};