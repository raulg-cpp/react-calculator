export default function Button(props) {
	return ( 
		<button type="button" className={"btn " + props.className } onClick={props.func}>{props.text}</button>
	);
}
