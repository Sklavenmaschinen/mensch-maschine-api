import React, { Component } from 'react'
import shortid from 'shortid';

export default class Overview extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feriados: []
    };
  }

  componentDidMount() {
    fetch('feriados.json')
      .then(res => res.json())
      .then(data => this.setState({ feriados: data }))
  }

  render() {
    const { feriados } = this.state;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Type</th>
              <th>Type Code</th>
            </tr>
          </thead>
          <tbody>
            {feriados.map(feriado =>
              <tr key={shortid.generate()}>
                <td>{feriado['date']}</td>
                <td>{feriado['name']}</td>
                <td>{feriado['type']}</td>
                <td>{feriado['type_code']}</td>
              </tr>)}
          </tbody>
        </table>

      </div>
    )
  }
}
