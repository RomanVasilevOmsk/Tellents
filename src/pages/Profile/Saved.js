import React, { Component } from 'react';
import Layout from '../../components/Layouts';
import LayoutProfile from '../../components/Layouts/LayoutProfile';

class Saved extends Component {
  render() {
    return (
      <Layout>
        <div className="container-fluid">
          <LayoutProfile>Saved</LayoutProfile>
        </div>
      </Layout>
    );
  }
}
export default Saved;
