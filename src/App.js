import './App.css';
import { Routes, Route } from "react-router-dom"
import List from './list';
import Addform from './addform'
import Update from './update'
import Login from './login';
import Newpassword from './newPassword';
import Workspace from './workspace';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<List />} />
        <Route path='/addform' element={<Addform />} />
        <Route path='/update' element={<Update />} />
        <Route path='/login' element={<Login />} />
        <Route path='/newpassword' element={<Newpassword />} />
        <Route path='/workspace' element={<Workspace />} />
      </Routes>

    </div>
  );
}

export default App;
