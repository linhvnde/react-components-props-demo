export default function Button(props) {
  return (
    <div>
      <button onClick={props.clickHandler}>{props.action} Here</button>
    </div>
  );
}
