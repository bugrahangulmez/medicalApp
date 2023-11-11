import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const DocStarSvg = ({
  width,
  height,
  ...props
}: SvgProps & {width?: number; height?: number}) => (
  <Svg width={width ?? 16} height={height ?? 16} fill="none" {...props}>
    <Path
      fill="#FFD33C"
      d="m14.19 5.517-3.968-.576-1.774-3.596a.502.502 0 0 0-.897 0L5.779 4.941l-3.967.576a.5.5 0 0 0-.277.853l2.87 2.799-.677 3.951a.5.5 0 0 0 .725.527L8 11.78l3.548 1.866a.5.5 0 0 0 .725-.527l-.678-3.951 2.87-2.799a.498.498 0 0 0-.277-.853Z"
    />
  </Svg>
);
export default DocStarSvg;
