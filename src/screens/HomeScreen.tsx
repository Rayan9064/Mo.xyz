import React, { useState } from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationProp } from '../navigation/types'; 
import { Icon } from '../components/Icon';  
import { AddMoneyModal } from '../components/AddMoneyModal';
import { BottomNavBar } from '../components/BottomNavBar';

export const HomeScreen = ({ navigation }: { navigation: NavigationProp }) => {
    const [showAddMoneyModal, setShowAddMoneyModal] = useState(false);

    return (
        <SafeAreaView className="flex-1 bg-home">
            <View className="flex-1">
                <ScrollView className="flex-1 px-4 pt-10">
                    <View className="flex-row justify-end items-center mt-4 mr-1">
                        <Text className="text-lg text-gray_1 font-bold">Need help?</Text>
                    </View>

                    <View className="mt-4 bg-white p-4 rounded-lg">
                        <View className="flex-row justify-between items-center">
                            <Text className="text-base font-medium text-gray_1">Total Balance</Text>
                            <TouchableOpacity className='flex-row items-center justify-center'>
                                <Text className="text-base text-gray_2">Virtual Accounts</Text>
                                <Image source={require('../../assets/arrow_right.png')} className="ml-2" />
                            </TouchableOpacity>
                        </View>

                        <Text className="text-4xl text-gray_1 font-semibold mt-2">US$1,233.99</Text>

                        <View className="flex-row justify-between mt-6">
                            <TouchableOpacity 
                                className="flex-1 bg-brand_green_3 py-3 px-8 rounded-2xl mr-4"
                                onPress={() => setShowAddMoneyModal(true)}
                            >
                                <Text className="text-white text-lg text-center font-medium">Add money</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="flex-1 bg-brand_green_3 py-3 px-8 rounded-2xl">
                                <Text className="text-white text-lg text-center font-medium">Withdraw</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View className="flex-row justify-between mt-6">
                        <TouchableOpacity className="bg-white p-4 rounded-lg flex-1 mr-4">
                            <View className="flex-row justify-between items-center">
                                <Text className="text-lg font-semibold">Cash</Text>
                            </View>
                            <Text className="text-2xl  front-gray_1 font-semibold mt-4">$233.33</Text>
                            <Text className="text-sm text-gray_3 mt-1">USDC</Text>
                        </TouchableOpacity>

                        <TouchableOpacity className="bg-white p-4 rounded-lg flex-1">
                            <View className="flex-row justify-between items-center">
                                <Text className="text-lg font-semibold">Earn</Text>
                                <Image source={require('../../assets/arrow_right.png')} className="ml-2" />
                            </View>
                            <Text className="text-2xl front-gray_1 font-semibold mt-4">$1,000.66</Text>
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
                </ScrollView>
                
                <BottomNavBar navigation={navigation} activeTab="home" />
            </View>

            <AddMoneyModal 
                visible={showAddMoneyModal}
                onClose={() => setShowAddMoneyModal(false)}
                navigation={navigation}
            />
        </SafeAreaView>
    );
};