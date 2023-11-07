import type {TextStyle} from 'react-native';

export const COLORS = {
  PRIMARY: '#4C4DDC',
  SECOND: '#CDCDF8',
  THIRD: '#DBDBF8',
  FOURTH: '#DFE0F3',
  FIFTH: '#F5F5FF',
  WHITE: '#FFFF',
  TEXT_GREY: '#878787',
  SECOND_GREY: '#A0A6B1',
};

export const FONTS = {
  regular: (args?: TextStyle): TextStyle => {
    return {
      fontSize: args?.fontSize ?? 14,
      lineHeight: args?.lineHeight ?? 24,
      fontFamily: 'Inter-Regular',
    };
  },
  medium: (args?: TextStyle): TextStyle => {
    return {
      fontSize: args?.fontSize ?? 16,
      lineHeight: args?.lineHeight ?? 20,
      fontFamily: 'Inter-Medium',
    };
  },
  semibold: (args?: TextStyle): TextStyle => {
    return {
      fontSize: args?.fontSize ?? 24,
      lineHeight: args?.lineHeight ?? 20,
      fontFamily: 'Inter-SemiBold',
    };
  },
  bold: (args?: TextStyle): TextStyle => {
    return {
      fontSize: args?.fontSize ?? 36,
      lineHeight: args?.lineHeight ?? 48,
      fontFamily: 'Inter-Bold',
    };
  },
};
