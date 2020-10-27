import React, { Component } from "react";
import axios from "axios";

const firstQuote = [
  {
    quote:
      "Shoplifting is a victimless crime, like punching someone in the dark.",
    character: "Nelson Muntz",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"
  }
];

class Quotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      simpson: firstQuote[0]
    };
    this.getSimpson = this.getSimpson.bind(this);
  }

  componentDidMount() {
    this.getSimpson();
  }

  getSimpson = () => {
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
