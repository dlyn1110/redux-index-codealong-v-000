import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {
  render() {
    return(
      <div></div>
    );
  }

};

export default connect()(TodosContainer);
