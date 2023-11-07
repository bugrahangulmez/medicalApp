import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS, FONTS} from '../constants/constants';
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  scaleHeight,
  scaleWidth,
} from '../constants/scale';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import {useRef} from 'react';
const Onboarding = ({
  setStatus,
}: {
  setStatus: (status: 'active' | 'done') => void;
}) => {
  const insets = useSafeAreaInsets();
  console.log({insets, SCREEN_WIDTH, SCREEN_HEIGHT});

  const scaleX = useRef(new Animated.Value(0)).current;

  const onboardingRef = useRef<FlatList>(null);

  type OnboardingData = {
    title: String;
    description: String;
  };
  const onboardingData: OnboardingData[] = [
    {
      title: 'More Comfortable Chat With the Doctor',
      description:
        'Book an appointment with doctor. Chat with doctor via appointment letter and get consultation.',
    },
    {
      title: 'More Comfortable Chat With the Doctor 2',
      description:
        'Book an appointment with doctor. Chat with doctor via appointment letter and get consultation. 2',
    },
    {
      title: 'More Comfortable Chat With the Doctor 3',
      description:
        'Book an appointment with doctor. Chat with doctor via appointment letter and get consultation. 3',
    },
  ];

  function handleOnboardingData(data: {index: Number; item: OnboardingData}) {
    const {item} = data;
    return (
      <View style={styles.bottomCardContainer}>
        <Text style={styles.bottomCardTitle}>{item.title}</Text>
        <Text style={styles.bottomCardDescription}>{item.description}</Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={require('../assets/onboarding/texture.png')}
      style={styles.container}>
      <MaskedView
        style={styles.maskedView}
        maskElement={
          <View style={styles.maskedTextContainer}>
            <Text style={styles.textHeader}>HealTec</Text>
          </View>
        }>
        <LinearGradient
          style={{flex: 1}}
          colors={[COLORS.WHITE, COLORS.PRIMARY]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          locations={[0.2, 0.5]}
        />
      </MaskedView>
      <Image
        source={require('../assets/onboarding/image.png')}
        style={styles.image}
      />
      <View style={[styles.bottomCard, {paddingBottom: insets.bottom}]}>
        <FlatList
          ref={onboardingRef}
          style={styles.flatlist}
          horizontal
          pagingEnabled
          onScroll={e => {
            return (
              scaleX.setValue(e.nativeEvent.contentOffset.x),
              console.log(scaleX)
            );
          }}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          data={onboardingData}
          renderItem={handleOnboardingData}
        />
        <View style={styles.dotContainer}>
          {onboardingData.map((_, i) => {
            const width = scaleX.interpolate({
              inputRange: [
                (i - 1) * SCREEN_WIDTH,
                i * SCREEN_WIDTH,
                (i + 1) * SCREEN_WIDTH,
              ],
              outputRange: [scaleWidth(8), scaleWidth(24), scaleWidth(8)],
              extrapolate: 'clamp',
            });

            const backgroundColor = scaleX.interpolate({
              inputRange: [
                (i - 1) * SCREEN_WIDTH,
                i * SCREEN_WIDTH,
                (i + 1) * SCREEN_WIDTH,
              ],
              outputRange: [COLORS.FOURTH, COLORS.PRIMARY, COLORS.FIFTH],
              extrapolate: 'clamp',
            });

            const borderRadius = scaleX.interpolate({
              inputRange: [
                (i - 1) * SCREEN_WIDTH,
                i * SCREEN_WIDTH,
                (i + 1) * SCREEN_WIDTH,
              ],
              outputRange: [50, 4, 50],
              extrapolate: 'clamp',
            });

            return (
              <Animated.View
                style={{
                  width,
                  height: scaleWidth(8),
                  backgroundColor,
                  borderRadius,
                }}
                key={i}
              />
            );
          })}
        </View>
        <View
          style={{
            marginTop: scaleHeight(220),
            left: scaleWidth(24),
            right: scaleWidth(24),
          }}>
          {onboardingData.map((_, i) => {
            const scale = scaleX.interpolate({
              inputRange: [
                (i - 1) * SCREEN_WIDTH,
                i * SCREEN_WIDTH,
                (i + 1) * SCREEN_WIDTH,
              ],
              outputRange: [0, 1, 0],
              extrapolate: 'clamp',
            });
            const height = scaleX.interpolate({
              inputRange: [
                (i - 1) * SCREEN_WIDTH,
                i * SCREEN_WIDTH,
                (i + 1) * SCREEN_WIDTH,
              ],
              outputRange: [0, scaleHeight(52), 0],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={i}
                style={[
                  styles.buttonAnimatedView,
                  {
                    transform: [{scale}],
                    height,
                  },
                ]}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    if (i !== onboardingData.length - 1) {
                      Animated.timing(scaleX, {
                        useNativeDriver: false,
                        duration: 200,
                        toValue: (i + 1) * SCREEN_WIDTH,
                      }).start();
                      onboardingRef?.current?.scrollToOffset({
                        animated: true,
                        offset: (i + 1) * SCREEN_WIDTH,
                      });
                    } else {
                      setStatus('done');
                    }
                  }}>
                  <Text style={styles.buttonText}>
                    {i === onboardingData.length - 1 ? 'Get Started' : 'Next'}
                  </Text>
                </TouchableOpacity>
              </Animated.View>
            );
          })}
        </View>
      </View>
    </ImageBackground>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PRIMARY,
    flex: 1,
  },
  textHeader: {
    top: scaleHeight(68),
    left: scaleWidth(24),
    ...FONTS.bold({fontSize: 32, lineHeight: 38.4}),
    color: COLORS.WHITE,
  },
  maskedView: {
    flex: 1,
  },
  maskedTextContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  image: {
    width: scaleWidth(295),
    height: scaleHeight(458.7),
    top: scaleHeight(106),
    left: scaleWidth(44),
    right: scaleWidth(36),
    position: 'absolute',
  },
  bottomCard: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    width: SCREEN_WIDTH,
    height: scaleHeight(304),
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: scaleWidth(24),
    borderTopRightRadius: scaleWidth(24),
  },
  flatlist: {
    position: 'absolute',
  },
  bottomCardContainer: {
    width: scaleWidth(275),
    height: scaleHeight(132),
    marginLeft: scaleWidth(50),
    marginRight: scaleWidth(50),
    marginTop: scaleHeight(32),
    justifyContent: 'space-between',
  },
  bottomCardTitle: {
    ...FONTS.semibold({lineHeight: scaleHeight(32)}),
    textAlign: 'center',
  },
  bottomCardDescription: {
    ...FONTS.medium({fontSize: 14}),
    textAlign: 'center',
    color: COLORS.TEXT_GREY,
  },
  dotContainer: {
    width: scaleWidth(48),
    height: scaleHeight(8),
    top: scaleHeight(188),
    left: scaleWidth(175),
    right: scaleWidth(192),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dot: {
    borderRadius: 50,
    backgroundColor: COLORS.FOURTH,
    width: scaleWidth(8),
    height: scaleWidth(8),
  },
  buttonAnimatedView: {
    width: scaleWidth(327),
    backgroundColor: COLORS.PRIMARY,
    borderRadius: scaleWidth(12),
  },
  button: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    ...FONTS.semibold({fontSize: 14}),
    color: COLORS.WHITE,
  },
});
