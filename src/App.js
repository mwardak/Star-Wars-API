import React from "react";
import searchbar from "./components/searchbar";
import table from "./components/table";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      birthdate: "",
      height: "",
      mass: "",
      homeworld: "",
      species:"",
      character: [],
    };
  }

  updateCharacter = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };


  render() {
    return (
      <div className="container">
        <form updateCharacter={this.updateCharacter} />
        <table 
        character={this.state.character}
        />
      </div>
    );
  }
}

export default App;
