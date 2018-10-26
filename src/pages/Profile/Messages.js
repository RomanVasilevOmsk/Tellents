import React, { Component } from 'react';
import Layout from '../../components/Layouts';
import LayoutProfile from '../../components/Layouts/LayoutProfile';

class Messages extends Component {
  render() {
    return (
      <Layout>
        <div className="container-fluid">
          <LayoutProfile>Messages</LayoutProfile>
        </div>
      </Layout>
    );
  }
}
export default Messages;
