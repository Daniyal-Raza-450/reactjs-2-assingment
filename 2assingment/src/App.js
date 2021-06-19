import './App.css';
import Home from './header/Home';
import { Scoundnav } from "./header/scoundnav/Scoundnav";
import Contanirecont from './compnents/contanirecont'
import Footer from './footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';







function App() {
  return (
    <div className="App">
      <Home />
      <Scoundnav />
      <Contanirecont />
<Footer/>
      



    </div>
  );
}

export default App;
