import React, { Component } from 'react';

export default class Prayer extends Component {

   state = { 

      try:[
    { 
      title: "Colaba Causeway",
      about1: "The everyday carnival of the Colaba Causeway market is a shopping experience like no other in Mumbai. Geared especially towards tourists, that infamous Indian saying of 'sab kuch milega' (you'll get everything) certainly applies at this market. ",
      about2: "Handicrafts, books, junk jewelry, crystals, brass items, incense, clothes.",
      location: "Colaba Causeway, south Mumbai.",
      timing: "Daily from morning until night",
      img: "./Views/causeway2.jpg"
    },
    { 
      title: "Linking Road",
      about1: "A fusion of modern and traditional, and East meets West, in one of Mumbai's hippest suburbs. Here streets stalls contrast with brand name shops, and you'll find a local Indian roadside food vendor on one side of the road and a Kentucky Fried Chicken outlet on the other. ",
      about2: "Indian traditional clothes, children's clothes, shoes, bags, belts, fashion accessories.",
      location: "Linking Road, Bandra West (starts from Waterfield Road intersection).",
      timing: "Daily from 10 a.m. until 10 p.m.",
      img: "./Views/linkingroad2.jpg"
    },
    {
      title: "Chor Bazaar",
      about1: "Chor Bazaar is nestled in the heart of Mumbai's main Muslim district. This iconic market has a history spanning more than 150 years. Its name means 'thieves market', but this was derived from the British mispronunciation of the its original name of Shor Bazaar, 'noisy market'. ",
      about2: "Antiques, bronze items, vintage items, trash and treasure.",
      location: "utton Street, between SV Patel and Moulana Shaukat Ali Roads, near Mohammad Ali Road in south Mumbai",
      timing: "Daily 11 a.m. until 7.30 p.m., except Friday. The Juma Market is held there on Fridays.",
      img: "./Views/chorbazaar2.jpg"
    },
    { 
      title: "Hindmata",
      about1: "If your shopping list is restricted to Indian wear, the Hindmata Cloth Market in Dadar should be the first place you should check out. Packed with tiny shops specialising in different dress materials and readymade designs, this is local favourite for those who’re in the mood to revamp their wardrobe. ",
      about2: "Sarees, salwar kameez, suits, lehengas, sherwanis and even dress materials",
      location: "Baba Saheb Ambedkar Marg, Dadar East, Mumbai, Maharashtra 400014, India",
      timing: "All days of the week 10:00 am to 10:00 pm",
      img: "./Views/hindmata2.jpg"
    },
    { 
      title: "Zaveri Bazaar",
      about1: "Zaveri Bazaar, Mumbai's renowned gold market, is one of the oldest and largest gold markets in India. It accounts for more than half of the country's gold trade and has thousands of shops, some of which are centuries old. Many of the buildings look dilapidated and outdated but they're full of riches.",
      about2: "Indian-style gold, platinum and diamond jewelry. Silver and imitation jewelry are also available.",
      location: "Between Crawford Market and Mumbadevi temple. From Crawford Market, walk along Sheik Memon Street leading to Jama Masjid.",
      timing: "Daily from morning until night, except Sundays.",
      img: "./Views/zaveri2.jpg"
    },
    { 
      title: "Mangaldas Market",
      about1: "If you're after cloth by the meter or un-stitched dress material to make Indian outfits, Mangaldas Market and Mulji Jetha Market (also called M.J. Market) are where you should head. Located close to each other, these sprawling wholesale markets are among the largest textile markets in Asia.",
      about2: "Textiles and shawls.",
      location: "Near Zaveri Bazaar, Kalbadevi, south Mumbai. Also in this area is the iconic Mumbadevi temple, which the city was named after.",
      timing: "Daily from morning until night, except Sundays.",
      img: "./Views/mangaldas2.jpg"
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
              <div class="row"><h3><b>ABOUT : </b></h3></div>
              <div class="row" id="about">{item.about1}</div>
              <br/>
              <div class="row"><h3><b>WHAT TO BUY : </b></h3></div>
              <div class="row" id="about">{item.about2}</div>
              <br/>
              <br/>
              <div class="row"><h3><b>LOCATION : </b></h3></div>
              <div class="row" id="about">{item.location}</div>
              <br/>
              <div class="row"><h3><b>TIMING : </b></h3></div>
              <div class="row" id="about">{item.timing}</div>
              <br/>
              <a href="test4.html" class="button">View in Maps</a>
              </div>
            </div>
          </div></div>) : (<p></p>) )
    return (<div>{allEmps}</div>)
   }
}