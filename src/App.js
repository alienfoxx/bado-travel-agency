
import './App.css';
import Booking from './compoenent/Booking/Booking';
import Categories from './compoenent/Categories/Categories';
import Destination from './compoenent/Destination/Destination';
import Hero from './compoenent/Hero/Hero';
import Navbar from './compoenent/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Categories/>
      <Destination/>
      <Booking/>
    </div>
  );
}

export default App;
