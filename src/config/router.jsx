
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "../containers/Home";
import About from "../containers/About";
class AppRouter extends React.Component {
    render() {
        return (
            <div>
                {
                    /* <Router>
                        <Route exact path='/' component={Home} />
                        <Route path='/about' component={About} />
                    </Router> */


                    //     In the latest version of React_Router,
                    // 'Switch' is replaced with 'Routes' and
                    // 'component' is replaced with 'element'
                    //Also changes in "import"
                }

                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </BrowserRouter>

            </div>

        )
    }
}

export default AppRouter;
