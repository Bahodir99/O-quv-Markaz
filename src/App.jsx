import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Poster from './components/Poster/Poster';
import Project from './components/Project/Project';
import Project__con from './components/Project__con/Project__con';



function App() {

  return (
    <div className="App">

      <Header/>

      <Hero/>

      <Project />

      <Poster />

      <Project__con/>

    </div>
  );
}

export default App;
