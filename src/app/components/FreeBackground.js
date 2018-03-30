import styled from 'styled-components';
import { backgroundSize, backgroundPosition } from 'styled-system';

import Box from './Box';

const FreeBackground = styled(Box.relative)`
  background-image: url(${({ src }) => src});
  ${backgroundSize}
  ${backgroundPosition}
`;

FreeBackground.defaultProps = {
  backgroundSize: 'cover',
  backgroundPosition: '50% 50%',
};

export default FreeBackground;
