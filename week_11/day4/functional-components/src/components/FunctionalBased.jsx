import React, { useState } from "react";

export default function FunctionalBased() {
	const [loadingMessage, setLoadingMessage] = useState("loading");
	const [status, setStatus] = useState("Code Red");
	// const [object, setObject] = useState({});
	return (
		<div>
			<h1>Functional Component</h1>
			<p>{loadingMessage}</p>
			<p>{status}</p>
			<button onClick={() => setLoadingMessage("finished")}>
				Finish Loading
			</button>
			<button onClick={() => setStatus("Code Green")}>Finish Loading</button>
		</div>
	);
}
