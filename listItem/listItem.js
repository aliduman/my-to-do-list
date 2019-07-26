import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  taskDone() {
    this.props.item.status = !this.props.item.status;
    this.props.change(this.props.item);
  }

  render(){
    return (
      <li>
        <span>{this.props.item.id}</span>&nbsp;
        <span>{this.props.item.text}</span>&nbsp;
        <span>{this.props.item.status.toString()}</span> &nbsp;
        <button onClick={() => this.taskDone()}>check</button>
      </li>
    );
  }

}

export default ListItem;