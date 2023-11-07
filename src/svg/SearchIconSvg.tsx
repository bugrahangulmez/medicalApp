import * as React from 'react';
import Svg, {SvgProps, Circle, Path} from 'react-native-svg';
const SearchIconSvg = (props: SvgProps) => (
  <Svg width={20} height={21} fill="none" {...props}>
    <Circle
      cx={9.805}
      cy={10.306}
      r={7.49}
      stroke="#EDEDED"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke="#EDEDED"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.015 15.904 2.937 2.93"
    />
  </Svg>
);
export default SearchIconSvg;
