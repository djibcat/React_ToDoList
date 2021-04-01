import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const closeIcon = <FontAwesomeIcon icon={faTimes} />;
export default class Todo extends Component {
  state = {
    element: "",
    items: [],
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state.element);
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      element: "",
      items: [...this.state.items, { element: this.state.element }],
    });
  };

  deleteItem = (index) => {
    const itemsArray = this.state.items;
    itemsArray.splice(index, 1);
    this.setState({
      items: itemsArray,
    });
  };

  renderTodo = () => {
    return this.state.items.map((item, index) => {
      return (
        <div className="card mb-3" key={index}>
          <div className="card-body">
            <h4>
              {item.element}
              <i
                style={{ cursor: "pointer", color: "red", float: "right" }}
                onClick={() => this.deleteItem(index)}
              >
                {closeIcon}
              </i>
            </h4>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="card my-3">
          <div className="card-header">To-Do list</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="element"> Choses à faire</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="element"
                  onChange={this.onChange}
                  value={this.state.element}
                />
              </div>
              <button className="btn btn-primary btn-block">Submit</button>
            </form>
          </div>
        </div>
        {this.renderTodo()}
      </React.Fragment>
    );
  }
}
