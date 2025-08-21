import '../src/Css/Reset.css'
import Header from './components/Header';
import MainHome from './components/MainHome'
import Loja from './components/Loja';

import separador from '../src/imgs/separador-esquerda.svg'

function App() {
  return (
    <div className="App">
                    <div id="home"></div>
      <Header />
              <div id="loja"></div>
    <MainHome />


    <img src={separador} alt="" className='imgAppFixo' />
    <Loja />
    </div>
  );
}

export default App;
