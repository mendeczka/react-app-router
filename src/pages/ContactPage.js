import React from 'react';
import '../styles/ContactPage.css';
import { Prompt } from 'react-router-dom';


export class ContactPage extends React.Component {

state = {
  value: '',
  isEmpty: false,
}

handleSubmit = (e) => {
  e.preventDefault();
  this.setState({ 
    value: "",
    isEmpty: false,
  
  })
}

handleChange = (e) => {

  if(e.target.value.length > 0) {
  this.setState({ 
    value: e.target.value,
    isEmpty: true,
  }) 
  } else {
    this.setState({ 
      value: e.target.value,
      isEmpty: false,
    })
  }

}



  render() {
    return ( 
      <div className="contact">
        <form onSubmit={this.handleSubmit}>
          <h3>Napisz do nas</h3>
          <textarea value={this.state.value} onChange={this.handleChange} placeholder="wpisz wiadomość"></textarea>
          <button>Wyślij</button>
        </form>
        <Prompt when={this.state.isEmpty} message="Masz nie wypełniony formularz. Czy na pewno chcesz opuścić tą stronę?"/>
      </div>
    );
  }
}

 
// export default ContactPage;