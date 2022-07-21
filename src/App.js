import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import {BrowserRouter as Router ,Routes ,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
     <Router>
     <Navbar/>
      <Routes>
        <Route exact path="/navbar"   element={<Navbar/>}/>
        <Route exact path="/"  element={<Form/>} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
