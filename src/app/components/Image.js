import styled from 'styled-components';
import tag from 'clean-tag';
import {
  space,
  width,
} from 'styled-system';

import blacklist from './utils/blacklist';

const Image = styled(tag.img)`
  ${space}
  ${width}
`;

Image.defaultProps = {
  blacklist,
  w: 1,
};

export default Image;
