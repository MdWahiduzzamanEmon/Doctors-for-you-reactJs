import './App.css';
import DoctorBody from './Components/Doctor-body/DoctorBody';
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
      <DoctorBody></DoctorBody>
    </div>
  );
}

export default App;
