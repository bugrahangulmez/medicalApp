import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {COLORS} from '../constants/constants';

const HomeIconSvg = ({color, ...props}: SvgProps & {color: String}) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fill={color ?? '#4C4DDC'}
      stroke={color === COLORS.PRIMARY ? '#FFFF' : '#4C4DDC'}
      d="M7.612 17.311v-2.548c0-.65.531-1.178 1.187-1.178h2.395c.314 0 .616.124.839.345.222.221.347.52.347.833v2.548c-.002.27.105.53.297.723.192.191.453.3.725.3h1.635a2.883 2.883 0 0 0 2.036-.833c.54-.535.844-1.262.844-2.02V8.223a2.06 2.06 0 0 0-.747-1.585L11.613 2.23a2.581 2.581 0 0 0-3.29.06L2.888 6.636a2.062 2.062 0 0 0-.806 1.585v7.252a2.87 2.87 0 0 0 2.88 2.86H6.56c.566 0 1.026-.454 1.03-1.015l.022-.008Z"
    />
  </Svg>
);
export default HomeIconSvg;
