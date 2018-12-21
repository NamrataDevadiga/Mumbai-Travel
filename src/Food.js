import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Food extends Component {

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
          			<Link to={{ pathname:"/ramashray", state:"0" }}><img src={require('./Views/ramashray.jpg')}></img>
               		<div><h5><b>Hotel Ramashray</b></h5></div></Link>
          		</div>
          		<div class="col-md-3" id="smallimg">
          			<Link to={{ pathname:"/sodabottle", state:"1" }}><img src={require('./Views/sodabottle.jpeg')}></img>
               		<div><h5><b>SodaBottleOpenerWala</b></h5></div></Link>
          		</div>
          		<div class="col-md-3" id="smallimg">
          			<Link to={{ pathname:"/mirchi", state:"2" }}><img src={require('./Views/mirchi.jpg')}></img>
               		<div><h5><b>Mirchi and Mime</b></h5></div></Link>
          		</div>
          		<div class="col-md-3" id="smallimg">
          			<Link to={{ pathname:"/krustom", state:"3" }}><img src={require('./Views/krustom.jpg')}></img>
               		<div><h5><b>K Rustom Ice Cream</b></h5></div></Link>
          		</div>
          	</div>
          	<br/>
          	<br/>
          	<div class="row">
          		<div class="col-md-3" id="smallimg">
          			<Link to={{ pathname:"/bastian", state:"4" }}><img src={require('./Views/bastian.jpg')}></img>
               		<div><h5><b>Bastian</b></h5></div></Link>
          		</div>
          		<div class="col-md-3" id="smallimg">
          			<Link to={{ pathname:"/bombaybarbeque", state:"5" }}><img src={require('./Views/bombaybarbeque.jpg')}></img>
               		<div><h5><b>Bombay Barbeque</b></h5></div></Link>
          		</div>
          		<div class="col-md-3" id="smallimg">
          			<Link to={{ pathname:"/mamagoto", state:"6" }}><img src={require('./Views/mamagoto.jpg')}></img>
               		<div><h5><b>Mamagoto</b></h5></div></Link>
          		</div>
          		<div class="col-md-3" id="smallimg">
          			<Link to={{ pathname:"/dibella", state:"7" }}><img src={require('./Views/dibella.jpg')}></img>
               		<div><h5><b>Coffee By Di Bella</b></h5></div></Link>
          		</div>
          	</div>
          	<br/>
          	<br/>
          	<div class="row">
          		<div class="col-md-3" id="smallimg">
          			<Link to={{ pathname:"/joeys", state:"8" }}><img src={require('./Views/joeys.jpg')}></img>
               		<div><h5><b>Joeys Pizza</b></h5></div></Link>
          		</div>
          		<div class="col-md-3" id="smallimg">
          			<Link to={{ pathname:"/yautcha", state:"9" }}><img src={require('./Views/yautcha.png')}></img>
               		<div><h5><b>Yautcha</b></h5></div></Link>
          		</div>
          		<div class="col-md-3" id="smallimg">
          			<Link to={{ pathname:"/pizzeria", state:"10" }}><img src={require('./Views/pizzeria.jpg')}></img>
               		<div><h5><b>1441 Pizzeria</b></h5></div></Link>
          		</div>
          		<div class="col-md-3" id="smallimg">
          			<Link to={{ pathname:"/jlwa", state:"11" }}><img src={require('./Views/jlwa.jpg')}></img>
               		<div><h5><b>JLWA</b></h5></div></Link>
          		</div>
          	</div>
          </div>
        </div>
      );
   }
}