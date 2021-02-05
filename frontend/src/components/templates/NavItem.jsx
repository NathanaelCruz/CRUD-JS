import React from 'react'
import { Link } from 'react-router-dom'


const NavItem = props => 

    <Link to={props.link}>
        <i className={`fa fa-${props.icon}`}></i> {props.titleItem}
    </Link>

export default NavItem