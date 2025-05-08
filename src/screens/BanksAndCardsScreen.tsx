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
                        className="bg-white p-4 rounded-lg flex-row items-center justify-between mt-4"
                    >
                        <View className="flex-row items-center">
                            <Image 
                                source={require('../../assets/dollar.png')}
                                className="mr-4"
                            />
                            <View>
                                <Text className="text-lg text-gray_1">U.S. Debit Card</Text>
                                <Text className="text-gray_2">Free and Instant</Text>
                            </View>
                        </View>
                        <Image source={require('../../assets/arrow_right.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity 
                        className="bg-white p-4 rounded-lg flex-row items-center justify-between mt-4"
                    >
                        <View className="flex-row items-center">
                            <View className="w-8 h-8 bg-gray_7 rounded-full mr-4 items-center justify-center">
                                <Text className="text-gray_1">BS</Text>
                            </View>
                            <View>
                                <Text className="text-lg text-gray_1">Banco Santander</Text>
                                <Text className="text-gray_2">****1234</Text>
                            </View>
                        </View>
                        <Image source={require('../../assets/arrow_right.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity 
                        className="bg-white p-4 rounded-lg flex-row items-center justify-between mt-4"
                    >
                        <View className="flex-row items-center">
                            <View className="w-8 h-8 bg-gray_7 rounded-full mr-4 items-center justify-center">
                                <Text className="text-gray_1">MC</Text>
                            </View>
                            <View>
                                <Text className="text-lg text-gray_1">Mastercard</Text>
                                <Text className="text-gray_2">****1234</Text>
                            </View>
                        </View>
                        <Image source={require('../../assets/arrow_right.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity 
                        className="bg-white p-4 rounded-lg flex-row items-center justify-between mt-4"
                    >
                        <View className="flex-row items-center">
                            <View className="w-8 h-8 border-2 border-gray_2 border-dashed rounded-full mr-4 items-center justify-center">
                                <Text className="text-gray_2">+</Text>
                            </View>
                            <Text className="text-lg text-gray_1">Add a bank account or card</Text>
                        </View>
                        <Image source={require('../../assets/arrow_right.png')} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity className="absolute bottom-12 left-0 right-0 mx-6">
                    <Text className="text-gray_1 text-center text-lg">Need help?</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};