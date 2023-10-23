import ChildComponent from './ChildComponent';

export default function ParentComponent() {
  const greetParent = () => {
    alert('Hello Parents');
  };
  return (
    <div>
      <ChildComponent greetHandler={greetParent} />
    </div>
  );
}
