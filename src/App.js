import './App.css';
import Home from './components/Home';
import Address from './components/Address'
import {Routes , Route} from 'react-router-dom'
import Verify from './components/Verify';
import Thanks from './components/Thanks';


function App() {
  return (
    // <div className="App">
    //   <Home />
    // </div>
    <>
      <Routes>
        <Route path='/' element = {<Home />}>
        </Route>
        <Route path='address' element = {<Address />}>
        </Route>
        <Route path='verify' element = {<Verify />}>
        </Route>
        <Route path='thanks' element = {<Thanks />}>
        </Route>
        
      </Routes>
    </>
  );
}

export default App;
