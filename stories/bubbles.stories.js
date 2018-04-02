import React from 'react';
import range from 'lodash/range';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Text from '../src/app/components/Text';
import Flex from '../src/app/components/Flex';
import BubbleShape from '../src/app/components/BubbleShape';
import BubbleButton from '../src/app/components/BubbleButton';
import SocialBubble from '../src/app/components/SocialBubble';
import ProjectBubble from '../src/app/components/ProjectBubble';

storiesOf('Bubbles', module)
  .add('Shape', () => (
    <div>
      BubbleShape
      <Flex>
        {range(4).map((i) => (
          <BubbleShape
            key={i}
            apex={i}
            w="10em"
            bg="teal"
            m="1rem"
          >
            <Text f="4em" fontWeight="bold">{i}</Text>
          </BubbleShape>
        ))}
      </Flex>
      <Flex>
        {range(4).map((i) => (
          <BubbleShape.border
            key={i}
            apex={i}
            w="10em"
            borderColor="teal"
            m="1rem"
          >
            <Text f="4em" fontWeight="bold">{i}</Text>
          </BubbleShape.border>
        ))}
      </Flex>
    </div>
  ))
  .add('Button', () => (
    <div>
      BubbleButton
      <Flex p="2em">
        <BubbleButton scale w="6em" mx="1em" onClick={action('onClick')}>
          Button
        </BubbleButton>
        <BubbleButton scale w="6em" mx="1em" onClick={action('onClick')} apex={3}>
          Button
        </BubbleButton>
      </Flex>
    </div>
  ))
  .add('Social', () => (
    <div>
      SocialBubble
      <Flex p="2em">
        <SocialBubble.facebook mx="1em" onClick={action('Facebook')} />
        <SocialBubble.pinterest mx="1em" onClick={action('Pinterest')} />
        <SocialBubble.twitter mx="1em" onClick={action('Twitter')} />
      </Flex>
      <Flex p="2em" bg="darkGray">
        <SocialBubble.facebook white mx="1em" onClick={action('Facebook')} />
        <SocialBubble.pinterest white mx="1em" onClick={action('Pinterest')} />
        <SocialBubble.twitter white mx="1em" onClick={action('Twitter')} />
      </Flex>
    </div>
  ))
  .add('ProjectBubble', () => (
    <div>
      ProjectBubble
      <ProjectBubble
        w="25em"
        title="作品名稱"
        short="敘述內容敘述內容敘述內容敘述內容敘述內容敘述內容"
        slug="project1"
        preview="//via.placeholder.com/640x640"
      />
    </div>
  ));
