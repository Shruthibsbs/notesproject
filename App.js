import logo from './logo.svg';
import './App.css';
import Notes from './components/Notes';
import Backgrd from './components/Backgrd';
import Cards from './components/Cards';

import Dropdowns from './components/Dropdown';
import Forms from './components/Form';
import Footer from './components/Footer';
import SubjectEntry from './components/SubjectEntry';

function App() {
  return (
    <div className="App">
      {/* <Notes/>
      <Backgrd/>
      <Cards/>
      <div className='form_conts'>
        <div className='form_cont dropdowns'>
        <Dropdowns/>
        </div>
        <div className='form_cont'>
        <Forms/>
        </div>
      
          
        
      </div>
      <Footer/> */}
      <SubjectEntry/>
    </div>
  );
}

export default App;
