import React from 'react';
import './App.css';

class HeyMessage extends React.Component {
  render() {
    const names = [
      {
        firstName: 'Christopher',
        lastName: 'Hern',
      },
      {
        firstName: 'Chris',
        lastName: 'Walt',
      },
      {
        firstName: 'Jorge',
        lastName: 'Delt',
      },
    ];
    
    return names.map((name) => {
      return (
        <ContactInfoCard 
          first={name.firstName}
          last={name.lastName}
        />
      )
    })
  }
}

class ContactInfoCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      done: false
    };
  }
  
  handleClick() {
    this.setState({done: !this.state.done});
  };
  
  render() {
    return (
      <div>
        <p>{this.props.first} {this.props.last}</p>
        <span className={this.state.done ? 'classA' : 'classB'}>
          {this.state.done ? 'done' : 'pending'}
        </span>
        <button 
          onClick={this.handleClick}>
           {this.state.done ? 'pending' : 'done'}
        </button>
      </div>
    );
  }
}

export default HeyMessage;
