import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SCREEN_WIDTH, scaleHeight, scaleWidth} from '../constants/scale';
import {COLORS, FONTS} from '../constants/constants';
import {
  NotificationIcon,
  SearchIcon,
  CategoryIcon,
  Symptoms,
  DocSliderHeader,
  DocList,
  TopDoc,
} from '../components';

const Home = () => {
  const doctors = [
    {
      name: 'Dr. Friska',
      hospital: 'Rumeli',
      department: 'Utritionists',
      star: 4.5,
      image: require('../assets/onboarding/image_2.png'),
    },
    {
      name: 'Dr. Lidya Bey',
      hospital: 'Memorial',
      department: 'Utritionists',
      star: 4.5,
      image: require('../assets/onboarding/image_4.png'),
    },
  ];
  const topDoc: Doctor = {
    name: 'Dr. Berlin Elizerd',
    department: 'Cardiologists',
    hospital: 'Mars Hostpital',
    star: 4.7,
    image: require('../assets/onboarding/image_5.png'),
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/onboarding/texture.png')}
        style={styles.headerCard}>
        <Image
          source={require('../assets/home/avatar.png')}
          style={styles.image}
        />
        <View style={styles.headerCardTextContainer}>
          <Text style={styles.headerCardTitle}>Hello, Welcome 🎉</Text>
          <Text style={styles.headerCardUser}>Leonardo thapinci</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity activeOpacity={0.7}>
            <NotificationIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.textInputContainer}>
          <TouchableOpacity activeOpacity={0.7}>
            <SearchIcon />
          </TouchableOpacity>
          <TextInput
            placeholder="Search Doctor..."
            placeholderTextColor={'rgba(255,255,255,0.9)'}
            style={styles.textInput}
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus={false}
          />
          <TouchableOpacity activeOpacity={0.7}>
            <CategoryIcon />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.syptomContainer}>
        <Text style={styles.symptomText}>Your symptoms ?</Text>
      </View>
      <View style={styles.syptomListContainer}>
        <Symptoms />
      </View>
      <DocSliderHeader title="Favourite Doctor" top={343} />
      <DocList doctors={doctors} top={383} />
      <DocSliderHeader title="Top Doctor" top={557} />
      <TopDoc doctor={topDoc} top={597} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  headerCard: {
    width: SCREEN_WIDTH,
    height: scaleHeight(218),
    borderBottomLeftRadius: scaleWidth(8),
    borderBottomRightRadius: scaleWidth(8),
    backgroundColor: COLORS.PRIMARY,
  },
  image: {
    borderRadius: 50,
    width: scaleWidth(48),
    height: scaleWidth(48),
    top: scaleHeight(69),
    left: scaleWidth(24),
    right: scaleWidth(303),
  },
  headerCardTextContainer: {
    width: scaleWidth(142),
    height: scaleHeight(49),
    top: scaleHeight(68),
    left: scaleWidth(84),
    position: 'absolute',
  },
  headerCardTitle: {
    ...FONTS.regular({lineHeight: scaleHeight(21)}),
    color: COLORS.WHITE,
  },
  headerCardUser: {
    ...FONTS.bold({fontSize: scaleWidth(16), lineHeight: scaleHeight(24)}),
    color: COLORS.WHITE,
  },
  iconContainer: {
    top: scaleHeight(73),
    right: scaleWidth(24),
    position: 'absolute',
  },
  textInputContainer: {
    width: scaleWidth(327),
    height: scaleHeight(53),
    borderRadius: scaleWidth(16),
    top: scaleHeight(141),
    left: scaleWidth(24),
    right: scaleWidth(24),
    borderColor: 'rgba(255,255,255,0.9)',
    borderWidth: scaleWidth(1),
    position: 'absolute',
    flexDirection: 'row',
    padding: scaleWidth(16),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    width: scaleWidth(239),
    height: scaleHeight(21),
    color: COLORS.WHITE,
  },
  syptomContainer: {
    width: scaleWidth(143),
    height: scaleHeight(24),
    left: scaleWidth(24),
    top: scaleHeight(242),
    position: 'absolute',
  },
  symptomText: {
    ...FONTS.bold({fontSize: 16, lineHeight: 24}),
  },
  syptomListContainer: {
    width: scaleWidth(331),
    height: scaleHeight(37),
    position: 'absolute',
    top: scaleHeight(282),
    left: scaleWidth(24),
    right: scaleWidth(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  symptomView: {
    backgroundColor: COLORS.PRIMARY,
    borderRadius: scaleWidth(8),
  },
  symptomButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scaleWidth(12),
    paddingVertical: scaleHeight(8),
  },
  symptomButtonText: {
    ...FONTS.regular({fontSize: 14, lineHeight: 21}),
    color: COLORS.WHITE,
  },
  favDoctorsContainer: {
    position: 'absolute',
    width: scaleWidth(327),
    height: scaleHeight(24),
    top: scaleHeight(343),
    backgroundColor: 'red',
    left: scaleWidth(24),
    right: scaleWidth(24),
  },
});
