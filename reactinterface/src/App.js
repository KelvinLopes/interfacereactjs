import { BiArchive } from "react-icons/bi";
import Search from "./components/Search";


function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl">
        <BiArchive className="inline-block text-red-800" /> Your Appointments</h1>
    </div>
  );
}

export default App;