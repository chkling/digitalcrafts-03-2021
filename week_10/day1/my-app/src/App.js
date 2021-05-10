import "./App.css";
import AboutContainer from "./components/AboutContainer";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";

function App() {
	return (
		<div className="App">
			<Nav />
			<Sidebar />
			<AboutContainer />
		</div>
	);
}

export default App;
// react manages data with state

// STATE - is where you can store data temporarily
