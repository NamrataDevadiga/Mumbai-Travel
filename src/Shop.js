import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Shop extends Component {

   state = { 
    }
    
   render() {
      return (
        <div class="shoppage">
          <br/>
          <br/>
          <h1 class="heading">Shop till you drop in Mumbai</h1>
          <br/>
          <br/>
          <br/>
          <div class="container">
            <div class="row">
              <div class="col-md-4" id="smallimg">
                <Link to={{ pathname:"/causeway", state:"0" }}><img src={require('./Views/colabacauseway.jpg')}></img>
                <div><h3><b>Colaba Causeway</b></h3></div></Link>
              </div>
              <div class="col-md-4" id="smallimg">
                <Link to={{ pathname:"/linking", state:"1" }}><img src={require('./Views/linkingroad.jpg')}></img>
                <div><h3><b>Linking Road</b></h3></div></Link>
              </div>
              <div class="col-md-4" id="smallimg">
                <Link to={{ pathname:"/chorbazaar", state:"2" }}><img src={require('./Views/chorbazaar.jpg')}></img>
                <div><h3><b>Chor Bazaar</b></h3></div></Link>
              </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div class="row">
              <div class="col-md-4" id="smallimg">
                <Link to={{ pathname:"/hindmata", state:"3" }}><img src={require('./Views/hindmata.png')}></img>
                <div><h3><b>Hindmata</b></h3></div></Link>
              </div>
              <div class="col-md-4" id="smallimg">
                <Link to={{ pathname:"/zaveri", state:"4" }}><img src={require('./Views/zaveri.jpg')}></img>
                <div><h3><b>Zaveri Bazaar</b></h3></div></Link>
              </div>
              <div class="col-md-4" id="smallimg">
                <Link to={{ pathname:"/mangaldas", state:"5" }}><img src={require('./Views/mangaldas.jpg')}></img>
                <div><h3><b>Mangaldas Market</b></h3></div></Link>
              </div>
            </div>
          </div>
        </div>
      );
   }
}