import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';

const Navbar = () => {
  console.log('Navbar rendered'); // Add this line to check rendering
  return (
    <Menu borderless fixed='top'>
            <Menu.Item>
                <img src={ logo } alt="logo" style={{ width: 75 }} />
            </Menu.Item>
      <Menu.Item name="Home" as={Link} to="/" />
      <Menu.Item name="Recipes" as={Link} to="/recipes" />
    </Menu>
  );
}

export default Navbar;
