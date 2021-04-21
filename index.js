import React, { Component } from "react";
import { render } from "react-dom";
import ListItem from "./listItem/listItem";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: null,
      todo: [
        { id: 0, text: "kod yaz", status: false },
        { id: 1, text: "kahve iç", status: false },
        { id: 2, text: "yemek ye", status: false }
      ]
    };
  }

  inputHandleChange(event) {
    this.setState({ text: event.target.value });
  }

  addItem() {
    const item = {
      id: this.state.todo.length + 1,
      text: this.state.text,
      status: false
    };
    let todos = this.state.todo;
    todos.push(item);
    this.setState({
      todo: todos
    });
  }

  changeProps(getReturnProps) {
    console.log(getReturnProps);
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === getReturnProps.id) {
          item = getReturnProps;
        }
        return item;
      })
    });
  }

  render() {
    return (
      <div className="container">
        <input
          type="text"
          id="taskinput"
          onChange={this.inputHandleChange.bind(this)}
        />{" "}
        <button onClick={() => this.addItem()}>+ add</button>
        <ul>
          {this.state.todo.map((task, index) => (
            <ListItem
              key={index}
              item={task}
              change={this.changeProps.bind(this)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
