import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import rickandmorty from '../images/rickandmorty.jpg'
import logo from '../images/gatsby-icon.png'


const styles = {
  card: {
    minWidth: 275,
    maxWidth: 500,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
    media: {
   //height: 10,
    paddingTop: '56.25%', // 16:9
  },

};

function SimpleCard(props) {
  const { classes } = props;


  return (
    <Card className={classes.card}>
      <Typography component = "h1">
        Hello World  :)
      </Typography>
      <CardMedia className = {classes.media} image = {rickandmorty} title = "Wubba Lubba Dub Dub" />
      <Typography component = "h3">
        Goodbye World :(
      </Typography>
      <CardMedia className = {classes.media} image = {logo} title = "OUR LOGO" />
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
