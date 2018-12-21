import React, { Component } from 'react';

export default class Festival extends Component {

   state = { 
    }
    
   render() {
      return (
        <div class="festivalpage">
          <br/>
          <h1 class="heading">Celebrate like a Mumbaikar</h1>
          <br/>
          <br/>
          <div class="container">
            <div class="row">
              <div class="col-md-6" id="smallimg">
                <a href="/ganpati"><img src={require('./Views/ganesh.jpeg')}></img>
                <div><h3><b>Ganesh Chaturthi</b></h3></div></a>
              </div>
              <div class="col-md-6" id="smallimg">
                <a href="/dahihandi"><img src={require('./Views/dahihandi.jpg')}></img>
                <div><h3><b>Dahi Handi</b></h3></div></a>
              </div>
            </div>
            <br/>
            <br/>
            <div class="row">
              <div class="col-md-6" id="smallimg">
                <a href="/holi"><img src={require('./Views/holi.jpg')}></img>
                <div><h3><b>Holi</b></h3></div></a>
              </div>
              <div class="col-md-6" id="smallimg">
                <a href="/diwali"><img src={require('./Views/diwali.jpg')}></img>
                <div><h3><b>Diwali</b></h3></div></a>
              </div>
            </div>
            <br/>
            <br/>
            <div class="row">
              <div class="col-md-6" id="smallimg">
                <a href="/navratri"><img src={require('./Views/navratri.jpg')}></img>
                <div><h3><b>Navratri</b></h3></div></a>
              </div>
              <div class="col-md-6" id="smallimg">
                <a href="/christmas"><img src={require('./Views/christmas.jpg')}></img>
                <div><h3><b>Christmas</b></h3></div></a>
              </div>
            </div>
          </div>
        </div>
      );
   }
}