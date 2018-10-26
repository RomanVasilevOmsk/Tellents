import React, { Component } from 'react';
import Layout from '../../components/Layouts';
import LayoutProfile from '../../components/Layouts/LayoutProfile';

class MyMedia extends Component {
  render() {
    return (
      <Layout>
        <div className="container-fluid">
          <LayoutProfile>My Media</LayoutProfile>
        </div>
      </Layout>
    );
  }
}
export default MyMedia;
