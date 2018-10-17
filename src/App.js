import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import Grid from '@material-ui/core/Grid';
import stores from './stores';

class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Grid container>

        </Grid>
      </Provider>
    );
  }
}

export default App;
