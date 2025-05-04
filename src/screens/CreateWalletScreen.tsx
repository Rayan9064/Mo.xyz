import React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { NavigationProp } from '../navigation/types';

export const CreateWalletScreen = ({ navigation }: { navigation: NavigationProp }) => {
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
                    One last thing, a{'\n'}Smart Wallet
                </Text>
            </View>

            <View className="flex-1 justify-between">
                <View className="mt-10">
                    <TouchableOpacity className="bg-white/10 rounded-xl p-2">
                        <Text className="text-white text-center text-lg font-medium">Create a wallet</Text>
                    </TouchableOpacity>

                    <View className="mt-8 space-y-12">
                        <View className="mt-4 flex-row items-start space-x-4">
                            <Image
                                source={require('../../assets/file.png')}
                                className='m-auto mr-2'
                            />
                            <Text className="text-white text-base flex-1">
                                Make sure to back up your passkey{'\n'}to your Google or Apple account.
                            </Text>
                        </View>

                        <View className="flex-row items-start space-x-4">
                            <Image
                                source={require('../../assets/link.png')}
                                className='m-auto mr-2'
                            />
                            <View className="flex-1">
                                <Text className="text-white text-base">
                                    If you previously used Mo, please{'\n'}
                                    <Text className="underline">verify your passkey</Text> to link a wallet.
                                </Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity className="mt-10">
                        <Text className="text-white text-xl font-medium text-center">Need help?</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );
};