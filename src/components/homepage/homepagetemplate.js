import React from 'react';
import banner from './banner.svg';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    position: 'relative',
  },
  title: {
    position: 'absolute',
    right: '75px',
    top: '125px',
    textAlign: 'right',
    color: 'white',
    fontFamily: ['Poppins', 'sans-serif'],
    fontWeight: 'bold',
  },
  mainTitle: {
    fontSize: '90px',
    lineHeight: '90px',
  },
  subTitle: {
    fontSize: '45px',
    lineHeight: '45px',
  },
});

class HomePage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <img className={classes.banner} src={banner}/>
        <div className={classes.title}>
          <div className={classes.mainTitle}>Move Fast.</div>
          <div className={classes.mainTitle}>Build Things.</div>
          <div className={classes.subTitle}>Start Hacking.</div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(HomePage);
