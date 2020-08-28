import React from "react";

class searchbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <div className="row">
          <div
            className="form-group ml-4 auto"
            style={{ color: "black", fontWeight: "bold" }}
          >
            <span>Character:</span>
            <input
              className="form-control"
              type="text"
              name="character"
              value={this.props.character}
              onChange={this.props.updateCharacter}
              placeholder="Search Character?"
            ></input>
          </div>

        </div>
      </form>
    );
  }
}

export default searchbar;
