import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import CountDown from './components/CountDown';
import Drops from './components/Drops';
import Roadmap from './components/Roadmap';

function App() {
  return (
    <div className="App min-h-screen">
      <Navbar />
      <Welcome />
      <CountDown />
      <Drops />
      <Roadmap />
    </div>
  );
}

export default App;
