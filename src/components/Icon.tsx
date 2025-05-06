import React from 'react';
import { Image, ImageProps } from 'react-native';

interface IconProps extends Omit<ImageProps, 'source'> {
  name: 'cross_arrows' | 'dollar' | 'trending_up' | 'send_money' | 'home' | 'history' | 'profile';
}

export const Icon: React.FC<IconProps> = ({ name, style, ...props }) => {
  let source;
  switch (name) {
    case 'cross_arrows':
      source = require('../../assets/cross_arrows.png');
      break;
    case 'dollar':
      source = require('../../assets/dollar.png');
      break;
    case 'trending_up':
      source = require('../../assets/trending_up.png');
      break;
    case 'send_money':
      source = require('../../assets/send_money.png');
      break;
    case 'home':
      source = require('../../assets/home.png');
      break;
    case 'history':
      source = require('../../assets/history.png');
      break;
    case 'profile':
      source = require('../../assets/profile.png');
      break;
    default:
      return null;
  }
  
  return <Image source={source} style={style} {...props} />;
};