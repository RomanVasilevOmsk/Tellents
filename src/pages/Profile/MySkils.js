import React, { Component } from 'react';
import { MainLayout, LayoutProfile } from '../../components/Layouts';

class MySkils extends Component {
  render() {
    return (
      <MainLayout>
        <div className="container-fluid">
          <LayoutProfile>My Skils</LayoutProfile>
        </div>
      </MainLayout>
    );
  }
}
export default MySkils;
