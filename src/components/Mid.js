import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scroll-menu';
import { Navigate } from "react-router-dom";
import './mid.css';

// list of items
const list = [
  { name: '29th June' },
  { name: '30th June' },
  { name: '1st July' },
  { name: '2nd July' },
  { name: '3rd July' },
  { name: '4th July' },
  { name: '5th July' },
  { name: '6th July' },
  { name: '7th July' },
  { name: '8th July' },
  { name: '9th July' },
  { name: '10th July' },
  { name: '11th July' },
  { name: '12th July' },
  { name: '13th July' },
  { name: '14th July' },

];

// One item component
// selected prop will be passed
const MenuItem = ({ text, selected }) => {
  return <div
    className={`menu-item ${selected ? 'active' : ''}`}
  >{text}</div>;
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(el => {
    const { name } = el;

    return <MenuItem text={name} key={name} selected={selected} />;
  });


const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const selected = '9th July';

export class Mid extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(list, selected);
  }

  state = {
    selected
  };

  state = { redirect: null };

  onSelect = key => {
    console.log('fuck off')
    this.setState({ selected: key });
    this.setState({ redirect: '/details/' + key })
  }


  render() {
    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />
    }
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;

    return (
      <div style={{ "margin": '5vh 0 0 0' }}>
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}