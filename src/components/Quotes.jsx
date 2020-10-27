import React, { Component } from "react";
import axios from "axios";

class Quotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      simpson: ""
    };
    this.getSimpson = this.getSimpson.bind(this);
  }

  getSimpson() {
    axios
      .get("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        this.setState({
          simpson: data[0],
        });
      });
  }

  
  render() {
    const {simpson} = this.state;
    
    return (
      <div>
        <button id="btn" type="button" onClick={this.getSimpson}>
          select a new quote
        </button>
        <div id="simpson">
          <h1>{simpson.quote}</h1>
          <p>
            <strong>{simpson.character}</strong>
          </p>
          <img
            src={simpson.image}
            alt={simpson.character}
          />
        </div>
      </div>
    );
  }
}

export default Quotes;
