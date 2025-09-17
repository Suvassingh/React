import "./App.css";
import Card from "./components/card";

function App() {
  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        Vite with tailwind
      </h1>
      <Card username= "suvas" />
      <Card/>
      <Card/>
      <Card/>
    </>
  );
}

export default App;
