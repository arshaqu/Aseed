import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { Button } from 'flowbite-react';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
          <Helmet>
  <meta charSet="utf-8" />
  <title>ASEED</title>
  <meta
    name="description"
    content="Discover MGO services in Malappuram. High-quality, trusted solutions for all your needs."
  />
  <meta
    name="keywords"
    content="MGO, Malappuram, trusted solutions, MGO services, best MGO services"
  />
  <link rel="canonical" href="https://www.aseed.online/" />
</Helmet>


      <Home/>
  
    </div>
  );
}

export default App;
