import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import { Button, Modal, Typography, TextField } from '@material-ui/core/';
import styles from './sign_in_styles';

export default withStyles(styles)(
    class SignIn extends Component {
      state = {
        isModalOpen: false,
      }
      handleOpen = () => {
        this.setState({ isModalOpen: true });
      };

      handleClose = () => {
        this.setState({ isModalOpen: false });
      };
      render() {
        const { classes } = this.props;
        return (
          <div className={classes.signInWrapper}>
            <Button size="medium" onClick={this.handleOpen}>
              Sign in
            </Button>
            <Button size="medium" onClick={this.handleOpen}>
              Sign up
            </Button>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.isModalOpen}
              onClose={this.handleClose}
              className={classes.backDrop}
            >
              <div className={classes.modal}>
                <Typography variant="h6" id="modal-title">
                  Sign in
                </Typography>
                <TextField
                  id="standard-email-input"
                  label="Email"
                  type="email"
                  autoComplete="current-email"
                  margin="normal"
                />
                <TextField
                  id="standard-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  margin="normal"
                  className={classes.pwdInput}
                />
                <Button size="medium" className={classes.submitBtn}>
                  Submit
                </Button>
                <Typography className={classes.enterPwdText}>
                  Please, enter your email and password
                </Typography>
                <Button size="medium" className={classes.haveNoAccBtn}>
                  Don't have an account?
                </Button>
              </div>
            </Modal>
          </div>
        );
      }
    }
)

