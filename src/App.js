import useFetch from "./useFetch";
import "./App.css";

function App() {
  const { data, loading, refetch } = useFetch(
    "https://v2.jokeapi.dev/joke/Any"
  );

  if (loading)
    return (
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  return (
    <div className="App">
      <h1>Custom Hook</h1>
      <h1>
        {data?.setup} <br />
        {data?.delivery}
      </h1>
      <button onClick={refetch}> Refetch</button>
    </div>
  );
}

export default App;
