import React from 'react';
//import { capitalizeFirstLetter } from '../../utils/helpers';
import { NavLink } from "react-router-dom";

function Nav() {
    const onClick = (event) => {
        event.preventDefault();
    }
    return 
    <header>
        <div className="container">
        <ul className="row justify-content-center text-center">
          <h1 className="col-sm-12 col-md-4 col-lg-2 align-text-middle">
            {" "}
            Telemetry Guide{" "}
          </h1>
          </ul>
    

        
    
    <ul>
    <li className="col-sm-12 col-md-4 col-lg-2">
            <NavLink to="/Home">Home</NavLink>
    </li>
    <li className="col-sm=12 col-md-4 col-lg-2">
        <NavLink to= "Anatomy">Anatomy of the Heart</NavLink>
    </li>
    <li className="col-sm=12 col-md-4 col-lg-2">
        <NavLink to= "Basics">Telemetry Basics</NavLink>
    </li>
    <li className="col-sm=12 col-md-4 col-lg-2">
        <NavLink to= "measuring">Measuring Telemetry</NavLink>
    </li>
    <li className="col-sm=12 col-md-4 col-lg-2">
        <NavLink to= "Rhythms">Rhythms</NavLink>
    </li>
    <li className="col-sm=12 col-md-4 col-lg-2">
        <NavLink to= "Phillips">Phillips</NavLink>
    </li>
    </ul>
    </div>
    </header>

}
export default Nav;