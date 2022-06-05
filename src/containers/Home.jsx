import React from "react";
import { Link } from 'react-router-dom'
class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello Router</h1>
                <h1>Home Page</h1>
                <Link to="/about">To About</Link>
            </div>
        )
    }
}

export default Home;
