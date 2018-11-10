import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <Link to="/createtest">Create Test</Link>
        <Link to="/studentlist">Student List</Link>
        <Link to="/examlist">Exam List</Link>
        <Link to="/testresult">Test Result</Link>
        <Link to="/importquestion">Import Question</Link>
      </div>
    );
  }
}

export default Nav;
