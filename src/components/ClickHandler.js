export default function ClickHandler() {
  let counter = 0;
  const clickHandler = (event, no = 1) => {
    counter++;
    console.log('button clicked', no, counter, event);
  };
  return (
    <div>
      <button onClick={clickHandler}>Click 1</button>
      <button onClick={(event) => clickHandler(event, 5)}>Click 5</button>
    </div>
  );
}
