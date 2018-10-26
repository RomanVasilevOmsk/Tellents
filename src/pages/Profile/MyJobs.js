import React, { Component } from 'react';
import Layout from '../../components/Layouts';
import LayoutProfile from '../../components/Layouts/LayoutProfile';

class MyJobs extends Component {
  render() {
    return (
      <Layout>
        <div className="container-fluid">
          <LayoutProfile>My Jobs</LayoutProfile>
        </div>
      </Layout>
    );
  }
}
export default MyJobs;
