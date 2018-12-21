import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Home from './Home'
import Pray from './Pray'
import Festival from './Festival'
import Shop from './Shop'
import Nightlife from './Nightlife'
import Places from './Places'
import Prayer from './Prayer'
import Celebration from './Celebration'
import Roam from './Roam'
import Shopping from './Shopping'
import Clubbing from './Clubbing'
import Food from './Food'
import Eat from './Eat'
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Route exact={true} path='/' render={() => (
        <div class="App">
          <Header/>
          <Home/>
        </div>
        )}/>
        <Route exact={true} path='/pray' render={() => (
        <div class="App">
          <Header/>
          <Pray/>
        </div>
        )}/>
        <Route exact={true} path='/siddhivinayak' render={() => (
        <div class="App">
          <Header/>
          <Prayer id={0}/>
        </div>
        )}/>
        <Route exact={true} path='/iskcon' render={() => (
        <div class="App">
          <Header/>
          <Prayer id={1}/>
        </div>
        )}/>
        <Route exact={true} path='/hajiali' render={() => (
        <div class="App">
          <Header/>
          <Prayer id={2}/>
        </div>
        )}/>
        <Route exact={true} path='/mahalakshmi' render={() => (
        <div class="App">
          <Header/>
          <Prayer id={3}/>
        </div>
        )}/>
        <Route exact={true} path='/babulnath' render={() => (
        <div class="App">
          <Header/>
          <Prayer id={4}/>
        </div>
        )}/>
        <Route exact={true} path='/mountmary' render={() => (
        <div class="App">
          <Header/>
          <Prayer id={5}/>
        </div>
        )}/>
        <Route exact={true} path='/mahim' render={() => (
        <div class="App">
          <Header/>
          <Prayer id={6}/>
        </div>
        )}/>
        <Route exact={true} path='/andrews' render={() => (
        <div class="App">
          <Header/>
          <Prayer id={7}/>
        </div>
        )}/>
        <Route exact={true} path='/festival' render={() => (
        <div class="App">
          <Header/>
          <Festival/>
        </div>
        )}/>
        <Route exact={true} path='/ganpati' render={() => (
        <div class="App">
          <Header/>
          <Celebration id={0}/>
        </div>
        )}/>
        <Route exact={true} path='/dahihandi' render={() => (
        <div class="App">
          <Header/>
          <Celebration id={1}/>
        </div>
        )}/>
        <Route exact={true} path='/holi' render={() => (
        <div class="App">
          <Header/>
          <Celebration id={2}/>
        </div>
        )}/>
        <Route exact={true} path='/diwali' render={() => (
        <div class="App">
          <Header/>
          <Celebration id={3}/>
        </div>
        )}/>
        <Route exact={true} path='/navratri' render={() => (
        <div class="App">
          <Header/>
          <Celebration id={4}/>
        </div>
        )}/>
        <Route exact={true} path='/christmas' render={() => (
        <div class="App">
          <Header/>
          <Celebration id={5}/>
        </div>
        )}/>
        <Route exact={true} path='/shop' render={() => (
        <div class="App">
          <Header/>
          <Shop/>
        </div>
        )}/>
        <Route exact={true} path='/causeway' render={() => (
        <div class="App">
          <Header/>
          <Shopping id={0}/>
        </div>
        )}/>
        <Route exact={true} path='/linking' render={() => (
        <div class="App">
          <Header/>
          <Shopping id={1}/>
        </div>
        )}/>
        <Route exact={true} path='/chorbazaar' render={() => (
        <div class="App">
          <Header/>
          <Shopping id={2}/>
        </div>
        )}/>
        <Route exact={true} path='/hindmata' render={() => (
        <div class="App">
          <Header/>
          <Shopping id={3}/>
        </div>
        )}/>
        <Route exact={true} path='/zaveri' render={() => (
        <div class="App">
          <Header/>
          <Shopping id={4}/>
        </div>
        )}/>
        <Route exact={true} path='/mangaldas' render={() => (
        <div class="App">
          <Header/>
          <Shopping id={5}/>
        </div>
        )}/>
        <Route exact={true} path='/nightlife' render={() => (
        <div class="App">
          <Header/>
          <Nightlife/>
        </div>
        )}/>
        <Route exact={true} path='/bcb' render={() => (
        <div class="App">
          <Header/>
          <Clubbing id={0}/>
        </div>
        )}/>
        <Route exact={true} path='/tap' render={() => (
        <div class="App">
          <Header/>
          <Clubbing id={1}/>
        </div>
        )}/>
        <Route exact={true} path='/tamasha' render={() => (
        <div class="App">
          <Header/>
          <Clubbing id={2}/>
        </div>
        )}/>
        <Route exact={true} path='/social' render={() => (
        <div class="App">
          <Header/>
          <Clubbing id={3}/>
        </div>
        )}/>
        <Route exact={true} path='/bombayadda' render={() => (
        <div class="App">
          <Header/>
          <Clubbing id={4}/>
        </div>
        )}/>
        <Route exact={true} path='/tryst' render={() => (
        <div class="App">
          <Header/>
          <Clubbing id={5}/>
        </div>
        )}/>
        <Route exact={true} path='/ttt' render={() => (
        <div class="App">
          <Header/>
          <Clubbing id={6}/>
        </div>
        )}/>
        <Route exact={true} path='/lod' render={() => (
        <div class="App">
          <Header/>
          <Clubbing id={7}/>
        </div>
        )}/>
        <Route exact={true} path='/aer' render={() => (
        <div class="App">
          <Header/>
          <Clubbing id={8}/>
        </div>
        )}/>
        <Route exact={true} path='/barrel' render={() => (
        <div class="App">
          <Header/>
          <Clubbing id={9}/>
        </div>
        )}/>
        <Route exact={true} path='/rude' render={() => (
        <div class="App">
          <Header/>
          <Clubbing id={10}/>
        </div>
        )}/>
        <Route exact={true} path='/playboy' render={() => (
        <div class="App">
          <Header/>
          <Clubbing id={11}/>
        </div>
        )}/>
        <Route exact={true} path='/places' render={() => (
        <div class="App">
          <Header/>
          <Places/>
        </div>
        )}/>
        <Route exact={true} path='/marinedrive' render={() => (
        <div class="App">
          <Header/>
          <Roam id={0}/>
        </div>
        )}/>
        <Route exact={true} path='/gateway' render={() => (
        <div class="App">
          <Header/>
          <Roam id={1}/>
        </div>
        )}/>
        <Route exact={true} path='/filmcity' render={() => (
        <div class="App">
          <Header/>
          <Roam id={2}/>
        </div>
        )}/>
        <Route exact={true} path='/sealink' render={() => (
        <div class="App">
          <Header/>
          <Roam id={3}/>
        </div>
        )}/>
        <Route exact={true} path='/cst' render={() => (
        <div class="App">
          <Header/>
          <Roam id={4}/>
        </div>
        )}/>
        <Route exact={true} path='/asiatic' render={() => (
        <div class="App">
          <Header/>
          <Roam id={5}/>
        </div>
        )}/>
        <Route exact={true} path='/juhubeach' render={() => (
        <div class="App">
          <Header/>
          <Roam id={6}/>
        </div>
        )}/>
        <Route exact={true} path='/nehru' render={() => (
        <div class="App">
          <Header/>
          <Roam id={7}/>
        </div>
        )}/>
        <Route exact={true} path='/bandrafort' render={() => (
        <div class="App">
          <Header/>
          <Roam id={8}/>
        </div>
        )}/>
        <Route exact={true} path='/chowpatty' render={() => (
        <div class="App">
          <Header/>
          <Roam id={9}/>
        </div>
        )}/>
        <Route exact={true} path='/wankhede' render={() => (
        <div class="App">
          <Header/>
          <Roam id={10}/>
        </div>
        )}/>
        <Route exact={true} path='/pagoda' render={() => (
        <div class="App">
          <Header/>
          <Roam id={11}/>
        </div>
        )}/>
        <Route exact={true} path='/food' render={() => (
        <div class="App">
          <Header/>
          <Food/>
        </div>
        )}/>
        <Route exact={true} path='/ramashray' render={() => (
        <div class="App">
          <Header/>
          <Eat id={0}/>
        </div>
        )}/>
        <Route exact={true} path='/sodabottle' render={() => (
        <div class="App">
          <Header/>
          <Eat id={1}/>
        </div>
        )}/>
        <Route exact={true} path='/mirchi' render={() => (
        <div class="App">
          <Header/>
          <Eat id={2}/>
        </div>
        )}/>
        <Route exact={true} path='/krustom' render={() => (
        <div class="App">
          <Header/>
          <Eat id={3}/>
        </div>
        )}/>
        <Route exact={true} path='/bastian' render={() => (
        <div class="App">
          <Header/>
          <Eat id={4}/>
        </div>
        )}/>
        <Route exact={true} path='/bombaybarbeque' render={() => (
        <div class="App">
          <Header/>
          <Eat id={5}/>
        </div>
        )}/>
        <Route exact={true} path='/mamagoto' render={() => (
        <div class="App">
          <Header/>
          <Eat id={6}/>
        </div>
        )}/>
        <Route exact={true} path='/dibella' render={() => (
        <div class="App">
          <Header/>
          <Eat id={7}/>
        </div>
        )}/>
        <Route exact={true} path='/joeys' render={() => (
        <div class="App">
          <Header/>
          <Eat id={8}/>
        </div>
        )}/>
        <Route exact={true} path='/yautcha' render={() => (
        <div class="App">
          <Header/>
          <Eat id={9}/>
        </div>
        )}/>
        <Route exact={true} path='/pizzeria' render={() => (
        <div class="App">
          <Header/>
          <Eat id={10}/>
        </div>
        )}/>
        <Route exact={true} path='/jlwa' render={() => (
        <div class="App">
          <Header/>
          <Eat id={11}/>
        </div>
        )}/>
      </div>
      </BrowserRouter>
    );
  }
}


export default App;
