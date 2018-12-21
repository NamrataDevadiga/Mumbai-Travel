import React, { Component } from 'react';

export default class Prayer extends Component {

   state = { 

      try:[
    { 
      title: "Bombay Cocktail Bar",
      about1: "Rs. 2000 for two people",
      about2: "022 33951713",
      location: "Deluxe House, Ground Floor, Plot B-50, Opposite New Link Road, Andheri Lokhandwala, Andheri West",
      timing: "Tuesday-Sunday 7:00 pm to 1:30 am, Mondays Closed.",
      img: "./Views/bcb2.jpg"
    },
    { 
      title: "TAP Resto Bar",
      about1: "Rs. 1400 for two people",
      about2: "+919167666742,+919167666712",
      location: "3rd Floor, Link Square Mall, Linking Road, Bandra West Bandra West Above Global Fusion, Linking Road, Linking Road",
      timing: "All days of the week 12:00pm to 1:00am",
      img: "./Views/tap2.jpg"
    },
    {
      title: "Tamasha",
      about1: "Rs. 1800 for two people",
      about2: "022 33951579",
      location: "Ground Floor, Victoria House, E.B Marg, Lower Parel, Mumbai",
      timing: "All days of the week 12:00pm to 1:00am",
      img: "./Views/tamasha2.jpg"
    },
    { 
      title: "Colaba Social",
      about1: "Rs. 1400 for two people",
      about2: "+917506394239",
      location: "24, Ground Floor, Glen Rose Building, Behind Taj Mahal Palace, ",
      timing: "All days of the week 9:00 am to 1:30 am",
      img: "./Views/social2.jpg"
    },
    { 
      title: "Bombay Adda",
      about1: "Rs. 1800 for two people",
      about2: "022 30151464",
      location: "8th Floor, Nike Showroom Showroom Linking Road, Santacruz West, Mumbai",
      timing: "Daily from 12:00pm until 1:00am",
      img: "./Views/bombayadda2.jpg"
    },
    { 
      title: "Tryst",
      about1: "Rs. 2500 for two people",
      about2: "+912266614366, +912266614365",
      location: "Phoenix Mill Compound, High Street Phoenix, Senapati Bapat Marg, Lower Parel, Mumbai",
      timing: "Wednesday to Saturday from 10:30pm to 1:30am",
      img: "./Views/tryst2.jpg"
    },
    { 
      title: "True Tram Trunk",
      about1: "Rs. 1700 for two people",
      about2: "+917738993360,+919967916583",
      location: "Next to Options Showroom, First Floor, V.L. Mehta Road, J.V.P.D. Scheme, Juhu, Mumbai",
      timing: "Daily from 6:30pm to 1:30am",
      img: "./Views/ttt2.jpg"
    },
    { 
      title: "Lord of the drinks",
      about1: "Rs. 1500 for two people",
      about2: "022 61054685",
      location: "Third Floor, Trade View Building, Kamala Mills Compound, Senapati Bapat Marg, Lower Parel, Mumbai",
      timing: "Daily from 12 p.m. until 1:00 a.m.",
      img: "./Views/lod2.png"
    },
    {
      title: "Aer",
      about1: "Rs. 4000 for two people",
      about2: "No phone number available",
      location: "Four Seasons Hotel, 1/136, E Moses Road, Worli, Mumbai",
      timing: "Daily 5:30 p.m. until 1:30 a.m.",
      img: "./Views/aer2.jpg"
    },
    { 
      title: "Barrel and Co.",
      about1: "Rs. 1800 for two people",
      about2: "+919920884010,+912226365000",
      location: "2, Link Road, Industrial Area, Andheri Lokhandwala, Andheri West",
      timing: "All days of the week 12:00 pm to 12:00 am",
      img: "./Views/barrel2.jpg"
    },
    { 
      title: "Rude Lounge",
      about1: "Rs. 1600 for two people",
      about2: "022 30151707",
      location: "8th Floor, B Wing, Supreme Business Park, Hiranandani Gardens, Powai, Mumbai",
      timing: "Daily from 11:30 am until 12:30pm",
      img: "./Views/rude2.jpg"
    },
    { 
      title: "Playboy Club",
      about1: "Rs. 2700 for two people",
      about2: "022 33956027",
      location: "Birla Centurion, Gate 2, PB Marg, Worli, Mumbai",
      timing: "Friday and Saturday from 9:00pm to 1:30am",
      img: "./Views/playboy2.jpeg"
    }
    ]

    }

   render() {

    console.log(this);
  
    const allEmps = this.state.try.map((item,index) => index === this.props.id ? (<div><br/>
          <h1 class="heading">{item.title}</h1>
          <br/>
          <br/>
          <div class="container">
            <div class="row">
              <div class="col-md-4">
              <img src={require(`${item.img}`)}></img>
              </div>
              <div class="col-md-1"></div>
              <div class="col-md-7">
              <div class="row"><h3><b>APPROXIMATE COST : </b></h3></div>
              <div class="row" id="about">{item.about1}</div>
              <br/>
              <div class="row"><h3><b>PHONE NUMBER : </b></h3></div>
              <div class="row" id="about">{item.about2}</div>
              <br/>
              <br/>
              <div class="row"><h3><b>LOCATION : </b></h3></div>
              <div class="row" id="about">{item.location}</div>
              <br/>
              <div class="row"><h3><b>TIMING : </b></h3></div>
              <div class="row" id="about">{item.timing}</div>
              <br/>
              <a href="test5.html" class="button">View in Maps</a>
              </div>
            </div>
          </div></div>) : (<p></p>) )
    return (<div>{allEmps}</div>)
   }
}