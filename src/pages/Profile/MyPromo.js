import React, { Component } from 'react';
import Layout from '../../components/Layouts';
import LayoutProfile from '../../components/Layouts/LayoutProfile';

class MyPromo extends Component {
  render() {
    return (
      <Layout>
        <div className="container-fluid">
          <LayoutProfile>My Promo</LayoutProfile>
        </div>
      </Layout>
    );
  }
}
export default MyPromo;
