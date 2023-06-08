import './App.css';
import Welcome from './components/Welcome';
import WelcomeCC from './components/WelcomeCC';
import Event from './components/Event';
import Event2 from './components/Event2';

function App() {
  return (
    <div className="App">

      <Welcome name='Amine BOURAMTANE' age='21' dev='Full Stack Web Developper'/>
        <hr/>
      <WelcomeCC name='Amine BOURAMTANE'/>
      <hr/>
      <Event/>
      <hr/>
      <Event2/>

    </div>
  );
}

export default App;
