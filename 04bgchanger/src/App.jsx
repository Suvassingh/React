
import { useState } from "react";
import "./App.css";

function App() {
  
const [colour,setColour] = useState('olive')
// function changeColour(colour){
//   setColour(colour)
// }
  return (
    <div
      className=" w-full h-screen duration-200 "
      style={{ backgroundColor: colour }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColour("red")}
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-black bg-red-700"
          >
            Red
          </button>
          <button
            onClick={() => setColour("green")}
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-black bg-green-700"
          >
            Green
          </button>{" "}
          <button
            onClick={() => setColour("blue")}
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-black bg-blue-700 "
          >
            Blue
          </button>{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
