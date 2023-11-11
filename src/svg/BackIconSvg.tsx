import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const BackIconSvg = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#101010"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="m15.5 19-7-7 7-7"
    />
  </Svg>
);
export default BackIconSvg;
