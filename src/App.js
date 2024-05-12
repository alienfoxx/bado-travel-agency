
import './App.css';
import Booking from './compoenent/Booking/Booking';
import Categories from './compoenent/Categories/Categories';
import Destination from './compoenent/Destination/Destination';
import Hero from './compoenent/Hero/Hero';
import Navbar from './compoenent/Navbar/Navbar';
import Testemonials from './compoenent/Testemonials/Testemonials';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Categories/>
      <Destination/>
      <Booking/>
      <Testemonials/>
    </div>
  );
}

export default App;
