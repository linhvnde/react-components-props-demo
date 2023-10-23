export default function Greeting(props) {
  const message = 'Hello';
  return (
    <div>
      <u>
        {message} {props.name}
      </u>
    </div>
  );
}
