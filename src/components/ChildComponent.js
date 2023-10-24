export default function ChildComponent(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.greetHandler('Mai');
        }}
      >
        Greet Parent
      </button>
    </div>
  );
}
