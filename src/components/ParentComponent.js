import ChildComponent from './ChildComponent';

export default function ParentComponent() {
  const greetParent = (child) => {
    alert(`Hello Parents of ${child}`);
  };
  return (
    <div>
      <ChildComponent greetHandler={greetParent} />
    </div>
  );
}
