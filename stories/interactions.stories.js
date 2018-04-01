import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Button from '../src/app/components/Button';
import Input from '../src/app/components/Input';

storiesOf('Input', module)
  .add('Button', () => (
    <Button onClick={action('onClick')}>Button</Button>
  ))
  .add('Input', () => (
    <div>
      <Input onChange={action('onChange')} my="1em" />
      <Input.search onChange={action('onChange')} my="1em" />
      <Input.bubble nChange={action('onChange')} my="1em" />
    </div>
  ));
