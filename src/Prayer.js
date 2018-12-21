import React, { Component } from 'react';

export default class Prayer extends Component {

   state = { 

      try:[
    { 
      title: "Siddhivinayak Temple",
      about1: "Siddhivinayak Temple is perhaps the most famous temple in Mumbai, located in Prabhadevi. The temple is dedicated to Lord Ganesha, the elephant-headed God. The temple was founded in 1801 by Devbhai Patil and Laxman Vithu, who also founded many many other Ashtavinayak temples in Maharashtra.",
      about2: " Tuesdays are a special day to visit the temple for darshan. People also believe that if you whisper your innermost wishes into the ear of the idol, they come true. The temple also attracts the likes of celebrities ranging from Bollywood actors to famous sportsmen.",
      location: "S K Bole Marg, Prabhadevi, Mumbai",
      timing: "Wednesday to Monday 5:30 am to 10:00 pm. Tuesdays 3:15 am to 10:00 pm.",
      img: "./Views/siddhivinayak2.jpg"
    },
    { 
      title: "Isckon Temple",
      about1: "ISKCON Temple, Mumbai officially known as Sri Sri Radha Rasabihari ji Temple is a temple in Juhu area in Mumbai in India. It is set upon four acres of land and a stone throw away from Juhu Beach. A.C. Bhaktivedanta Swami Prabhupada, the founder-acharya of ISKCON inspired the construction of the temple in Mumbai.",
      about2: "The presiding Deities at the temple, Sri Sri Gaura-Nitai, Sri Sri Radha Rasabihari and Sri Sri Sita Rama Laxman Hanuman were personally installed by the founder of ISKCON.The temple is visited by thousands of people and devotees during festive occasions.",
      location: "Harekrishna Land, near Chandan Cinema, Juhu, Mumbai, Maharashtra",
      timing: "All days of the week 4.30 am to 1:00 pm and 4:30pm to 9:00 pm.",
      img: "./Views/iskcon2.jpg"
    },
    {
      title: "Haji Ali Dargah",
      about1: "The Haji Ali Dargah was constructed in 1431 in memory of a wealthy Muslim merchant, Sayyed Peer Haji Ali Shah Bukhari, who gave up all his worldly possessions before making a pilgrimage to Mecca. Hailing from Bukhara, in present-day Uzbekistan, Bukhari travelled around the world in the early to mid 15th century, and eventually settled in present-day Mumbai.",
      about2: "The Dargah is built on a tiny islet located 500 meters from the coast, in the middle of Worli Bay,[6] in the vicinity of Worli. The edifice is a brilliant specimen of the Indo-Islamic style of architecture. The islet is linked to the city precinct of Mahalakshmi by a narrow causeway, which is nearly a kilometre (0.62 mile) long.",
      location: "Dargah Rd, Haji Ali, Mumbai, Maharashtra, India",
      timing: "All days of the week 5:30 am to 10:00 pm",
      img: "./Views/hajiali2.jpg"
    },
    { 
      title: "Mahalaxmi Temple",
      about1: "The Mahalaxmi temple contains images of the Tridevi goddesses Mahakali, Mahalakshmi, and Mahasaraswati. All three images are adorned with nose rings, gold bangles and pearl necklaces. The image of Mahalakshmi is in the center shown holding lotus flowers in tandem. The compound of this temple contains several stalls that sell flower garlands and other paraphernalia used by devotees for worship and as offering.",
      about2: "Mahalaxmi Temple is one of the most famous temples of Mumbai situated on Bhulabhai Desai Road in Mahalaxmi area. It is dedicated to Mahalakshmi the central deity of Devi Mahatmyam. The temple was built in 1831 by Dhakji Dadaji (1760–1846), a Hindu merchant",
      location: "Bhulabhai Desai Marg, Mahalaxmi West, Cumballa Hill, Mumbai, Maharashtra ",
      timing: "All days of the week 6:00 am to 10:00 pm",
      img: "./Views/mahalakshmi2.jpg"
    },
    { 
      title: "Babulnath Temple",
      about1: "Babulnath is an ancient Shiva temple in Mumbai, India. Situated on a small hillock near Girgaon Chowpatty, it is one of oldest temples in the city,[1] Shiva in the form of the Lord of the Babul tree is the main deity in this temple. The faithful climb up to the temple and obtain Darshan of the shivling and obtain blessings of the Lord.",
      about2: "When the first temple was built the land belonged to the Parsi community. There were 5 Dakhma's (Parsi final resting place) existing in the vicinity. There was a lot of resistance for the Parsi community at that time for building of the temple.",
      location: "16, Babulnath Road, Charni Road Near, Chowpatty, Mumbai, Maharashtra",
      timing: "All days of the week 5:00 am to 10:00 pm",
      img: "./Views/babulnath2.jpg"
    },
    { 
      title: "Mount Mary Church",
      about1: "The Basilica of Our Lady of the Mount, more commonly known as Mount Mary Church, is a Roman Catholic Basilica located in Bandra, Mumbai. The feast of the Blessed Virgin Mary is celebrated here on the first Sunday after 8 September, the birthday of the Virgin Mary. The feast is followed by a week-long celebration known locally as the Bandra Fair and is visited by thousands of people.",
      about2: "The basilica stands on a hillock, about 80 metres above sea level overlooking the Arabian Sea. It draws lakhs of devotees and pilgrims annually. Many of the faithful attest to the miraculous powers of the Blessed Virgin Mary.",
      location: "Mt Mary Rd, Mount Mary, Bandra West, Mumbai, Maharashtra",
      timing: "Monday to Saturday 8:00 am to 8:30 pm. Sundays 10:00 am to 7:00 pm.",
      img: "./Views/mountmary2.jpg"
    },
    {
      title: "Mahim Dargah",
      about1: "Reported to be 350 years old the Mahim Dargah is dedicated to secular Sufi Saint Makhdoom Ali Mahimi. It is Mumbais oldest Dargah and devotees from different communities come here to seek the blessings of the Saint. It is the only Dargah to have a tomb.",
      about2: "The Mahim Dargah situated in Mumbai is dedicated to Makhdoom Ali Mahimi. He was a Muslim Scholar originating from the Konkan Region in India. Mahimi was born into a family of Arab travellers from Iraq who had settled down on the island of Mahim",
      location: "Dargah Street, The Mahim Makarand CHS, Mahim West, Mahim",
      timing: "All days of the week 5:00 am to 10:00 pm",
      img: "./Views/mahim2.jpg"
    },
    {
      title: "St. Andrews Church",
      about1: "St. Andrew's Church is one of the oldest churches in Mumbai, built by the Portuguese Jesuits in 1575. It stands on the sea-shore of the Bandra suburb of Mumbai, and was the only church there till the first quarter of the 17th century.",
      about2: "The high altar of the church extends almost to the roof, and carries statues of Sacred Heart, Our Lady and St Andrew. Smaller statues of St John the Baptist, St Sebastian and the Bom Jesu are above the main statues.[7] The 16th-century wood side altars were carved and painted in popular Portuguese style. The church also has 16th-century hanging wood panels depicting the Resurrection of the Christ and the Assumption of Mother Mary, and a 16th-century pulpit. ",
      location: "115, Hill Road, Near Holy Family Hospital, Bandra West, Mumbai, Maharashtra ",
      timing: "All days of the week 9:00 am to 7:00 pm",
      img: "./Views/andrews2.jpg"
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
              <div class="row"><h3><b>LOCATION : </b></h3></div>
              <div class="row" id="about">{item.location}</div>
              <br/>
              <div class="row"><h3><b>TIMING : </b></h3></div>
              <div class="row" id="about">{item.timing}</div>
              <br/>
              <a href="test.html" class="button">View in Maps</a>
              </div>
            </div>
          </div></div>) : (<p></p>) )
    return (<div>{allEmps}</div>)
   }
}