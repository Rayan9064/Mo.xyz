import React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationProp } from '../navigation/types';
import { Icon } from '../components/Icon';

export const HomeScreen = ({ navigation }: { navigation: NavigationProp }) => {
    return (
        <SafeAreaView className="flex-1 bg-home">
            <ScrollView className="flex-1 px-4">
                <View className="flex-row justify-end items-center mt-4">
                    <Text className="text-base text-gray_1 font-semibold">Need help?</Text>
                </View>

                <View className="mt-6 bg-white p-4 rounded-lg">
                    <View className="flex-row justify-between items-center">
                        <Text className="text-base font-medium text-gray_1">Total Balance</Text>
                        <TouchableOpacity className='flex-row items-center justify-center'>
                            <Text className="text-base text-gray_2">Virtual Accounts</Text>
                            <Image source={require('../../assets/arrow_right.png')} className="ml-2" />
                        </TouchableOpacity>
                    </View>

                    <Text className="text-4xl text-gray_1 font-semibold mt-2">US$1,233.99</Text>

                    <View className="flex-row space-x-4 mt-4">
                        <TouchableOpacity className="bg-brand_green_3 py-2 px-6 rounded-full">
                            <Text className="text-white text-base">Add money</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="bg-brand_green_3 py-2 px-6 rounded-full">
                            <Text className="text-white text-base">Withdraw</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View className="flex-row justify-between mt-6">
                    <TouchableOpacity className="bg-white p-4 rounded-lg flex-1 mr-4">
                        <View className="flex-row justify-between items-center">
                            <Text className="text-lg font-semibold">Cash</Text>
                        </View>
                        <Text className="text-2xl  front-gray_1 font-semibold mt-2">$233.33</Text>
                        <Text className="text-sm text-gray_3 mt-1">USDC</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="bg-white p-4 rounded-lg flex-1">
                        <View className="flex-row justify-between items-center">
                            <Text className="text-lg font-semibold">Earn</Text>
                            <Image source={require('../../assets/arrow_right.png')} className="ml-2" />
                        </View>
                        <Text className="text-2xl front-gray_1 font-semibold mt-2">$1,000.66</Text>
                        <View className="flex-row items-center">
                            <Image source={require('../../assets/arrow_up.png')} className="mt-1 mr-1" />
                            <Text className="text-sm text-gray_3 mt-1">7.50% APY</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity className="bg-white p-4 rounded-lg mt-4 flex-1">
                    <View className="flex-row justify-between items-center">
                    <Text className="text-lg font-medium flex-1">Send money free and instant</Text>
                        <Image source={require('../../assets/arrow_right.png')} className="ml-2" />
                    </View>
                    <Image source={require('../../assets/send_money.png')} className="mx-auto" />
                </TouchableOpacity>

                <View className="fixed bottom-0 left-0 right-0 flex-row justify-between items-center p-4 bg-white border-t border-gray-200 mt-auto">
                    <TouchableOpacity className="items-center">
                        <Image source={require('../../assets/home.png')} />
                        <Text className="text-xs mt-1 text-primary">Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="items-center">
                        <Image source={require('../../assets/trending_up.png')} />
                        <Text className="text-xs mt-1 text-primary">Trending</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="items-center">
                        <Image source={require('../../assets/dollar.png')} />
                        <Text className="text-xs mt-1 text-primary">Dollar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="items-center">
                        <Image source={require('../../assets/history.png')} />
                        <Text className="text-xs mt-1 text-gray-500">History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="items-center">
                        <Image source={require('../../assets/profile.png')} />
                        <Text className="text-xs mt-1 text-gray-500">Profile</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};