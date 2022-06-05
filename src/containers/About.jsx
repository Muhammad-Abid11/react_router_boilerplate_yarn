import React from "react";
import { Link } from 'react-router-dom'
import Home from './Home'

class About extends React.Component {
    render() {
        return (
            <div>
                <h1>Routers</h1>
                <h1>About Page</h1>
                <Link to="/">To Home</Link>
            </div>
        )
    }
}

export default About;
