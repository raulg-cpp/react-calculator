import './App.css';

//import { useState } from 'react';

function App() {
	//=== State ===
	//const [output, setOutput] = useState(0);
	//const [input, setInput] = useState(0);
	
	
	//=== Functions ===
	
	
	//=== JSX ===
	return (
	<div className="App d-flex justify-content-center align-items-center">
		<div className="container mainBox border border-2 border-secondary">
			{/* Display */}
			<div className="row mt-2 text-end">
				<span id="textOperation" className="text-warning fs-6">text</span>
				<span id="textOutput" className="text-light fs-5">text</span>
			</div>
		
			{/* Buttons */}
			<div className="row">
				{/* left column */}
				<div className="col">
					{/* top operators */}
					<div className="row mt-1">
						<button type="button" className="ms-1 col btn btn-danger button">AC</button>
					</div>
				
					{/* Numbers */}
					<div className="row mt-1">
						<button id="num7" type="button" className="mx-1 col btn btn-secondary button">7</button>
						<button id="num8" type="button" className="col btn btn-secondary button">8</button>
					</div>
					<div className="row mt-1">
						<button id="num4" type="button" className="mx-1 col btn btn-secondary button">4</button>
						<button id="num5" type="button" className="col btn btn-secondary button">5</button>
					</div>
					<div className="row mt-1">
						<button id="num3" type="button" className="mx-1 col btn btn-secondary button">3</button>
						<button id="num2" type="button" className="col btn btn-secondary button">2</button>
					</div>
					
					{/* Bottom operators */}
					<div className="row my-1">
						<button id="num0" type="button" className="ms-1 col btn btn-secondary button">0</button>
					</div>
				</div>
				
				{/* middle column */}
				<div className="col-3 ms-1">
		    		<div className="row">
    					<button id="divide" type="button" className="mt-1 btn btn-info button">/</button>
    					<button id="num9" type="button" className="my-1 btn btn-secondary button">9</button>
    					<button id="num6" type="button" className="mb-1 btn btn-secondary button">6</button>
    					<button id="num1" type="button" className="mb-1 btn btn-secondary button">1</button>
    					<button id="decimal "type="button" className="btn btn-secondary button">.</button>
					</div>
				</div>
				
				
				{/* right column */}
				<div className="col-3 mx-1">
		    		<div className="row">
    					<button id="multiply" type="button" className="mt-1 btn btn-info button">x</button>
    					<button id="minus" type="button" className="my-1 btn btn-info button">-</button>
    					<button id="plus" type="button" className="mb-1 btn btn-info button">+</button>
    					<button id="equal" type="button" className="btn btn-info button buttonEqual">=</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	);
}

export default App;
