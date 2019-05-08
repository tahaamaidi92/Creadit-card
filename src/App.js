import React, { Component } from 'react';
import Creditcard from './components/creditcard/creditcard.js';
class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div className='creditcard'>
        <Creditcard/>
      </div>
     );
  }
}
 
export default App;
