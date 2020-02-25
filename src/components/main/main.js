import React from 'react';


class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      counter : 0,
    };
  }
  
  
    handleIncrease = e =>{
      console.log('adddd');
      let counter = this.state.counter + 1;
      this.setState({counter});
    }
  
    handleDecrease = e =>{
      let counter = this.state.counter - 1;
      this.setState({counter});
    }
  
    render(){
      return(
  
        <section>
          <div id= 'number'>
            {this.state.counter}
          </div>
          <div>
            <button id='left' onClick = {this.handleIncrease} >+</button>
            <button id='right' onClick = {this.handleDecrease} >-</button>
          </div>
        </section>
      );
    }
}

export default Main ;