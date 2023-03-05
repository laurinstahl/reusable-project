import './App.css';
import api from './util/axios';
import { useEffect, useState } from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { theme, Button, IconButton, Alert }   from './theme/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ItemList, ItemDetails } from './pages/index';

function App() {

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
    <ChakraProvider theme={theme}>
      <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={ItemList} />
          <Route exact path="/item/:id" component={ItemDetails} />
        </Switch>

      </Router>
      </div>
      </ChakraProvider>
    );
}

export default App;
