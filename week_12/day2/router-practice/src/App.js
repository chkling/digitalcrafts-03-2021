import "./App.css";
import Summer from "./components/Summer";
import Spring from "./components/Spring";
import Fall from "./components/Fall";
import Winter from "./components/Winter";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
} from "react-router-dom";

function App() {
	return (
		<div className="App">
			<h1>Seasons</h1>
			<Router>
				<div>
					<nav>
						<Link to="/Summer">Summer</Link>
						<Link to="/Fall">Fall</Link>
						<Link to="/Winter">Winter</Link>
						<Link to="/Spring">Spring</Link>
					</nav>
				</div>
				<Route path="/Summer">
					<Summer />
				</Route>
				<Route path="/Fall">
					<Fall />
				</Route>
				<Route path="/Winter">
					<Winter />
				</Route>
				<Route path="/Spring">
					<Spring />
				</Route>
			</Router>
		</div>
	);
}

export default App;
