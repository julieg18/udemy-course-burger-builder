import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../../store/actions/index';

class Logout extends React.Component {
  componentDidMount() {
    this.props.onLogout();
  }

  render() {
    return <Redirect to="/" />;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onLogout: () => dispatch(logout()),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(Logout);
