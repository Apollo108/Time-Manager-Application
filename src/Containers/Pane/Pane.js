import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import { Paper, Typography, Icon } from '@material-ui/core/';
import styles from './pane_styles';

export default withStyles(styles)(
    class Pane extends Component {
      render() {
        const { classes, partOfDay, urgency } = this.props;
        return (
            <Paper className={classes.pane}>
              <Typography className={classes.partOfDay}>
                {partOfDay}
              </Typography>
              <Typography className={urgency === 'Urgent' ? classes.textRed : classes.textGray}>
                {urgency}
              </Typography>
              <Icon className={classes.addIcon}>add</Icon>
            </Paper>
        );
      }
    }
)

