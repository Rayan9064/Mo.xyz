import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Modal, Image, Animated, PanResponder, TouchableWithoutFeedback } from 'react-native';
import { NavigationProp } from '../navigation/types';

interface AddMoneyModalProps {
    visible: boolean;
    onClose: () => void;
    navigation: NavigationProp;
}

export const AddMoneyModal = ({ visible, onClose, navigation }: AddMoneyModalProps) => {
    const pan = useRef(new Animated.ValueXY()).current;
    const translateY = useRef(new Animated.Value(0)).current;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (_, gesture) => {
            if (gesture.dy > 0) { // Only allow downward drag
                Animated.event([null, { dy: pan.y }], {
                    useNativeDriver: false,
                })(_, gesture);
            }
        },
        onPanResponderRelease: (_, gesture) => {
            if (gesture.dy > 100) { // If dragged down more than 100 units
                onClose();
            } else {
                Animated.spring(pan.y, {
                    toValue: 0,
                    useNativeDriver: false,
                }).start();
            }
        },
    });

    const modalStyle = {
        transform: pan.getTranslateTransform()
    };

    const handleDefiWalletPress = () => {
        onClose();
        navigation.navigate('DefiWallet');
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback onPress={onClose}>
                <View className="flex-1 bg-black/50 justify-end">
                    <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
                        <Animated.View style={modalStyle} className="bg-white rounded-t-3xl">
                            <View {...panResponder.panHandlers} className="items-center py-2">
                                <Image source={require('../../assets/handle.png')} className="w-8 h-1" />
                            </View>

                            <View className="px-6 pb-6">
                                <Text className="text-xl text-gray_1 font-semibold my-8 text-center">Add money</Text>
                                
                                <View className="space-y-4 mx-[15%] mt-8 mb-16">
                                    <TouchableOpacity 
                                        className="bg-gray_7 py-3.5 px-4 rounded-xl"
                                        onPress={() => {
                                            onClose();
                                            navigation.navigate('BanksAndCards');
                                        }}
                                    >
                                        <Text className="text-gray-900 text-base text-center">from Banks and Cards</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity 
                                        className="bg-gray_7 py-3.5 px-4 rounded-xl"
                                        onPress={handleDefiWalletPress}
                                    >
                                        <Text className="text-gray-900 text-base text-center">from DeFi Wallet</Text>
                                    </TouchableOpacity>
                                </View>

                                <TouchableOpacity 
                                    className="bg-brand_green_3 py-3.5 rounded-xl"
                                    onPress={() => {}}
                                >
                                    <Text className="text-white text-center text-base font-medium">Add</Text>
                                </TouchableOpacity>
                            </View>
                        </Animated.View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};