import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {COLORS} from '../constants/constants';

const ProfileIconSvg = ({color, ...props}: SvgProps & {color: String}) => (
  <Svg width={25} height={24} fill="none" {...props}>
    <Path
      stroke={color === COLORS.PRIMARY ? '#4C4DDC' : COLORS.SECOND_GREY}
      fill={color === COLORS.PRIMARY ? '#4C4DDC' : COLORS.WHITE}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.485 15.346c-3.868 0-7.17.585-7.17 2.927s3.281 2.948 7.17 2.948c3.867 0 7.17-.586 7.17-2.927s-3.282-2.948-7.17-2.948Z"
      clipRule="evenodd"
    />
    <Path
      stroke={color === COLORS.PRIMARY ? '#4C4DDC' : COLORS.SECOND_GREY}
      fill={color === COLORS.PRIMARY ? '#4C4DDC' : COLORS.WHITE}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M12.485 12.006A4.596 4.596 0 1 0 7.889 7.41a4.58 4.58 0 0 0 4.563 4.596h.033Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default ProfileIconSvg;
