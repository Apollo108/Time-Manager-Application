import React, {Component} from 'react';
import moment from 'moment';
import {withStyles} from '@material-ui/core/styles'
import {Typography, Icon, Button} from '@material-ui/core/';
import styles from './calendar_styles';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

export default withStyles(styles)(
  class Calendar extends Component {
    render() {
      const {classes} = this.props;
      return (
        <div className={classes.calendarWrapper}>
          <Typography align={'center'} variant={'title'} className={classes.currentDate}>
            {moment().format('DD/MM/YYYY')}
          </Typography>
          {months.map(month => (
            <Button fullWidth variant='contained' className={classes.monthButton} size={'small'}>
              {month}
            </Button>
          ))}
        </div>
      );
    }
  }
)

