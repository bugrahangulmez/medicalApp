import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageProps,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SCREEN_WIDTH, scaleHeight, scaleWidth} from '../constants/scale';
import {COLORS, FONTS} from '../constants/constants';
import DocStarSvg from '../svg/DocStarSvg';
import LikeIconSvg from '../svg/LikeIconSvg';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {toggleFav} from '../redux/features/docSlice';

interface Doctor {
  name: string;
  department: string;
  hospital: string;
  star: number;
  image: ImageProps;
}
const DocList = ({doctors, top}: {doctors: Doctor[]; top: number}) => {
  const doctorList = useAppSelector(store => store.doctor);
  const dispatch = useAppDispatch();

  return (
    <View style={[styles.container, {top: scaleHeight(top)}]}>
      <FlatList
        style={styles.flatlist}
        horizontal
        data={doctors}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.cardContainer}>
              <View>
                <Image
                  source={item.image}
                  style={{
                    height: scaleHeight(96),
                    width: scaleWidth(154),
                    borderTopLeftRadius: scaleWidth(8),
                    borderTopRightRadius: scaleWidth(8),
                  }}
                />
                <View style={styles.likeIconContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(toggleFav(item));
                    }}>
                    <LikeIconSvg
                      isLiked={doctorList.list.some(
                        doc => doc.name === item.name,
                      )}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.cardTextContainer}>
                <Text style={styles.docName}>{item.name}</Text>
                <Text style={styles.deparment}>
                  {item.department} - {item.hospital}
                </Text>
                <View style={styles.starContainer}>
                  <DocStarSvg />
                  <Text style={styles.star}>{item.star}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default DocList;
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: SCREEN_WIDTH,
  },
  flatlist: {
    paddingLeft: scaleWidth(24),
    paddingBottom: scaleHeight(14),
  },
  cardContainer: {
    marginRight: scaleWidth(20),
    backgroundColor: COLORS.WHITE,
  },
  cardTextContainer: {
    height: scaleHeight(58),
    width: scaleWidth(153),
    padding: scaleWidth(8),
    justifyContent: 'space-between',
    backgroundColor: COLORS.WHITE,
    shadowColor: '#222222',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    borderBottomRightRadius: scaleWidth(8),
    borderBottomLeftRadius: scaleWidth(8),
  },

  docName: {
    ...FONTS.medium({fontSize: 14, lineHeight: 20}),
  },
  deparment: {
    ...FONTS.medium({fontSize: 12, lineHeight: 18}),
    color: COLORS.TEXT_GREY,
  },
  starContainer: {
    position: 'absolute',
    top: scaleHeight(8),
    right: scaleWidth(8),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: scaleWidth(8),
  },
  star: {
    ...FONTS.medium({fontSize: 12, lineHeight: 18}),
  },
  likeIconContainer: {
    position: 'absolute',
    top: scaleHeight(4),
    right: scaleWidth(5),
  },
});
