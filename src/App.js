import './App.css';
import { useState } from 'react';
import { evaluate } from 'mathjs'

import Button from './number.js'

function App() {
	//=== State ===
	const [output, setOutput] = useState(0);
	const [string, setString] = useState("");
	const [decimal, setDecimal] = useState(true);
		
	//=== Functions ===
	// 1. numbers
	const numberButtons = [];
	
	for( let i = 0; i <= 9; i += 1 ) {
		const func = () => { 
			if( string === "" ) {
				setString( i.toString() );
			} else {
				setString(string + i);
			}
		};
		numberButtons.push( <Button key={i} text={i} func={func} className="btn-secondary" /> );
	}
	
	// 2A. operations
	const operationButtons = [];
	const operations = "+-/*";
	
	const checkOperation = () => {
		return operations.includes( string.at(-1) );
	}
	
	for( const char of operations ) {
		const func = () => {
			if( !checkOperation() ) { 
				setString(string + char);
				setDecimal(true);
			}
		}
		operationButtons.push( <Button key={char} text={char} func={func} className="btn-primary" /> );
	}
	
	// 2B. period
	const funcPeriod = () => {		
		if( string === "" ) {
			setString("0.");
		} else if( decimal ) { 					
			setDecimal(false);
			setString(string + '.');
		}
	}
	
	// 3. evaluation
	const funcEqual = () => {
		if( !checkOperation() ) { 
			let num = evaluate(string);
			setOutput( num );
			setString( num.toString() );		
			setDecimal( ( Number.isInteger(num) )  );	// Prevent double period
		}
	};
	
	const funcClear = () => {
		setString("");
		setOutput(0);
	};
	
	//=== JSX ===
	return (
		<div>
			{/* Buttons */}
			{numberButtons} 	
			{operationButtons}
			
			{/* Special operations */}
			<Button key="=" text={'='} func={funcEqual} className="btn-warning" />
			<Button key="ac" text={'AC'} func={funcClear} className="btn-warning" />
			<Button key="period" text={'.'} func={funcPeriod} className="btn-warning" />
			
			{/* Output */}
			<br />
			<span>{string}</span>
			<br />
			<span>{output}</span>
		</div>
	);
}

export default App;
