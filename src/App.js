import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Main from './pages/Main';
import About from './pages/About';
import Work from './pages/Work';
import Skill from './pages/Skill';
import Contact from './pages/Contact';
import Cloning from './pages/Cloning';
import Team from './pages/Team';
import Copyright from './components/Copyright';

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/work' element={<Work/>}>
          <Route path='team' element={<Team/>}></Route>
          <Route path='cloning' element={<Cloning/>}></Route>
        </Route>
        <Route path='/skill' element={<Skill/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>  
      <Copyright/>
</>
  );
}

export default App;
