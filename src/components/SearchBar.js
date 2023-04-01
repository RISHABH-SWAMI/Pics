import React from "react";

class SearchBar extends React.Component {
  // constructor() {
  //   super();
  //   this.onFormSubmit = this.onFormSubmit.bind(this);
  // }
  state = {
    term: "",
    // password: ""
  };

  onFormSubmit = (e) => {
    console.clear();
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" 
          onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            {/* <br /> <br />
            <input
              type="password"
              value={ this.state.password }
              onChange={(e) => this.setState({ password: e.target.value })}
            /> */}
          </div>
          {/* { this.state.password.length < 4 ? 'Password must be atleast of 4 characters' : ''  } */}
        </form>
      </div>
    );
  }
}

export default SearchBar;
