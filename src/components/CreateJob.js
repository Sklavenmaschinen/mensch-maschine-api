import React, { Component } from 'react'

export default class CreateJob extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      type: "scheduled",
      description: "",
      error: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    if (this.state.name.length === 0 || this.state.type.length === 0 || this.state.description.length === 0) {
      this.setState({
        error: "All fields are mandatory."
      });
    } else {
      this.setState({
        error: null
      });
      // TODO add action to create job and redirect to edit
      this.props.history.push('/jobs/123');
    }
  }

  handleChange(e) {
    if (e.target.value.length === 0) {
      e.target.classList.add('invalid');
    } else {
      e.target.classList.remove('invalid');
    }

    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  render() {
    return (
      <div>
        {this.state.error &&
          <div className="row center-align error-container">
            <div className="col s12 m10 l8 offset-m1 offset-l2">
              <p>{this.state.error}</p>
              <span className="right" onClick={() => this.setState({ error: null })}><i className="tiny material-icons">close</i></span>
            </div>
          </div>}
        <div className="row">
          <form className="col s12 m10 l8 offset-m1 offset-l2" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s12 m8">
                <input id="name" type="text" value={this.state.name} onChange={this.handleChange} />
                <label htmlFor="name">Name</label>
              </div>

              <div className="input-field col s12 m4">
                <label htmlFor="type" style={{ marginTop: "-2.5em" }}>Type</label>
                <select id="type" className="browser-default" value={this.state.type} onChange={this.handleChange}>
                  <option value="scheduled">Scheduled</option>
                </select>
              </div>

              <div className="input-field col s12">
                <textarea id="description" className="materialize-textarea" value={this.state.description} onChange={this.handleChange}></textarea>
                <label htmlFor="description">Description</label>
              </div>
            </div>
            <div className="row">
              <div className="col s12 center-align">
                <button className="btn" type="submit">Create<i className="material-icons right">send</i></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
