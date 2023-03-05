import './App.css';
import api from './util/axios';
import { useEffect, useState } from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { theme, Button, IconButton, Alert }   from './theme/index';

export const itemList = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    api.get('/api/items')
    .then(response => {
      setItems(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  }, []);

  return (
    <header className="App-header">
      <Box p="16px" display="flex" flexDirection="row" gap="8px">
        {items.map(item => {
          return (
            
              <Button colorScheme="blue" color="brand.900" key={item.id}>{item.name}</Button>
            
            )
        })}
      </Box>
      <Box p="16px" display="flex" flexDirection="row" gap="8px">
        {items.map(item => {
          return (
            
              <IconButton variant="primary" key={item.id}>{item.link}</IconButton>
            
            )
        })}
      </Box>
      <Alert>Hello</Alert>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}
