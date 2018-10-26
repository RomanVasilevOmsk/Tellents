import React, { Component } from 'react';
import Layout from '../../components/Layouts';
import LayoutProfile from '../../components/Layouts/LayoutProfile';

class Profile extends Component {
  render() {
    return (
      <Layout>
        <div className="container-fluid">
          <LayoutProfile>Profile</LayoutProfile>
        </div>
      </Layout>
    );
  }
}
export default Profile;
