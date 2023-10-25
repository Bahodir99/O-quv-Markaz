import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Poster from './components/Poster/Poster';
import Project from './components/Project/Project';



function App() {

  return (
    <div className="App">
      <Header/>

      <Hero/>

      <Project />

      <Poster />
    </div>
  );
}

export default App;
