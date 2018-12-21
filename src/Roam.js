import React, { Component } from 'react';

export default class Celebration extends Component {

   state = { 

      try:[
    { 
      title: "Marine Drive",
      about1: "Marine Drive is a 3.6-kilometre-long Boulevard in South Mumbai in the city of Mumbai, India. Marine Drive is also known as the Queen's Necklace because, if viewed at night from an elevated point anywhere along the drive, the street lights resemble a string of pearls in a necklace.",
      location: "Marine Drive, Mumbai, Maharashtra",
      timing: "It is more calm and peaceful at late nights or early mornings. Pretty Buzzing during the day. Always open.",
      img: "./Views/marinedrive2.jpg"
    },
    { 
      title: "Gateway of India",
      about1: "The Gateway of India is an arch monument built during the 20th century in Mumbai, India.The monument was erected to commemorate the landing of King George V and Queen Mary at Apollo Bunder on their visit to India in 1911.",
      location: "Apollo Bandar, Colaba, Mumbai, Maharashtra 400001, India",
      timing: "Open all day and night. Best time to visit is early morning to get a quiet view",
      img: "./Views/gateway2.jpg"
    },
    {
      title: "Goregaon Filmcity",
      about1: "Film City is an integrated film studio complex situated near Sanjay Gandhi National Park at Goregaon East, Mumbai in India. It has several recording rooms, gardens, lakes, theaters and grounds that serve as the venue of many Bollywood film shootings",
      location: " Film City Rd, Film City Complex, Aarey Colony, Goregaon East, Mumbai, Maharashtra 400065, India",
      timing: "Open 24 hours but you will need tickets to enter",
      img: "./Views/filmcity2.jpg"
    },
    { 
      title: "Bandra Worli Sealink",
      about1: "The Famous Bandra-Worli sea link is also known by the name Rajiv Gandhi Sea Link. It is a cable bridge that connects Bandra in the west of Mumbai to Worli which is in the southern part of the city. This bridge has helped in saving a lot of time for the passengers who travel from Bandra to Worli and vice versa.",
      location: "Mount Mary, Bandra West, Mumbai, Maharashtra 400030, India",
      timing: "Usually less traffic from 12am to 6am",
      img: "./Views/sealink2.png"
    },
    { 
      title: "Chatrapti Shivaji Terminals",
      about1: "Chhatrapati Shivaji Maharaj Terminus (station code: CSMT), formerly known as Victoria Terminus, is a historic railway station and a UNESCO World Heritage Site in Mumbai, Maharashtra, India which serves as the headquarters of the Central Railways.",
      location: "Chhatrapati Shivaji Terminus Area, Fort, Mumbai, Maharashtra 400001, India",
      timing: "Trains are running 24 hours. Rush hours are usually from 9am to 10am and 5pm to 7pm",
      img: "./Views/cst2.jpg"
    },
    { 
      title: "Asiatic Library",
      about1: "The Asiatic Society of Mumbai (formerly Asiatic Society of Bombay) is a learned society in the field of Asian studies based in Mumbai, India. It can trace its origin to the Literary Society of Bombay which first met in Mumbai on November 26, 1804, and was founded by Sir James Mackintosh. It was formed with the intention of promoting useful knowledge, particularly such as is now immediately connected with India",
      location: "Town Hall, Shahid Bhagat Singh Road, Horniman Circle, Near RBI, Fort, Mumbai, Maharashtra 400023, India",
      timing: "Monday to Saturday from 10:30am to 6:30pm",
      img: "./Views/asiatic2.jpg"
    },
    { 
      title: "Juhu Beach",
      about1: "Not your typical swimming and bathing beach, this beach is best visited on weekend afternoons and evenings, when it comes alive with children's rides, carvnival-like amusements and food stands.",
      location: "Juhu, Mumbai, Maharashtra 400077",
      timing: "Open all day but best time to visit is from 6:00am to 8:00am",
      img: "./Views/juhubeach2.jpg"
    },
    { 
      title: "Nehru Planetarium",
      about1: "The Nehru Planetarium, commissioned on 3rd March 1977, with the objective of fostering scientific temper through the means of edutainment (that’s right! education + entertainment).  The planetarium has been making learning Astronomy a pleasant experience. ",
      location: "Nehru Centre, Dr Annie Besant Rd, Lotus Colony, Worli, Mumbai, Maharashtra 400018, India",
      timing: "Weekdays from 11:00am to 5:00pm",
      img: "./Views/nehru2.png"
    },
    { 
      title: "Bandra Fort",
      about1: "Castella de Aguada (Portuguese: Fort of the Waterpoint), also known as the Bandra Fort, is a fort located in Bandra, Mumbai. It is located at Land's End in Bandra. It was built by the Portuguese in 1640 as a watchtower overlooking Mahim Bay, the Arabian Sea and the southern island of Mahim.",
      location: "Byramji Jeejeebhoy Road, Bandstand Road, Mumbai, Maharashtra 400050, India",
      timing: "All days of the week from 6:00am to 6:30pm",
      img: "./Views/bandrafort2.png"
    },
    { 
      title: "Girgaum Chowpatty",
      about1: "Girgaon Chowpatty, commonly known as Chaupati, is one of the famous public beaches adjoining Marine Drive in the Girgaon area of Mumbai, India. The beach is noted for its Ganesh Visarjan celebrations when thousands of people from all over Mumbai and Pune come to immerse the idols of Lord Ganesh in the Arabian Sea",
      location: "Chowpatty, Mumbai, Maharashtra",
      timing: "Open all day but best time to visit is from 6:00am to 8:00am",
      img: "./Views/chowpatty2.png"
    },
    { 
      title: "Wankhede Stadium",
      about1: "The Wankhede Stadium is a cricket stadium in Mumbai, Maharashtra. The stadium now has a capacity of 33,108, following renovations for the 2011 Cricket World Cup. ",
      location: "Vinoo Mankad Rd, Church gate, Mumbai, Maharashtra 400020, India",
      timing: "Open only during games. Will need tickets to the game to enter stadium.",
      img: "./Views/wankhede2.jpg"
    },
    { 
      title: "Pagoda",
      about1: "The Global Vipassana Pagoda is a Meditation Dome Hall with a capacity to seat around 8,000 Vipassana meditators near Gorai, North-west of Mumbai, India.",
      location: "Global Pagoda Road, Near Esselworld, Gorai, Borivali West, Mumbai, Maharashtra 400091, India",
      timing: "All days of the week from 9:00am to 6:30pm",
      img: "./Views/pagoda2.jpg"
    }
    ]

    }

   render() {

    console.log(this);
  
    const allEmps = this.state.try.map((item,index) => index === this.props.id ? (<div><br/>
          <h1 class="heading">{item.title}</h1>
          <br/>
          <div class="container">
            <div class="row">
              <img src={require(`${item.img}`)}></img>
            </div>
            <br/>
            <div class="row">
              <div class="col-md-3">
                <div class="row"><h3><b>ADDRESS: </b></h3></div>
                <br/>
                <div class="row" id="about">{item.location}</div>
              </div>
              <div class="col-md-1"></div>
              <div class="col-md-4">
                <div class="row"><h3><b>ABOUT : </b></h3></div>
                <br/>
                <div class="row" id="about">{item.about1}</div>
              </div>
              <div class="col-md-1"></div>
              <div class="col-md-3">
                <div class="row"><h3><b>BEST TIME TO VISIT: </b></h3></div>
                <br/>
                <div class="row" id="about">{item.timing}</div>
              </div>
            </div>
            <a href="trial.html" class="button">View in Maps</a>
          </div></div>) : (<p></p>) )
    return (<div>{allEmps}</div>)
   }
}