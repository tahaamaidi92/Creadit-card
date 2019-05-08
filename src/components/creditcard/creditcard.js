import React, { Component } from 'react';
import './creditcard.css';
import puce from '../image/pus.png';
import visa from '..//image/visa.png';
class Creditcard extends Component {
    state = {  }
    render() { 
        return ( 
     <div className="divone">
        <p class="title"> CREDIT CARD</p>
        <div className="div1">
         <img src={puce} className="logo" alt="logo"/>
         <p className="craditNumber"> 7253 3256 7895 1245 </p>
        </div>
        <div className="div2">
        <h2 className="h-div2"> 5422</h2>
        <p className="valid">valid <br/> thru</p>
        <p className='month'>month/year <br/><span className="span"> 11/50</span></p>
        </div>
        <div className="div3">
         <h2 className="h-div3"> cardholder </h2>
         <img src={visa} className="visa" alt="visa"/>
        </div>
         
     </div>
         );
    }
}
 
export default Creditcard;