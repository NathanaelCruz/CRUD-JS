import "./Nav.css"
import React from "react"
import NavItem from './NavItem'

const nav = props => 
    <aside className="menu-area">
        <nav className="menu">
            {/* Refatorar e transformar em componente */}
            <NavItem icon="home" titleItem="Ínicio" link="/" />
            <NavItem icon="users" titleItem="Usuários" link="/users"  />
        </nav>
    </aside>

export default nav