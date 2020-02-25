/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Main from './components/main/main.js';
import './app.scss';




class App extends React.Component {
  render(){
    return(
      <React.Fragment>

        <Header />
        <Main />
        <Footer />

      </React.Fragment>
    );
  }
}



export default App ;
