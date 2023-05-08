import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Addblog from './component/Addblog';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Addblog />
    </div>
  );
}

export default App;
