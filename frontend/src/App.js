import "./App.css";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Apartments } from "./components/Apartments";
import { Amenities } from "./components/Amenities";
import { Location } from "./components/Location";
import { Gallery } from "./components/Gallery";
import { Booking } from "./components/Booking";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Apartments />
      <Amenities />
      <Location />
      <Gallery />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
