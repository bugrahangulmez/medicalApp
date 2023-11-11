import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const ReviewStarIconSvg = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#4C4DDC"
      d="m21.284 8.276-5.951-.865-2.66-5.393a.753.753 0 0 0-1.345 0l-2.66 5.393-5.952.865a.749.749 0 0 0-.414 1.28l4.305 4.197L5.59 19.68a.749.749 0 0 0 1.087.79L12 17.672l5.323 2.798a.749.749 0 0 0 1.087-.79l-1.017-5.927 4.305-4.198a.748.748 0 0 0 .218-.428.747.747 0 0 0-.632-.851Z"
    />
  </Svg>
);
export default ReviewStarIconSvg;
