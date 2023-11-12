import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import React, {useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {scaleHeight, scaleWidth} from '../constants/scale';
import {COLORS, FONTS} from '../constants/constants';

const DocAboutCard = ({description}: {description: string}) => {
  const insets = useSafeAreaInsets();
  const [isShownText, setIsShownText] = useState(false);
  function toggleText() {
    setIsShownText(prev => !prev);
  }
  return (
    <View
      style={[
        styles.container,
        {top: scaleHeight(518) - scaleHeight(64) - insets.top},
      ]}>
      <Text style={styles.header}>About Me</Text>
      <Text style={styles.description}>
        {!isShownText ? description.slice(0, 147) : description}
        <TouchableWithoutFeedback onPress={toggleText}>
          <Text style={{color: COLORS.PRIMARY}}>
            {isShownText ? ' Read Less' : ' Read More...'}
          </Text>
        </TouchableWithoutFeedback>
      </Text>
    </View>
  );
};

export default DocAboutCard;

const styles = StyleSheet.create({
  container: {
    left: scaleWidth(24),
    right: scaleWidth(24),
    width: scaleWidth(327),
    height: scaleHeight(86),
    justifyContent: 'space-between',
  },
  header: {
    ...FONTS.semibold({fontSize: 16, lineHeight: 24}),
  },
  description: {
    ...FONTS.medium({fontSize: 12, lineHeight: 18}),
    color: COLORS.TEXT_GREY,
  },
});
