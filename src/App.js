import './App.css';
import { useState } from 'react';
import { evaluate } from 'mathjs'

import Button from './number.js'

function App() {
	//=== State ===
	const [output, setOutput] = useState(0);
	const [string, setString] = useState("");
		
	//=== Functions ===
	// 1. numbers	
	function numberButton(num, style="") {
		const func = () => { 
			if( string === "" ) {
				setString( num.toString() );
			} else {
				setString(string + num);
			}
		};
		return ( <Button key={num} text={num} func={func} className={style} /> );
	}
	
	// 2. operations
	function operationButton(char, style="") {
		const func = () => {
			setString(string + char);
		}
		return ( <Button key={char} text={char} func={func} className={style} /> );
	}
		
	// 3. evaluation
	const funcEqual = () => {
		if( string !== "" ) {
			try { 
				let num = evaluate(string);
				setOutput( num );
				setString( num.toString() );		
			} catch(error) {
				setOutput("SYNTAX ERROR");
			}
		}
	};
	
	const funcClear = () => {
		setString("");
		setOutput(0);
	};
	
	const funcDel = () => {
		setString( string.slice(0,-1) );	
	};
	
	//=== JSX ===
	return (
	<div className="App d-flex justify-content-center align-items-center">
		<div className="container mainBox border border-2 border-secondary">
			{/* Display */}
			<div className="mt-2 text-end">
				<span className="text-warning fs-6">{string}</span>
				<br />
				<span className="text-light fs-5">{output}</span>
			</div>
		
			{/* Buttons */}
			<div className="row">
				{/* left column */}
				<div className="col">
					{/* top operators */}
					<div className="row mt-1">
						<Button key="ac" text={'AC'} func={funcClear} className="ms-1 col btn btn-danger button" />
					</div>
				
					{/* Numbers */}
					<div className="row mt-1">
						{ numberButton(7, "mx-1 col btn btn-secondary button") }
						{ numberButton(8, "col btn btn-secondary button")  }
					</div>
					<div className="row mt-1">
						{ numberButton(4, "mx-1 col btn btn-secondary button") }
						{ numberButton(5, "col btn btn-secondary button") }
					</div>
					<div className="row mt-1">
						{ numberButton(3, "mx-1 col btn btn-secondary button") }
						{ numberButton(2, "col btn btn-secondary button") }
					</div>
					
					{/* Bottom operators */}
					<div className="row my-1">
						{ numberButton(0, "ms-1 col btn btn-secondary button") }
					</div>
				</div>
				
				{/* middle column */}
				<div className="col-3 ms-1">
		    		<div className="row">
		    			{ operationButton('/', "mt-1 btn btn-info button") }
    					{ numberButton(9, "my-1 btn btn-secondary button") }
    					{ numberButton(6, "mb-1 btn btn-secondary button") }
    					{ numberButton(1, "mb-1 btn btn-secondary button") }
    					{ operationButton('.', "btn btn-secondary button") }
					</div>
				</div>
				
				
				{/* right column */}
				<div className="col-3 mx-1">
		    		<div className="row">
		    			{ operationButton('*', "mt-1 btn btn-info button") }
		    			{ operationButton('-', "my-1 btn btn-info button") }
		    			{ operationButton('+', "mb-1 btn btn-info button") }
		    			<Button key="=" text={'='} func={funcEqual} className="btn btn-primary button" />
		    			<Button key="del" text={'DEL'} func={funcDel} className="mt-1 btn btn-warning button" />
					</div>
				</div>
			</div>
		</div>
	</div>
	);
}

export default App;
