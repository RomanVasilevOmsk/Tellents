import React, { Component } from 'react';
import Layout from '../../components/Layouts';
import LayoutProfile from '../../components/Layouts/LayoutProfile';

class MySkils extends Component {
  render() {
    return (
      <Layout>
        <div className="container-fluid">
          <LayoutProfile>My Skils</LayoutProfile>
        </div>
      </Layout>
    );
  }
}
export default MySkils;
