import './App.css';
import Doctors from './Components/Doctors/Doctors';
import Header from './Components/Header/Header';
import SecondHeader from './Components/SecondHeader/SecondHeader';

function App() {
  return (
    <div>
      {/* header section  */}
      <Header></Header>
      {/* second header  */}
      <SecondHeader></SecondHeader>
      {/* doctors section  */}
      <Doctors></Doctors>
    </div>
  );
}

export default App;
