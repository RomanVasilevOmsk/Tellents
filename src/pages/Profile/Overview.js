import React, { Component } from 'react';
import Layout from '../../components/Layouts';
import LayoutProfile from '../../components/Layouts/LayoutProfile';

class Overview extends Component {
  render() {
    return (
      <Layout>
        <div className="container-fluid">
          <LayoutProfile>Overview</LayoutProfile>
        </div>
      </Layout>
    );
  }
}
export default Overview;
