import './App.css';

function App() {
  return (
	<div className="App d-flex justify-content-center align-items-center">
		<div className="container mainBox border border-2 border-secondary">
			{/* Display */}
			<div className="row mt-2 text-end">
				<span className="text-warning fs-6">text</span>
				<span className="text-light fs-5">text</span>
			</div>
		
			{/* Buttons */}
			<div className="row">
				{/* left column */}
				<div className="col">
					{/* top operators */}
					<div className="row mt-1">
						<button type="button" class="ms-1 col btn btn-danger button">AC</button>
					</div>
				
					{/* Numbers */}
					<div className="row mt-1">
						<button type="button" class="mx-1 col btn btn-secondary button">7</button>
						<button type="button" class="col btn btn-secondary button">8</button>
					</div>
					<div className="row mt-1">
						<button type="button" class="mx-1 col btn btn-secondary button">4</button>
						<button type="button" class="col btn btn-secondary button">5</button>
					</div>
					<div className="row mt-1">
						<button type="button" class="mx-1 col btn btn-secondary button">3</button>
						<button type="button" class="col btn btn-secondary button">2</button>
					</div>
					
					{/* Bottom operators */}
					<div className="row my-1">
						<button type="button" class="ms-1 col btn btn-secondary button">0</button>
					</div>
				</div>
				
				{/* middle column */}
				<div className="col-3 ms-1">
		    		<div className="row">
    					<button type="button" class="mt-1 btn btn-info button">/</button>
    					<button type="button" class="my-1 btn btn-secondary button">9</button>
    					<button type="button" class="mb-1 btn btn-secondary button">6</button>
    					<button type="button" class="mb-1 btn btn-secondary button">1</button>
    					<button type="button" class="btn btn-secondary button">.</button>
					</div>
				</div>
				
				
				{/* right column */}
				<div className="col-3 mx-1">
		    		<div className="row">
    					<button type="button" class="mt-1 btn btn-info button">x</button>
    					<button type="button" class="my-1 btn btn-info button">-</button>
    					<button type="button" class="mb-1 btn btn-info button">+</button>
    					<button type="button" class="btn btn-info button buttonEqual">=</button>
					</div>
				</div>
			</div>
		</div>
	</div>
  );
}

export default App;
