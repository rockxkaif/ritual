import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import Card from './Components/Card';
import Card2 from './Components/Card2';
import Featured from './Components/Featured';
import Featured2 from './Components/Featured2';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div >
      
      <Navbar/>
      <Carousel/>
      <Card/>
      <Card2/>
      <Featured/>
      <Featured2/>
      <Footer/>
    </div>
  );
}

export default App;
