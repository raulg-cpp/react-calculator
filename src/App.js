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
	
	// 2. operations
	const operationButtons = [];
	const operations = "+-/*.";
	
	for( const char of operations ) {
		const func = () => {
				setString(string + char);
		}
		operationButtons.push( <Button key={char} text={char} func={func} className="btn-primary" /> );
	}
		
	// 3. evaluation
	const funcEqual = () => {
		try { 
			let num = evaluate(string);
			setOutput( num );
			setString( num.toString() );		
		} catch(error) {
			setOutput("SYNTAX ERROR");
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
		<div>
			{/* Buttons */}
			{numberButtons} 	
			{operationButtons}
			
			{/* Special operations */}
			<Button key="=" text={'='} func={funcEqual} className="btn-warning" />
			<Button key="ac" text={'AC'} func={funcClear} className="btn-warning" />
			<Button key="del" text={'DEL'} func={funcDel} className="btn-danger" />
			
			{/* Output */}
			<br />
			<span>{string}</span>
			<br />
			<span>{output}</span>
		</div>
	);
}

export default App;
