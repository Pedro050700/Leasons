import React from 'react';

import PropTypes from 'prop-types';

import Navbar from '~/components/Navbar';

import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Navbar />
      <div className="content-wrapper">
        <div className="container-fluid">
          <div className="row">{children}</div>
        </div>
      </div>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
