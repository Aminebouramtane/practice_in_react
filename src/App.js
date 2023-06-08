import Welcome from './components/components_state_props_handling_events/Welcome';
import WelcomeCC from './components/components_state_props_handling_events/WelcomeCC';
import Event from './components/components_state_props_handling_events/Event';
import Event2 from './components/components_state_props_handling_events/Event2';
import Conddition from './components/conditional_rendering_lists_and_keys/Conddition';
import Lists from './components/conditional_rendering_lists_and_keys/Lists';
import ListProducts from './components/conditional_rendering_lists_and_keys/ListProducts';

function App() {
  return (
    <div >
      {/* 
      <Welcome name='Amine BOURAMTANE' age='21' dev='Full Stack Web Developper'/>
        <hr/>
      <WelcomeCC name='Amine BOURAMTANE'/>
      <hr/>
      <Event/>
      <hr/>
      <Event2/> */}
{/* ========================================================================================= */}
      {/* <Conddition />
      <hr/>
      <Lists/> */}
      <ListProducts/>

    </div>
  );
}

export default App;
