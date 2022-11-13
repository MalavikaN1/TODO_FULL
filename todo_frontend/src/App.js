import InputComp from "./components/input/InputComp";
import Login from "./components/login/login";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { ProtectedRoute } from "./components/protectedRoute/protectedRoute";
import Notfound from "./components/notfound/notfound";


function App() {
if(!localStorage.getItem("isAuthenticated"))
  window.localStorage.setItem('isAuthenticated',false);

  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
          <Route path="/user" element={<ProtectedRoute><InputComp/></ProtectedRoute>}/>
          <Route path="/*" element={<Notfound/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
