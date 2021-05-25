import "./App.css";
import AboutMe from "./components/AboutMe";
import Blog from "./components/Blog";
import Home from "./components/Home";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from "react-router-dom";
import React, { useState } from "react";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(true);

	const login = () => {
		setIsLoggedIn(true);
	};
	return (
		<div className="App">
			<Router>
				<div>
					<nav>
						<Link to="/">Home</Link>
						{isLoggedIn && <Link to="/aboutme">About Me</Link>}
						<Link to="/blog">Blog</Link>
					</nav>
				</div>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/aboutme">
						<AboutMe />
					</Route>
					<Route path="/blog">
						<Blog />
					</Route>
					<Route path="*">
						{/* do an error page specifically */}
						<Redirect to="/" />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
