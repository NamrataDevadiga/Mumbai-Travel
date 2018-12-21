import React, { Component } from 'react';

export default class Header extends Component {

   state = { 
    }
    
   render() {
      return (
         <div class="pageheader">
            <div class="NavBar">
                <a href="/">Home</a>
                <a href="/pray">Pray</a>
                <a href="/festival">Festivals</a>
                <a href="/shop">Shop</a>
                <a href="/nightlife">Nightlife</a>
                <a href="/places">Places</a>
                <a href="/food">Food</a>
            </div>
         </div>
      );
   }
}
