import React, { Component } from 'react'

import './Workers.css';


export default class Workers extends Component {
  render() {
    return (
      <div>

        <div className="row">
          <div className="col s12 workers-filter">
            <ul>
              <li className="active"><a className="btn-flat">All Workers</a></li>
            </ul>
          </div>
        </div>

        <div>

          <div className="row worker-item">
            <div className="col s12">
              <div className="col s12 m8">
                <h5>Single shared worker</h5>
                <p className="worker-description">Single shared worker (as the name says) is the only worker available and it's shared between other users</p>
              </div>

              <div className="col s12 m4 worker-health-indicator up">
                <div className="right">
                  <i className="material-icons left">play_circle_filled</i>
                  UP
                </div>
              </div>
            </div>

            <div className="col s12">
              <h6><small>Details</small></h6>
              <div className="divider"></div>

              <div className="worker-details">

                <div className="row">

                  <div className="col s12 m6 xl4">
                    <div className="col s12 m2 label">Label</div>
                    <div className="col s12 m10 xl10 value">
                      <div>Value</div>
                    </div>
                  </div>

                  <div className="col s12 m6 xl4">
                    <div className="col s12 m2 label">Label</div>
                    <div className="col s12 m10 xl10 value">
                      <div>Value</div>
                    </div>
                  </div>

                  <div className="col s12 m6 xl4">
                    <div className="col s12 m2 label">Label</div>
                    <div className="col s12 m10 xl10 value">
                      <div>Value</div>
                    </div>
                  </div>

                  <div className="col s12 m6 xl4">
                    <div className="col s12 m2 label">Label</div>
                    <div className="col s12 m10 xl10 value">
                      <div>Value</div>
                    </div>
                  </div>

                  <div className="col s12 m6 xl4">
                    <div className="col s12 m2 label">Label</div>
                    <div className="col s12 m10 xl10 value">
                      <div>Value</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    )
  }
}
