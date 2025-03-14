import React, { Component } from "react";

export default class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy User",
        location: "Default",
        avatar_url: "https://dummyuser.com",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    this.setState({ userInfo: json });
    console.log(json);
  }
  render() {
    // const { name } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        {/* <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count Increase
        </button> */}
        <img src={avatar_url} alt="" />
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <h3>Contact: @umairaftab</h3>
      </div>
    );
  }
}
