import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { getUsers }         from '../actions';

class List extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div>
        {
          this.props.users.map((user, index) => {
            return(
              <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3" key={index}>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3>{user.name}</h3>
                  </div>
                  <div className="panel-body">Co: <em>{user.company.name}</em></div>
                </div>
                <hr/>
              </div>
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

export default connect(mapStateToProps, { getUsers })(List);
