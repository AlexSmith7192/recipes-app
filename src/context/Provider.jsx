import React from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import Header from '../components/Header';

export default function Provider({ children }) {
  const myContext = {};
  return (
    <Context.Provider value={ myContext }>
      { children }
      <Header />
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};