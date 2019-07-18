import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Header() {
  return (
    <div className="head">
      <h1> React shopping list</h1>
    </div>
  );
}

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.items
    };
  }
  clickHandler() {
    let newItem = prompt("what do you want to add to your list?");
    this.setState({
      list: [...this.state.list, newItem]
    });
  }
  render() {
    let shoppingList = this.state.list;
    return (
      <div className="list">
        {shoppingList.map(e => (
          <li>{e}</li>
        ))}
        <button onClick={this.clickHandler.bind(this)}>add item</button>
        <input placeholder="please add item to add" />
      </div>
    );
  }
}

function Body() {
  return (
    <div className="body">
      <List items={["eggs", "bread", "cheese"]} />
      <List items={["apple", "orange", "pear"]} />
    </div>
  );
}

function Footer() {
  return (
    <>
      <div className="foot">placeholder footer text</div>
    </>
  );
}

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
