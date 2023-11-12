import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const CallIconSvg = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M9.61 10.394c3.324 3.323 4.078-.522 6.195 1.593 2.04 2.04 3.213 2.449.628 5.034-.324.26-2.382 3.39-9.613-3.838-7.231-7.23-4.102-9.29-3.842-9.613C5.57.978 5.972 2.158 8.012 4.198 10.13 6.314 6.286 7.07 9.61 10.394Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default CallIconSvg;
