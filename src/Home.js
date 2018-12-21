import React, { Component } from 'react';

export default class Home extends Component {

   state = { 
    }

   render() {
      return (
         <div>
         <div class="pageheader">
            <img src={require('./Views/head.jpg')} class="topimg"></img>
            <div class="centered"><h1 class="mainhead">Mumbai</h1>
            <p class="head2"><i><b>The city that never sleeps</b></i></p>
            </div>
         </div>
         <div class="container">
          <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-10">
              <br/>
              <h2 class="welcome">Welcome to Mumbai</h2>
              <br/>
              <p>Mumbai, formerly Bombay, is big. It’s full of dreamers and hard-labourers, starlets and gangsters, stray dogs and exotic birds, artists and servants, fisherfolk and crorepatis (millionaires), and lots and lots of people. It has India’s most prolific film industry, some of Asia’s biggest slums (as well as the world’s most expensive home) and the largest tropical forest in an urban zone. Mumbai is India’s financial powerhouse, fashion epicentre and a pulse point of religious tension.</p>
            </div>
            <div class="col-md-1"></div>
          </div>
          <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-10">
              <br/>
              <h2 class="welcome">Explore</h2>
              <br/>
            </div>
            <div class="col-md-1"></div>
          </div>
          <div class="row">
            <br/>
            <div class="col-md-4" id="smallimg">
              <a href="/places"><img src={require('./Views/places.jpg')} class="menu"></img>
              <div class="centertext"><h3>Places</h3></div></a>
            </div>
            <div class="col-md-4" id="smallimg">
              <a href="/food"><img src={require('./Views/food.jpg')} class="menu"></img>
              <div class="centertext"><h3>Food</h3></div></a>
            </div>
            <div class="col-md-4" id="smallimg">
              <a href="/nightlife"><img src={require('./Views/night.jpg')} class="menu"></img>
              <div class="centertext"><h3>NightLife</h3></div></a>
            </div>
            <br/>
          </div>
          <br/>
          <br/>
          <div class="row">
            <br/>
            <div class="col-md-4" id="smallimg">
              <a href="/pray"><img src={require('./Views/pray.jpg')} class="menu"></img>
              <div class="centertext"><h3>Pray</h3></div></a>
            </div>
            <div class="col-md-4" id="smallimg">
              <a href="/shop"><img src={require('./Views/shop.jpg')} class="menu"></img>
              <div class="centertext"><h3>Shop</h3></div></a>
            </div>
            <div class="col-md-4" id="smallimg">
              <a href="/festival"><img src={require('./Views/festival.jpg')} class="menu"></img>
              <div class="centertext"><h3>Festivals</h3></div></a>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
          </div>
         </div>
        </div>
      );
   }
}
