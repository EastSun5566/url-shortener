import React, { Component } from "react";

export default class Form extends Component {
  state = {
    link: {}
  };

  updataLink = ({ target }) => {
    this.setState(prevState => ({
      link: {
        ...prevState.link,
        [target.id]: target.value
      }
    }));
  };

  getShortUrl = e => {
    e.preventDefault();
    const { link } = this.state;

    console.log(link);
  };

  render() {
    return (
      <form onSubmit={this.getShortUrl}>
        <div className="form-group">
          <label htmlFor="orginalUrl">🔥 URL</label>
          <input
            type="url"
            className="form-control"
            id="orginalUrl"
            placeholder="e.g: https://github.com/EastSun5566"
            autoFocus
            required
            onChange={this.updataLink}
          />
        </div>

        <div className="form-group">
          <label htmlFor="customizedPath">🔥 Customized path</label>
          <input
            type="text"
            className="form-control"
            id="customizedPath"
            placeholder="e.g: chill-out"
            required
            onChange={this.updataLink}
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary btn-lg btn-block">
            Submit
          </button>
        </div>
      </form>
    );
  }
}
