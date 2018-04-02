import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Button from '../src/app/components/Button';
import Input from '../src/app/components/Input';
import BubbleTag from '../src/app/components/BubbleTag';
import HeartButton from '../src/app/components/HeartButton';

storiesOf('Interactions', module)
  .add('Button', () => (
    <Button onClick={action('onClick')}>Button</Button>
  ))
  .add('FilterButton', () => (
    <div>
      <Button.filter onClick={action('onClick')}>Filter</Button.filter>
      <Button.filter active onClick={action('onClick')}>Active</Button.filter>
    </div>
  ))
  .add('Input', () => (
    <div>
      <Input onChange={action('onChange')} my="1em" />
      <Input.search onChange={action('onChange')} my="1em" />
      <Input.bubble nChange={action('onChange')} my="1em" />
    </div>
  ))
  .add('BubbleTag', () => (
    <div>
      <BubbleTag onClick={action('onClick')}>分類一</BubbleTag>
    </div>
  ))
  .add('HeartButton', () => (
    <div>
      <HeartButton onClick={action('onClick')} />
    </div>
  ));
