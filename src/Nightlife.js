import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nightlife extends Component {

   state = { 
    }
    
   render() {
      return (
        <div class="nightlifepage">
          <h1 class="heading">Party all night in Mumbai</h1>
          <br/>
          <div class="container">
          	<div class="row">
          		<div class="col-md-3" id="smallimg">
          			<Link to={{ pathname:"/bcb", state:"0" }}><img src={require('./Views/bcb.jpg')}></img>
               		<div><h5><b>Bombay Cocktail Bar</b></h5></div></Link>
          		</div>
          		<div class="col-md-3" id="smallimg">
          			<Link to={{ pathname:"/tap", state:"1" }}><img src={require('./Views/tap.jpg')}></img>
               		<div><h5><b>TAP</b></h5></div></Link>
          		</div>
          		<div class="col-md-3" id="smallimg">
          			<Link to={{ pathname:"/tamasha", state:"2" }}><img src={require('./Views/tamasha.jpg')}></img>
               		<div><h5><b>Tamasha</b></h5></div></Link>
          		</div>
          		<div class="col-md-3" id="smallimg">
          			<Link to={{ pathname:"/social", state:"3" }}><img src={require('./Views/social.jpg')}></img>
               		<div><h5><b>Social's</b></h5></div></Link>
          		</div>
          	</div>
          	<br/>
          	<br/>
          	<div class="row">
          		<div class="col-md-3" id="smallimg">
          			<Link to={{ pathname:"/bombayadda", state:"4" }}><img src={require('./Views/bombayadda.jpg')}></img>
               		<div><h5><b>Bombay Adda</b></h5></div></Link>
          		</div>
          		<div class="col-md-3" id="smallimg">
          			<Link to={{ pathname:"/tryst", state:"5" }}><img src={require('./Views/tryst.jpg')}></img>
               		<div><h5><b>Tryst</b></h5></div></Link>
          		</div>
          		<div class="col-md-3" id="smallimg">
          			<Link to={{ pathname:"/ttt", state:"6" }}><img src={require('./Views/ttt.jpeg')}></img>
               		<div><h5><b>True Tram Trunk</b></h5></div></Link>
          		</div>
          		<div class="col-md-3" id="smallimg">
          			<Link to={{ pathname:"/lod", state:"7" }}><img src={require('./Views/lod.jpg')}></img>
               		<div><h5><b>Lord of Drinks</b></h5></div></Link>
          		</div>
          	</div>
          	<br/>
          	<br/>
          	<div class="row">
          		<div class="col-md-3" id="smallimg">
          			<Link to={{ pathname:"/aer", state:"8" }}><img src={require('./Views/aer.jpg')}></img>
               		<div><h5><b>Aer</b></h5></div></Link>
          		</div>
          		<div class="col-md-3" id="smallimg">
          			<Link to={{ pathname:"/barrel", state:"9" }}><img src={require('./Views/barrel.jpg')}></img>
               		<div><h5><b>Barrel & Co.</b></h5></div></Link>
          		</div>
          		<div class="col-md-3" id="smallimg">
          			<Link to={{ pathname:"/rude", state:"10" }}><img src={require('./Views/rude.jpg')}></img>
               		<div><h5><b>Rude Lounge</b></h5></div></Link>
          		</div>
          		<div class="col-md-3" id="smallimg">
          			<Link to={{ pathname:"/playboy", state:"11" }}><img src={require('./Views/playboy.jpg')}></img>
               		<div><h5><b>Playboy Club</b></h5></div></Link>
          		</div>
          	</div>
          </div>
        </div>
      );
   }
}