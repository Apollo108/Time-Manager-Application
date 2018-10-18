import React, {Component} from 'react';
import {Provider} from 'mobx-react';
import {withStyles} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';
import stores from './stores';
import styles from './app_styles';

import Pane from "./Containers/Pane/Pane";
import SignIn from "./Containers/SignIn/SignIn";
import Calendar from "./Containers/Calendar/Calendar";

export default withStyles(styles)(
  class App extends Component {
    render() {
      const {classes} = this.props;
      return (
        <Provider {...stores}>
          <CssBaseline>
            <div className={classes.appContainer}>
              <div className={classes.panesWrapper}>
                <Pane
                  partOfDay={'AM'}
                  urgency={'Urgent'}
                />
                <Pane
                  partOfDay={'AM'}
                  urgency={'Not Urgent'}
                />
                <Pane
                  partOfDay={'PM'}
                  urgency={'Urgent'}
                />
                <Pane
                  partOfDay={'PM'}
                  urgency={'Not Urgent'}
                />
              </div>
              <div className={classes.aside}>
                <SignIn/>
                <Calendar/>
              </div>
            </div>
          </CssBaseline>
        </Provider>
      );
    }
  }
)

