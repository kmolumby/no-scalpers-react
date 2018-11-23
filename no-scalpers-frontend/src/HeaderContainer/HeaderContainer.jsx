import React from 'react';

import { Link } from 'react-router-dom';


const HeaderApp = (props) => {
  return (
    <div>
      <ul>
        <li onClick={props.logOut}>Logout</li>
      </ul>
    </div>
    )
}

export default HeaderApp;