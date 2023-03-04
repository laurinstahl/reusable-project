import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../components/Button';

storiesOf('Button', module)
  .add('default', () => <Button>Click me</Button>)
  .add('disabled', () => <Button disabled>Can't click me</Button>);