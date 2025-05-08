import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { NavigationProp } from '../navigation/types';

interface BottomNavBarProps {
    navigation: NavigationProp;
    activeTab?: 'home' | 'trending' | 'dollar' | 'history' | 'profile';
}

export const BottomNavBar = ({ navigation, activeTab = 'home' }: BottomNavBarProps) => {
    return (
        <View className="absolute bottom-0 left-0 right-0">
            <View className="flex-row justify-between items-center px-8 py-4 bg-white border-t border-gray-200">
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image 
                        source={require('../../assets/home.png')} 
                        className={activeTab === 'home' ? "tint-brand_green_3" : "opacity-50"} 
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image 
                        source={require('../../assets/trending_up.png')} 
                        className={activeTab === 'trending' ? "tint-brand_green_3" : "opacity-50"} 
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image 
                        source={require('../../assets/dollar.png')} 
                        className={activeTab === 'dollar' ? "tint-brand_green_3" : "opacity-50"} 
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image 
                        source={require('../../assets/history.png')} 
                        className={activeTab === 'history' ? "tint-brand_green_3" : "opacity-50"} 
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image 
                        source={require('../../assets/profile.png')} 
                        className={activeTab === 'profile' ? "tint-brand_green_3" : "opacity-50"} 
                    />
                </TouchableOpacity>
            </View>
            <View className="h-8 bg-white" />
        </View>
    );
};