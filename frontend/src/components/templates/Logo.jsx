import "./Logo.css"
import React from "react"
import { Link } from "react-router-dom"

const logo =  props => 
    <aside className="logo">
        <Link to="#/" className="logo">
            <p className="logo-image">{`< / > DEV`}</p>
        </Link>
    </aside>

export default logo