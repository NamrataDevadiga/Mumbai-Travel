import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Pray extends Component {

   state = { 
    }
    
   render() {

      return (
        <div class="praypage">
          <br/>
          <h1 class="heading">Experience Divinity in Mumbai</h1>
          <br/>
          <br/>
          <div class="container">
            <div class="row">
              <div class="col-md-6" id="smallimg">
                <Link to={{ pathname:"/siddhivinayak", state:"0" }}><img src={require('./Views/siddhivinayak.jpg')}></img>
                <div><h3>Siddhivinayak Temple</h3></div></Link>
              </div>
              <div class="col-md-6" id="smallimg">
                <Link to={{ pathname:"/iskcon"}}><img src={require('./Views/iskcon.jpg')}></img>
                <div><h3>Iskcon Temple</h3></div></Link>
              </div>
            </div>
            <br/>
            <br/>
            <div class="row">
              <div class="col-md-6" id="smallimg">
                <Link to={{ pathname:"/hajiali"}}><img src={require('./Views/hajiali.jpg')}></img>
                <div><h3>Haji Ali Durgah</h3></div></Link>
              </div>
              <div class="col-md-6" id="smallimg">
                <Link to={{ pathname:"/mahalakshmi"}}><img src={require('./Views/mahalakshmi.jpg')}></img>
                <div><h3>Mahalakshmi Temple</h3></div></Link>
              </div>
            </div>
            <br/>
            <br/>
            <div class="row">
              <div class="col-md-6" id="smallimg">
                <Link to={{ pathname:"/babulnath"}}><img src={require('./Views/babulnath.JPG')}></img>
                <div><h3>Babulnath Temple</h3></div></Link>
              </div>
              <div class="col-md-6" id="smallimg">
                <Link to={{ pathname:"/mountmary"}}><img src={require('./Views/mountmary.jpg')}></img>
                <div><h3>Mount Mary Church</h3></div></Link>
              </div>
            </div>
            <br/>
            <br/>
            <div class="row">
              <div class="col-md-6" id="smallimg">
                <Link to={{ pathname:"/mahim"}}><img src={require('./Views/mahim.jpg')}></img>
                <div><h3>Mahim Dargah</h3></div></Link>
              </div>
              <div class="col-md-6" id="smallimg">
                <Link to={{ pathname:"/andrews"}}><img src={require('./Views/andrews.jpg')}></img>
                <div><h3>St. Andrews Church</h3></div></Link>
              </div>
            </div>
          </div>
        </div>
      );
   }
}