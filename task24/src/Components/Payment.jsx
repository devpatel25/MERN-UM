import React, { useContext } from 'react';
import CartContext from "../CartContext";
import './Payment-style.css'
import 'react-credit-cards/es/styles-compiled.css';
import Cards from 'react-credit-cards';


export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
  
  render() {
    return (
      <div className='leftcon'>
        <div id="PaymentForm">
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
          />
          <form className='paymentdetails'>
            <input
              type="tel"
              name="number"
              placeholder="Card Number"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <input
              type="text"
              name="name"
              placeholder="Cardholder's Name"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <div className='con'>
              <input
                type="number"
                name="expiry"
                placeholder="Expiry Date"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <input
                type="password"
                name="cvv"
                placeholder="CVV"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <button className='paybtn'>Pay Now</button>
          </form>
        </div>
      </div>
    );
  }
}

