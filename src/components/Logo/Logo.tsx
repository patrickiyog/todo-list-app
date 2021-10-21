import React from 'react';
import './Logo.css';
import { BsFillPencilFill } from "react-icons/bs";

const Logo = () => {

    return (
        <div className="logo">
            <div className="app-logo">
                <BsFillPencilFill className="app-logo-icon" />
                <div className="app-logo-name">Promenade</div>
            </div>
        </div>
    );

}

export default Logo;