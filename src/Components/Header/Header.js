import React from 'react';
import logo from "../../images/logo.png";

const Header = () => {
    return (
        <div className="m-3 p-3" style={{borderBottom: "3px solid lightgrey"}}>
            <h1><img src={logo} alt=""/></h1>
        </div>
    );
};

export default Header;