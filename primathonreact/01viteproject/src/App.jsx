function App(props) {
  return <h1>Hello, {props.name}!</h1>;
 }
 function Apps() {
  return (
  <div>
  <Welcome name="John" />
  <Welcome name="Jane" />
  <Welcome name="Bob" />
  </div>
  );
 }

 export default App