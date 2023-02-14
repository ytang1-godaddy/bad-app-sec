import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = { url: "" };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const sanitzied = this.state.url
      .replace("\\", "\\\\")
      .replace("\r", "\\r")
      .replace("\n", "\\n")
      .replace("\t", "\\t")
      .replace("'", "\\'");

    console.log(sanitzied);

    window.location.href = sanitzied;
  };

  handleUrlUpdate = (e) => {
    this.setState({ url: e.target.value });
  };

  render() {
    return (
      <div>
        <input name="url" value={this.state.url} onChange={this.handleUrlUpdate} placeholder="Enter URL" />
        <button>Submit!</button>
      </div>
    );
  }
}
