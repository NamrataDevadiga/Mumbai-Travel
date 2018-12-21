import React, { Component } from 'react';

export default class Places extends Component {

   state = { 
    }
    
   render() {
      return (
        <div class="placespage">
          <br/>
          <h1 class="heading">Explore the city of dreams</h1>
          <br/>
          <br/>
          <div class="container">
            <div class="row">
              <div class="col-md-6" id="smallimg">
                <a href="/marinedrive"><img src={require('./Views/marinedrive.jpg')}></img>
                  <div><h5><b>Marine Drive</b></h5></div></a>
              </div>
              <div class="col-md-6" id="smallimg">
                <a href="/gateway"><img src={require('./Views/gateway.jpg')}></img>
                  <div><h5><b>Gateway of India</b></h5></div></a>
              </div>
            </div>
            <br/>
            <br/>
            <div class="row">
              <div class="col-md-6" id="smallimg">
                <a href="/filmcity"><img src={require('./Views/filmcity.jpg')}></img>
                  <div><h5><b>Filmcity</b></h5></div></a>
              </div>
              <div class="col-md-6" id="smallimg">
                <a href="/sealink"><img src={require('./Views/sealink.jpg')}></img>
                  <div><h5><b>Bandra Worli Sea Link</b></h5></div></a>
              </div>
            </div>
            <br/>
            <br/>
            <div class="row">
              <div class="col-md-6" id="smallimg">
                <a href="/cst"><img src={require('./Views/cst.jpg')}></img>
                  <div><h5><b>Victoria Terminal</b></h5></div></a>
              </div>
              <div class="col-md-6" id="smallimg">
                <a href="/asiatic"><img src={require('./Views/asiatic.jpg')}></img>
                  <div><h5><b>Asiatic Library</b></h5></div></a>
              </div>
            </div>
            <br/>
            <br/>
            <div class="row">
              <div class="col-md-6" id="smallimg">
                <a href="/juhubeach"><img src={require('./Views/juhubeach.jpg')}></img>
                  <div><h5><b>Juhu Beach</b></h5></div></a>
              </div>
              <div class="col-md-6" id="smallimg">
                <a href="/nehru"><img src={require('./Views/nehru.jpg')}></img>
                  <div><h5><b>Nehru Planetarium</b></h5></div></a>
              </div>
            </div>
            <br/>
            <br/>
            <div class="row">
              <div class="col-md-6" id="smallimg">
                <a href="/bandrafort"><img src={require('./Views/bandrafort.jpg')}></img>
                  <div><h5><b>Bandra Fort</b></h5></div></a>
              </div>
              <div class="col-md-6" id="smallimg">
                <a href="/chowpatty"><img src={require('./Views/chowpatty.jpg')}></img>
                  <div><h5><b>Girgaum Chowpatty</b></h5></div></a>
              </div>
            </div>
            <br/>
            <br/>
            <div class="row">
              <div class="col-md-6" id="smallimg">
                <a href="/wankhede"><img src={require('./Views/wankhede.jpg')}></img>
                  <div><h5><b>Wankhede Stadium</b></h5></div></a>
              </div>
              <div class="col-md-6" id="smallimg">
                <a href="/pagoda"><img src={require('./Views/pagoda.jpg')}></img>
                  <div><h5><b>Global Pagoda</b></h5></div></a>
              </div>
            </div>
          </div>
        </div>
      );
   }
}