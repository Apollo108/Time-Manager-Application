import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import { Button, Icon } from '@material-ui/core/';
import styles from './sign_in_styles';

export default withStyles(styles)(
    class SignIn extends Component {
      render() {
        const { classes } = this.props;
        return (
          <div className={classes.signInWrapper}>
            <Button size="medium">
              Sign in
            </Button>
            <Button size="medium">
              Sign up
            </Button>
          </div>
        );
      }
    }
)

