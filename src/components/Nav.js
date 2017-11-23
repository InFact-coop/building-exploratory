import React from 'react';

const Nav = () => {
  return (
    <nav className="float w-100 flex justify-between items-center bb b--purple bw1">
      <div className="flex items-center">
      <div className="h3 w3 bg-purple">
        Logo
      </div>
      <h1 className="f2 ma0 pl3 purple fw8"> Islington Local List </h1>
      </div>

      <h3 className="f4 ma0 pr3 purple"> About </h3>
    </nav>
  );
}

export default Nav;
