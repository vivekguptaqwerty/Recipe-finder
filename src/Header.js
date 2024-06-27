import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const Header = ({ title, bgClass, children }) => {
  return (
    <div className={`header ${bgClass}`}>
      <div className="overlay">
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  bgClass: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default Header;
