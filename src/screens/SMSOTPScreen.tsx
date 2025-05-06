import React, { useState, useRef, useEffect } from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, TextInput } from 'react-native';
import { NavigationProp } from '../navigation/types';

export const SMSOTPScreen = ({ navigation }: { navigation: NavigationProp }) => {
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef<TextInput[]>([]);

    useEffect(() => {
        if (code.every(digit => digit !== '')) {
            const timer = setTimeout(() => {
                navigation.navigate('CreateWallet');
            }, 2000); // 2 seconds delay
            
            return () => clearTimeout(timer);
        }
    }, [code, navigation]);

    const handleCodeChange = (text: string, index: number) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);
        
        if (text !== '' && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyPress = (e: any, index: number) => {
        if (e.nativeEvent.key === 'Backspace' && index > 0 && code[index] === '') {
            inputRefs.current[index - 1]?.focus();
        }
    };

    return (
        <SafeAreaView className="flex-1 bg-brand_green p-5">
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
                <View className="rounded-lg p-4 flex-row items-center">
                    <Image
                        source={require('../../assets/mobile.png')}
                        className='mr-6'
                    />
                    <Text className="text-white text-lg">+456 1234 5678</Text>
                </View>
                <View className="flex-row justify-between mt-10">
                    {code.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={(ref) => {
                                if (ref) {
                                    inputRefs.current[index] = ref;
                                }
                            }}
                            className="bg-brand_green border-2 border-white/20 w-[50px] h-[50px] rounded-lg text-white text-2xl text-center"
                            keyboardType="numeric"
                            maxLength={1}
                            value={digit}
                            onChangeText={text => handleCodeChange(text, index)}
                            onKeyPress={e => handleKeyPress(e, index)}
                            selectionColor="white"
                        />
                    ))}
                </View>
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