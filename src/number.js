export default function Button(props) {
	return ( 
		<button id={props.id} type="button" className={props.className} onClick={props.func}>{props.text}</button>
	);
}
