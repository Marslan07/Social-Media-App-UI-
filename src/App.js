import "./App.css"
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
        <div className="blur" style={{top:'-18%', right:'0'}}></div>
        <div className="blur" style={{top:'36%', left:'-8rem '}}></div>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

