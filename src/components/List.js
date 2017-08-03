import React, { Component } from 'react';
import { connect } from 'react-redux';
import getUsers from '../actions';

class List extends Component {
  componentDidMount() {
    this.props.getUsers();
  }


  render() {
    return(
      <div className="col-sm-6 col-sm-offset-3">
        {
          this.props.users.map((user, index) =>  {
            return (
              <div key={index} className="panel panel-default">
                <div className="panel-heading">
                  {user.name}
                </div>
                <div className="panel-body">
                  Some company!
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('state:', state)
  return {
    users: state
  }
}



export default connect(mapStateToProps, { getUsers })(List);
