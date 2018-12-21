import React, { Component } from 'react';

export default class Celebration extends Component {

   state = { 

      try:[
    { 
      title: "Ganesh Chaturthi",
      about1: "Mumbai's Ganesh Chaturthi festival is the biggest celebration in the city. If you want to experience in Indian festival on a grand scale, this is it! It's a massive street party with a special spiritual meaning.The tradition has carried on, and nowadays there's great competition among local communities to put on the biggest and best displays of statues of Lord Ganesh.",
      about2: "A few days (7 to 10) before the festival, Marathi people bring an idol of the lord to their home, decorate it and worship it. On Ganesha Chaturthi, the idol is carried in a huge procession to the sea and immersed in the waters, amidst drumbeats, devotional songs and dancing. With this, the festival comes to an end.",
      location: "Lalbaug Cha Raja, GSB Ganpati Pandal, Chinchpokli Cha Raja",
      timing: "Usually during the months of August-September",
      img: "./Views/ganpati2.jpg"
    },
    { 
      title: "Dahi Handi",
      about1: "One of the most important festivals for Hindus, Janmashtami marks the birth of Lord Krishna.One form of celebrating the deity’s birth is dahi handi which is mostly celebrated in Gujarat and Maharashtra. Boys get together to form human pyramids to break an earthen pot which is fixed at a height of about 30 ft from the ground.",
      about2: "As they do so, girls surround them, sing with music, and cheer them on. It is a public spectacle, and well organized historic tradition of Hindus, with media attendance, prize money and commercial sponsorships.The event is based on the legend of the Krishna stealing butter and other milk products as a baby (he is also called Makhan chor), the community hiding the products by hanging them high out of his reach, but he finding creative ways to reach what he wanted",
      location: "Watch the human pyramid Dadar, Wadala, Worli and Ghatkoper",
      timing: "Usually during the month of August",
      img: "./Views/dahihandi.jpg"
    },
    {
      title: "Holi",
      about1: "The Holi festival commemorates the victory of good over evil, brought about by the burning and destruction of the demoness named Holika. This was enabled through unwavering devotion to the Hindu god of preservation, Lord Vishnu.The festival marks the end of winter and the abundance of the upcoming spring harvest season.",
      about2: "People spend the day smearing colored powder all over each other's faces, throwing colored water at each other, having parties, and dancing under water sprinklers. Bhang (a paste made from cannabis plants) is also traditionally consumed during the celebrations.",
      location: "Sing, Dance and throw colours at JVPD Ground Juhu, Gateway of India, Country Club Andheri",
      timing: "Usually during the month of March",
      img: "./Views/holi2.jpg"
    },
    { 
      title: "Diwali",
      about1: "Diwali is one of the major festivals of Hindus, celebrated throughout the country. It falls on the 13th day of the Hindu month of Ashwin. A festival of lights, it signifies the victory of good over bad. It is believed that it was on this day that Lord Rama returned to his kingdom, Ayodhya, after killing the demon king Ravana and completing his fourteen years of exile.",
      about2: "On this day, people worship Lord Ganesha and Goddess Lakshmi, seeking their blessings for prosperity and wealth. Houses are cleaned and decorated with lights, flowers and rangoli. People burn crackers and fireworks on Diwali and pray for a prosperous coming year.",
      location: "Visit Marine Drive, Carter Road, Worli Seaface, Juhu Beach to see the locals celebrate with crackers",
      timing: "Usually during the months of October-November",
      img: "./Views/diwali2.jpg"
    },
    { 
      title: "Navratri",
      about1: "After Ganesh Chaturthi, Navratri is also celebrated with great enthusiasm in Mumbai. Traditional Navratri is performed with clap by taking steps on various tunes. On the tunes of the thundering drums, Dandiya Raas is performed with sticks. People of all ages take part in the performance with great fervour. Nowadays, the traditional instruments are taken over by remix songs and DJ.",
      about2: "n literal words, Nav means Nine and ratri means Night. So, it is basically a celebration of nine nights. However, Navratri is not just about coming together and dancing to the beats of the music. It also symbolizes the nine forms of Goddess Durga and the beginning of the autumn season in India",
      location: "Dance the night away Kora Kendra Ground, Police Ground Ghatkoper, Meera's Navratri Utsav",
      timing: "Usually during the month of October",
      img: "./Views/navratri2.jpg"
    },
    { 
      title: "Christmas",
      about1: "Christmas is celebrated with much fervor in Mumbai, and it isn’t just the city’s dynamic Christian – mostly Catholic – community that makes sure it is done right. Mumbaikars from across the religious spectrum have their own ways of celebrating this special occasion. With well-attended Masses held at historic churches, citywide jolly decorations, Christmas-themed parties and events, and plenty of festive dining options, Christmas in Mumbai is an affair not to miss!",
      about2: "Mumbai is home to many historic churches, most of which hold special Christmas Midnight Masses that attract thousands of faithful from across the city. Many of the city’s favorite bars and nightclubs host coveted Christmas Eve parties. With celebrity DJs spinning the hippest tracks, plenty of festive-themed food and drinks, plus energetic crowds, you are sure to have a good time.",
      location: "Attend the Christmass Mass at Mount Mary Church and St. Andrews Church",
      timing: "24th-25th December",
      img: "./Views/christmas2.jpg"
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
              <div class="row" id="about">{item.about2}</div>
              <br/>
              <div class="row"><h3><b>TOP SPOTS : </b></h3></div>
              <div class="row" id="about">{item.location}</div>
              <br/>
              <div class="row"><h3><b>WHEN : </b></h3></div>
              <div class="row" id="about">{item.timing}</div>
              <br/>
              <a href="test3.html" class="button">View in Maps</a>
              </div>
            </div>
          </div></div>) : (<p></p>) )
    return (<div>{allEmps}</div>)
   }
}