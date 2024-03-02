import './App.css';
import Home from './components/Home';
import Address from './components/Address'
import {Routes , Route} from 'react-router-dom'


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
      </Routes>
    </>
  );
}

export default App;
