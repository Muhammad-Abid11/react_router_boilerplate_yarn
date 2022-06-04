import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../containers/Home";
import About from "../containers/About";
class About extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Route path="/" component={Home} />
                </Router>

            </div>
        )
    }
}

export default About;
