import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './Jobs.css';


export default class Jobs extends Component {
  render() {
    return (
      <div>

        <div className="row">
          <div className="col s12 jobs-filter">
            <ul>
              <li className="active"><a className="btn-flat">All Jobs</a></li>
              <li className="right">
                <Link to="/jobs/newJob" className="btn-flat">
                  <i className="tiny material-icons left">add</i>
                  New job
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div>

          <div className="row job-item">
            <div className="col s12">
              <h5><Link to="/jobs/37cbea8c-8e38-4615-b87d-503b85df310d">Lorem ipsum dolor sit amet</Link></h5>
              <p className="job-description">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

              <div className="right">
                <div className="switch right-align">
                  <label>
                    Active
                  <input type="checkbox" checked onChange={() => []} />
                    <span className="lever"></span>
                  </label>
                </div>
              </div>

              <div>
                <label>Last executed</label>
                <div>2018-07-15 20:26
                  <i className="tiny material-icons succeeded">check_circle</i></div>
              </div>
              <div>
                <label>Next execution</label>
                <div>2018-07-15 20:26 <small>(8:30 from now)</small></div>
              </div>
            </div>
          </div>

          <div className="row job-item">
            <div className="col s12">
              <h5><Link to="/jobs/456">Lorem ipsum dolor sit amet</Link></h5>
              <p className="job-description">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

              <div className="right">
                <div className="switch right-align">
                  <label>
                    Active
                  <input type="checkbox" checked={false} onChange={() => []} />
                    <span className="lever"></span>
                  </label>
                </div>
              </div>

              <div>
                <label>Last executed</label>
                <div>2018-07-15 20:26
                  <i className="tiny material-icons failed">cancel</i></div>
              </div>
              <div>
                <label>Next execution</label>
                <div><small>Never</small></div>
              </div>
            </div>

          </div>

        </div>
      </div>
    )
  }
}
