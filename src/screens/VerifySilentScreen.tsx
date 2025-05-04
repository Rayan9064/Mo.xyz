import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { NavigationProp } from '../navigation/types';

export const VerifySilentScreen = ({ navigation }: { navigation: NavigationProp }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('SMSOTP');
        }, 2000); // 2 seconds delay
        
        // Clean up the timer when component unmounts
        return () => clearTimeout(timer);
    }, [navigation]);

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
                    Welcome. Now,{'\n'}let's get started.
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
                <View className="bg-white/10 rounded-lg py-3 px-4 mt-10 w-full">
                    <Text className="text-white text-xl font-medium text-center">Verifying...</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};