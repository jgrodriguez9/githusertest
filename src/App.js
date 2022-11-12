import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Person from './pages/Person';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Container className='my-5rem'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/person/:username' element={<Person />}/>
        </Routes> 
      </Container>
                       
    </>
  );
}

export default App;
