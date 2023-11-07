import type {
  BottomTabScreenProps,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Appointments, Documents, Home, Profile} from '../screens';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {SCREEN_WIDTH, scaleHeight, scaleWidth} from '../constants/scale';
import {COLORS} from '../constants/constants';
import HomeIconSvg from '../svg/HomeIconSvg';
import DocumentIconSvg from '../svg/DocumentIconSvg';
import ProfileIconSvg from '../svg/ProfileIconSvg';
import CalenderIconSvg from '../svg/CalenderIconSvg';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type RootTabBarParamList = {
  Home: undefined;
  Documents: undefined;
  Profile: undefined;
  Appointments: undefined;
};
export type TabBarProps = BottomTabScreenProps<RootTabBarParamList, 'Home'>;
const TabBarNav = () => {
  const TabBar = createBottomTabNavigator<RootTabBarParamList>();
  const insets = useSafeAreaInsets();
  function MyTabBar({state, descriptors, navigation}: BottomTabBarProps) {
    return (
      <View style={[styles.container, {paddingBottom: insets.bottom}]}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          let Icon = HomeIconSvg;
          if (label === 'Home') Icon = HomeIconSvg;
          if (label === 'Appointments') Icon = CalenderIconSvg;
          if (label === 'Documents') Icon = DocumentIconSvg;
          if (label === 'Profile') Icon = ProfileIconSvg;

          return (
            <View key={index} style={[styles.buttonContainerOuter]}>
              <View
                style={[
                  styles.buttonContainer,
                  {
                    backgroundColor: isFocused ? COLORS.FIFTH : COLORS.WHITE,
                  },
                ]}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  accessibilityRole="button"
                  accessibilityState={isFocused ? {selected: true} : {}}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  testID={options.tabBarTestID}
                  onPress={onPress}
                  onLongPress={onLongPress}
                  style={styles.button}>
                  <Icon
                    style={styles.icon}
                    color={isFocused ? COLORS.PRIMARY : COLORS.WHITE}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>
    );
  }

  return (
    <TabBar.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <MyTabBar {...props} />}>
      <TabBar.Screen name="Home" component={Home} />
      <TabBar.Screen name="Appointments" component={Appointments} />
      <TabBar.Screen name="Documents" component={Documents} />
      <TabBar.Screen name="Profile" component={Profile} />
    </TabBar.Navigator>
  );
};

export default TabBarNav;

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: scaleHeight(72),
    borderTopLeftRadius: scaleWidth(20),
    borderTopRightRadius: scaleWidth(20),
    flexDirection: 'row',
    paddingLeft: scaleWidth(24),
    paddingRight: scaleWidth(24),
    paddingTop: scaleHeight(16),
    paddingBottom: scaleHeight(24),
    alignItems: 'center',
    gap: scaleWidth(16),
    position: 'absolute',
    bottom: 0,
    backgroundColor: COLORS.WHITE,
    shadowColor: '#222222',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: scaleWidth(40),
    height: scaleWidth(40),
    borderRadius: 50,
  },
  button: {
    flex: 1,
    width: scaleWidth(20),
    height: scaleWidth(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: scaleWidth(20),
    height: scaleHeight(20),
  },
  buttonContainerOuter: {
    width: scaleWidth(81),
  },
});
