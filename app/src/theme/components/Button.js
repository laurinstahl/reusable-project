import { Button as ChakraButton } from '@chakra-ui/react';

const Button = (props) => {
  return <ChakraButton  {...props} />;
}

const IconButton = (props) => {
  return <ChakraButton  {...props}><p>ℹ️</p></ChakraButton>;
}

export { IconButton, Button };