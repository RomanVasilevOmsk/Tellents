import React from 'react';
import { MainLayout } from '../components/Layouts';

const NoMatch = () => (
  <div className="wrapper err-404-page">
    <MainLayout>
      <div className="err-404-wrapper">
        <div className="err-404-title bg-cover">
          <h2>404</h2>
        </div>
        <div className="err-404-content">
          <h2 className="blue-color">{`This page doesn't exist.`}</h2>
          <p>
            Please return to the
            <a href="#" className="blue-color">
              previous page
            </a>
          </p>
          <p className="or-text">- or -</p>
          <a href="home-page.html" className="btn btn-blue btn-with-icon">
            <span className="flexbox">
              <span className="icon icon-reply" />
              <span>HOME PAGE</span>
            </span>
          </a>
        </div>
      </div>
    </MainLayout>
  </div>
);

export default NoMatch;
