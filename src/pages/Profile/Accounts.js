import React, { Component } from 'react';
import Layout from '../../components/Layouts';
import LayoutProfile from '../../components/Layouts/LayoutProfile';

class Accounts extends Component {
  render() {
    return (
      <Layout>
        <div className="container-fluid">
          <LayoutProfile>Accounts</LayoutProfile>
        </div>
      </Layout>
    );
  }
}
export default Accounts;
