import './App.css';

function App() {
  return (
	<div className="App">
    	{/* Inputs */}
    	<div className="row my-1">
    		<button type="button" class="col mx-1 btn btn-primary">Primary</button>
    		<button type="button" class="col mx-1 btn btn-primary">Primary</button>
    		<button type="button" class="col mx-1 btn btn-primary">Primary</button>
		</div>
		
		<div className="row">
			{/* Left side */}
			<div className="col">
				{/* Numbers */}
				<div className="row my-1">
    				<button type="button" class="col mx-1 btn btn-primary">Primary</button>
    				<button type="button" class="col mx-1 btn btn-primary">Primary</button>
    				<button type="button" class="col mx-1 btn btn-primary">Primary</button>
				</div>
				<div className="row my-1">
    				<button type="button" class="col mx-1 btn btn-primary">Primary</button>
    				<button type="button" class="col mx-1 btn btn-primary">Primary</button>
    				<button type="button" class="col mx-1 btn btn-primary">Primary</button>
				</div>
				<div className="row my-1">
    				<button type="button" class="col mx-1 btn btn-primary">Primary</button>
    				<button type="button" class="col mx-1 btn btn-primary">Primary</button>
    				<button type="button" class="col mx-1 btn btn-primary">Primary</button>
				</div>
				{/* Other */}
				<div className="row my-1">
    				<button type="button" class="col mx-1 btn btn-primary">Primary</button>
    				<button type="button" class="col mx-1 btn btn-primary">Primary</button>
				</div>
			</div>
			
			{/* right side */}
			<div className="col">
				<button type="button" className="mx-1 btn btn-primary">Primary</button>
				<button type="button" className="mx-1 btn btn-primary">Primary</button>
				<button type="button" className="mx-1 btn btn-primary">Primary</button>
			</div>
		</div>
	</div>
  );
}

export default App;
