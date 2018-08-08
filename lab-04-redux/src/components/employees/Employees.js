import React, { Component } from 'react';
import EmployeeTable from './EmployeeTable';
import { PageHeader, Grid, Row } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as EmployeeActions from '../../actions/EmployeeActionCreator';

class Employees extends Component {
  constructor(props) {
    super(props);
    props.actions.listEmployees();
    // this.state = {
      // pageConfig: {
      //   data: [
      //     {
      //       _id: 1,
      //       username: 'admin',
      //       email: 'admin@mixtape.com',
      //       password: 'password',
      //       admin: true,
      //       firstName: 'Admin',
      //       lastName: 'User'
      //     },
      //     {
      //       _id: 2,
      //       username: 'user',
      //       email: 'user@mixtape.com',
      //       password: 'password',
      //       admin: false,
      //       firstName: 'Normal',
      //       lastName: 'User'
      //     }
      //   ]
      // }
    // };
  }

  render() {
    return (
      <Grid>
        <Row>
          <PageHeader>Employees</PageHeader>
        </Row>
        <Row>
          <EmployeeTable employees={this.props.employees} actions={this.props.actions} />
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    employees: state.employees.employees,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(EmployeeActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Employees);
