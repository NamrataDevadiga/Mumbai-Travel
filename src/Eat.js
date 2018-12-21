import React, { Component } from 'react';

export default class Eat extends Component {

   state = { 

      try:[
    { 
      title: "Hotel Ramashray",
      about1: "Rs. 200 for two people",
      about2: "+912224102623,+912224102369",
      location: "Bhandarkar Road, Matunga East, Mumbai",
      timing: "Tuesday-Sunday 5:00 am to 9:30 pm, Mondays Closed.",
      img: "./Views/ramashray2.jpeg"
    },
    { 
      title: "SodaBottleOpenerWala",
      about1: "Rs. 1300 for two people",
      about2: "+912249742015,+917400099267",
      location: "F&B 4, 2nd Floor, North Skyzone, High Street Phoenix, Senapati Bapat Marg, Lower Parel, Mumbai",
      timing: "All days of the week 8:30am to 12:00am",
      img: "./Views/sodabottle2.jpeg"
    },
    {
      title: "Mirchi And Mime",
      about1: "Rs. 1500 for two people",
      about2: "+912241415151,+918828024151",
      location: "Transocean House, Lake Boulevard, Hiranandani Business Park, Powai, Mumbai",
      timing: "All days of the week 12:30pm to 11:00pm",
      img: "./Views/mirchi2.jpg"
    },
    { 
      title: "K Rustom Ice Cream",
      about1: "Rs. 150 for two people",
      about2: "+912222821768",
      location: "87 Stadium House, Opposite Ambassador Hotel, Veer Nariman Road, Churchgate, Mumbai",
      timing: "All days of the week 9:30 am to 11:00 pm",
      img: "./Views/krustom2.jpeg"
    },
    { 
      title: "Bastian",
      about1: "Rs. 2500 for two people",
      about2: "022 33126135",
      location: "B/1, New Kamal Building, Opposite National College, Linking Road, Bandra West",
      timing: "Tuesday-Sunday from 12:00pm until 12:00am, Mondays Closed",
      img: "./Views/bastian2.jpg"
    },
    { 
      title: "Bombay Barbeque",
      about1: "Rs. 1600 for two people",
      about2: "+9118602669766",
      location: "Ground Floor, Plot 21, Sector 19D, Galleria Mall, Phase 2, Palm Beach Road, Vashi, Navi Mumbai",
      timing: "All days of the week from 12:00pm to 12:30am",
      img: "./Views/bombaybarbeque2.jpg"
    },
    { 
      title: "Mamagoto",
      about1: "Rs. 1500 for two people",
      about2: "+912226552600",
      location: "133, Ground Floor, Gazebo House, Hill Road, Bandra West, Mumbai, Maharashtra",
      timing: "Daily from 12:00pm to 11:30pm",
      img: "./Views/mamagoto2.jpg"
    },
    { 
      title: "Di Bella Coffee",
      about1: "Rs. 650 for two people",
      about2: "022 30151042",
      location: "Shop 6/7, Shubham Co-op Housing Society, Juhu Versova Link Road, Versova, Andheri West",
      timing: "Daily from 9:30 a.m. until 1:00 a.m.",
      img: "./Views/dibella2.jpeg"
    },
    {
      title: "Joeys Pizza",
      about1: "Rs. 800 for two people",
      about2: "+912228762222,+912228743333",
      location: "Shop 1, Plot D, Samruddhi Complex, Chincholi Bunder Road, Mindspace, Malad West, Mumbai",
      timing: "Daily 11:00 a.m. until 12:30 a.m.",
      img: "./Views/joeys2.jpg"
    },
    { 
      title: "Yautcha",
      about1: "Rs. 2800 for two people",
      about2: "+919222222800",
      location: "Raheja Towers, Bandra Kurla Complex, Mumbai",
      timing: "All days of the week 12:00 pm to 1:00 am",
      img: "./Views/yautcha2.jpg"
    },
    { 
      title: "1441 Pizzeria",
      about1: "Rs. 1000 for two people",
      about2: "022 61054631",
      location: "Trade World B, Kamala Mills Compound, Senapati Bapat Road, Lower Parel, Mumbai",
      timing: "Daily from 11:00 am until 11:00pm",
      img: "./Views/pizzeria2.jpg"
    },
    { 
      title: "JLWA",
      about1: "Rs. 1600 for two people",
      about2: "022 33715961",
      location: "3rd Floor, VN Sphere Turner, Linking Road, Bandra West",
      timing: "All days of the week from 1:00pm to 1:00am",
      img: "./Views/jlwa2.jpeg"
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
              <a href="test2.html" class="button">View in Maps</a>
              </div>
            </div>
          </div></div>) : (<p></p>) )
    return (<div>{allEmps}</div>)
   }
}