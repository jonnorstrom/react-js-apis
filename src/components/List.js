import React, { Component } from 'react';
import axios from 'axios';

export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      err: ""
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        this.setState({
          list: res.data
        })
      })
      .catch(err => {
        console.log(err);
        this.setState({err: "Something went wrong :("});
      })
  }

  renderItems() {
    const {list} = this.state

    return list.map((item, index) => {
      return(
        <a key={index} className="col-md-4 list-group-item col-md-offset-4" style={{marginBottom: "10px"}}>
          <h4 className="list-group-item-heading">
             {item.name}
          </h4>
          <p>{item.website}</p>
       </a>
      )
    })
  }

  renderErr() {
    if (this.state.err) {
      return(
        <h4>
          {this.state.err}
        </h4>
      )
    }
  }

  render() {
    return(
      <div className="list-group">
       {this.renderItems()}
       {this.renderErr()}
      </div>
    )
  }
}
