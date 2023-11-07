import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useCallback} from 'react';
import {COLORS, FONTS} from '../constants/constants';
import {scaleHeight, scaleWidth} from '../constants/scale';

const Symptoms = () => {
  const symtomps: String[] = ['🤧 Snuffle', '🤒 High Fever', '🤮 Nauseous'];
  const [active, setActive] = useState<any[]>([]);

  console.log('Symptoms component rendered');

  const toggleSymptom = useCallback(
    (item: String) => {
      return () => {
        setActive(prev => {
          if (prev.includes(item)) {
            return prev.filter(val => val !== item);
          } else {
            return [...prev, item];
          }
        });
      };
    },
    [active],
  );

  return (
    <>
      <FlatList
        data={symtomps}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View
              style={{
                backgroundColor: active.includes(item)
                  ? COLORS.PRIMARY
                  : COLORS.FIFTH,
                borderRadius: scaleWidth(8),
                marginHorizontal: scaleWidth(4),
              }}>
              <TouchableOpacity
                style={styles.symptomButton}
                onPress={toggleSymptom(item)}>
                <Text
                  style={{
                    ...FONTS.regular({fontSize: 14, lineHeight: 21}),
                    color: active.includes(item)
                      ? COLORS.WHITE
                      : COLORS.SECOND_GREY,
                  }}>
                  {item}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </>
  );
};

export default Symptoms;

const styles = StyleSheet.create({
  symptomButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scaleWidth(12),
    paddingVertical: scaleHeight(8),
  },
});
