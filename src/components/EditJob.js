import React, { Component } from 'react'
import { Range } from 'rc-slider';

import 'rc-slider/assets/index.css';
import './EditJob.css';


export default class EditJob extends Component {

  constructor(props) {
    super(props);

    this.state = this.props.match.params.jobId === "newJob"
      ? {
        error: null,
        id: this.props.jobId,
        name: "",
        type: "scheduled",
        description: "",
        schedulingEnabled: false,
        cronexp: "",
        variationRage: [0, 0],
        prevailingRules: []
      }
      : {
        error: null,
        id: "37cbea8c-8e38-4615-b87d-503b85df310d",
        name: "Lorem ipsum dolor sit amet",
        type: "scheduled",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        schedulingEnabled: false,
        cronexp: "0 0 9 ? * MON-FRI *",
        variationRage: [0, 0],
        prevailingRules: []
      };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRangeChange = this.handleRangeChange.bind(this);
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
      this.props.history.push('/jobs');
    }
  }

  handleDelete(e) {
    e.preventDefault();

    // TODO popup confirmation before delete
    console.log("delete", this.state);
  }

  handleChange(e) {
    if (e.target.value.length === 0) {
      e.target.classList.add('invalid');
    } else {
      e.target.classList.remove('invalid');
    }

    this.setState({
      [e.target.id]: e.target.checked === undefined ? e.target.value : e.target.checked,
    });
  }

  handleRangeChange(value) {
    value[0] = value[0] > 0 ? 0 : value[0];
    value[1] = value[1] < 0 ? 0 : value[1];
    this.setState({
      variationRage: value
    });
  }

  render() {
    return (
      <div>

        {this.state.error &&
          <div className="row center-align error-container">
            <div className="col s12">
              <p>{this.state.error}</p>
              <span className="right" onClick={() => this.setState({ error: null })}><i className="tiny material-icons">close</i></span>
            </div>
          </div>}

        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>

            <h6 className="section-title">Details</h6>

            <div className="row">

              <div className="col s12">
                <div className="row">
                  <div className="col s12 m2 label">Type</div>
                  <div className="col s12 m5 xl3">
                    <select id="type" className="browser-default" value={this.state.type} onChange={this.handleChange}>
                      <option value="scheduled">Scheduled</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col s12">
                  <div className="col s12 m2 label">Name</div>
                  <div className="col s12 m10 xl8">
                    <input id="name" type="text" value={this.state.name} onChange={this.handleChange} />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col s12">
                  <div className="col s12 m2 label">Description</div>
                  <div className="col s12 m10 xl8">
                    <textarea id="description" className="materialize-textarea" value={this.state.description} onChange={this.handleChange}></textarea>
                  </div>
                </div>
              </div>

            </div>


            <div className="divider"></div>
            <h6 className="section-title">Scheduling</h6>
            <div className="row">

              <div className="row">
                <div className="col s12">
                  <div className="col s12 m2 label">Enabled</div>
                  <div className="col s12 m5 xl3">
                    <div className="switch switch-container">
                      <label>
                        <input type="checkbox" id="schedulingEnabled" checked={this.state.schedulingEnabled} onChange={this.handleChange} />
                        <span className="lever"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col s12">
                  <div className="col s12 m2 label">Cron Expression
                  <small style={{ display: "block", lineHeight: "0" }}><a className="right" href="http://cronmaker.com" target="_blank" rel="noopener noreferrer">CronMaker</a></small></div>
                  <div className="col s12 m5 xl3">
                    <input id="cronexp" type="text" value={this.state.cronexp} onChange={this.handleChange} />

                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col s12">
                  <div className="col s12 m2 label">Variation</div>
                  <div className="col s12 m10">
                    <div className="col s12 m3 range-container">
                      <Range min={-5} max={5} allowCross={false} value={this.state.variationRage} onChange={this.handleRangeChange} />
                    </div>
                    <div className="col s12 m9 range-label">
                      {this.state.variationRage[0] === 0 && this.state.variationRage[0] === this.state.variationRage[1] && <div>Exactaly at cron time</div>}
                      {this.state.variationRage[0] === 0 && this.state.variationRage[1] > 0 && <div>Between the cron time and {this.state.variationRage[1]} minutes after</div>}
                      {this.state.variationRage[1] === 0 && this.state.variationRage[0] < 0 && <div>Between the cron time and {Math.abs(this.state.variationRage[0])} minutes before</div>}
                      {this.state.variationRage[0] < 0 && this.state.variationRage[1] > 0 && <div>Between {Math.abs(this.state.variationRage[0])} minutes before and {this.state.variationRage[1]} minutes after the cron time</div>}
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col s12">
                  <div className="col s12 m2 label">Prevailing Rules</div>
                  <div className="col s12 m10">

                    <div className="prevailing-rules-container">
                      <div className="rule exclusive">Feriados</div>
                      <div className="rule exclusive">Férias</div>
                      <div className="rule inclusive">Hora extra</div>
                      <div className="add-rule"><i className="material-icons">add</i></div>
                    </div>

                  </div>
                </div>
              </div>

            </div>

            <div className="divider"></div>
            <h6 className="section-title">Execution</h6>
            <h5>Do</h5>
            <div className="indented-block">
              <h6>Try {'{'}</h6>

              <div className="indented-block">

                <div className="snippet-container">
                  <div className="snippet">Ligar cafeteira</div>
                  <div className="add-snippet"><i className="material-icons">add</i></div>
                </div>

              </div>

              <h6>{'}'} Catch {'{'}</h6>

              <div className="indented-block">

                <div className="snippet-container">
                  <div className="snippet">Send e-mail</div>
                  <div className="add-snippet"><i className="material-icons">add</i></div>
                </div>

              </div>

              <h6>{'}'} Finally {'{'}</h6>

              <div className="indented-block">

                <div className="snippet-container">
                  <div className="snippet">Send message</div>
                  <div className="add-snippet"><i className="material-icons">add</i></div>
                </div>

              </div>

              <h6>{'}'}</h6>
            </div>
            <h5>Done</h5>



            <div className="divider"></div>
            <h6 className="section-title">Execution History</h6>
            <div className="row execution-history-container">
              <table className="execution-history">
                <thead>
                  <tr>
                    <th>Timestamp</th>
                    <th>Log</th>
                    <th>State</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2018-07-16 20:15</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
                    <td>Succeded</td>
                  </tr>
                  <tr>
                    <td>2018-07-16 20:15</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
                    <td>Succeded</td>
                  </tr>
                  <tr>
                    <td>2018-07-16 20:15</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
                    <td>Succeded</td>
                  </tr>
                  <tr>
                    <td>2018-07-16 20:15</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
                    <td>Succeded</td>
                  </tr>
                  <tr>
                    <td>2018-07-16 20:15</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
                    <td>Succeded</td>
                  </tr>
                  <tr>
                    <td>2018-07-16 20:15</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
                    <td>Succeded</td>
                  </tr>
                  <tr>
                    <td>2018-07-16 20:15</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
                    <td>Succeded</td>
                  </tr>
                  <tr>
                    <td>2018-07-16 20:15</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
                    <td>Succeded</td>
                  </tr>
                  <tr>
                    <td>2018-07-16 20:15</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
                    <td>Succeded</td>
                  </tr>
                  <tr>
                    <td>2018-07-16 20:15</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
                    <td>Succeded</td>
                  </tr>
                  <tr>
                    <td>2018-07-16 20:15</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
                    <td>Succeded</td>
                  </tr>
                  <tr>
                    <td>2018-07-16 20:15</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
                    <td>Succeded</td>
                  </tr>
                  <tr>
                    <td>2018-07-16 20:15</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
                    <td>Succeded</td>
                  </tr>
                  <tr>
                    <td>2018-07-16 20:15</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
                    <td>Succeded</td>
                  </tr>
                  <tr>
                    <td>2018-07-16 20:15</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
                    <td>Succeded</td>
                  </tr>
                  <tr>
                    <td>2018-07-16 20:15</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
                    <td>Succeded</td>
                  </tr>
                  <tr>
                    <td>2018-07-16 20:15</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
                    <td>Succeded</td>
                  </tr>
                  <tr>
                    <td>2018-07-16 20:15</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
                    <td>Succeded</td>
                  </tr>
                  <tr>
                    <td>2018-07-16 20:15</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
                    <td>Succeded</td>
                  </tr>
                  <tr>
                    <td>2018-07-16 20:15</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
                    <td>Succeded</td>
                  </tr>

                </tbody>
              </table>
            </div>



            <div className="divider"></div>
            <div className="row action-buttons">
              <div className="col s12 center-align">
                <button className="btn red lighten-2" onClick={this.handleDelete}>Delete</button>
                <div style={{ display: "inline-block", margin: "0 0.5em" }}></div>
                <button className="btn" type="submit">Save<i className="material-icons left">save</i></button>
              </div>
            </div>
          </form>
        </div>
      </div >
    )
  }
}
