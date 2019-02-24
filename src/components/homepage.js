import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import hack_banner from '../images/hack_banner.jpg'
import Button from '@material-ui/core/Button'
import NavBar from './navbar'

import AppBar from '@material-ui/core/AppBar'
import MyCard from './card'
import rickandmorty from '../images/rickandmorty.jpg'
import logo from '../images/gatsby-icon.png'
import CardMedia from '@material-ui/core/CardMedia'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

class HomePage extends React.Component {

	  const images = [{rickandmorty}, {logo}];
  const imageList = images.map((myimage) => <CardMedia className = {classes.media} image = {images} />);

  render() {
    return (
    <div>
    	<NavBar/>
    	<AppBar>
    		<div>
    			NiHao
    		</div>
    	</AppBar>
        <Button variant="contained" color="primary">
      	Hello World :D
    	</Button>
      <img src = {hack_banner}/>
      <MyCard/>
    </div>
    );
  }

}

export default HomePage
