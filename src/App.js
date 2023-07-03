import './App.css';
import CurvedPokotajTitle from './components/curvedPokotajTitle/curvedPokotajTitle';
import momo from './catPhotos/momo.png';
import henry2 from './catPhotos/henry2.png';
import inka from './catPhotos/inka.png';
import pikotka from './catPhotos/pikotka.png';
import ciastek from './catPhotos/ciastek.png';
import gofer from './catPhotos/gofer.png';
import trinity from './catPhotos/trinity.png';  
import valka from './catPhotos/valka.png';
import arwena from './catPhotos/arwena.png';
import yoda from './catPhotos/yoda.png';
import miso from './catPhotos/miso.png';
import leo from './catPhotos/leo.png';
import yennefer from './catPhotos/yennefer.png';
import bibul from './catPhotos/bibul.png';
import teddy from './catPhotos/teddy.png';
import links from './links';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src='./pokotajLogo.png'/>
        <div className="Title"><CurvedPokotajTitle/></div>
      </header>
      <body>
        <h1 className='Welcome'>Witamy na stronie stowarzyszenia pomocy kotom Pokotaj</h1>
        <h1 className='Mission'>Naszą misją jest kompleksowa pomoc bezdomnym kotom na terenie Poznania i okolic</h1>
        <h1 className='OurCats'> Poznajcie nasze koty </h1>
        <div className='AdoptionCatGallery'>
        <h2 className='ForAdoption'> Czekają na adopcję</h2>
          <div className='MomoContainer'>
            <p className='MomoName'>Momo</p>
            <p className='ClickMomo'>kliknij na mnie!</p>
            <a href={links.momo_link} target="_blank" rel="noreferrer"><img src={momo} className="Momo" alt="logo" /></a>
          </div>
          <div className='HenryContainer'>
            <p className='HenryName'>Henry</p>
            <p className='ClickHenry'>kliknij na mnie!</p>
            <a href={links.henry_link} target="_blank" rel="noreferrer"><img src={henry2} className="Henry"/></a>
          </div>
          <div className='InkaContainer'>
            <p className='InkaName'>Inka</p>
            <p className='ClickInka'>kliknij na mnie!</p>
            <a href={links.inka_link} target="_blank" rel="noreferrer"><img src={inka} className="Inka"/></a>
          </div>
          <div className='PikotkaContainer'>
            <p className='PikotkaName'>Pikotka</p>
            <p className='ClickPikotka'>kliknij na mnie!</p>
            <a href={links.pikotka_link} target="_blank" rel="noreferrer"><img src={pikotka} className="Pikotka"/></a>
          </div>
        </div>
        <div className='TreatedCatGallery'>
        <h2>W trakcie leczenia</h2>
        <div className='CiastekContainer'>
            <p className='CiastekName'>Ciastek</p>
            <a><img src={ciastek} className="Ciastek"/></a>
          </div>
          <div className='GoferContainer'>
            <p className='GoferName'>Gofer</p>
            <a><img src={gofer} className="Gofer"/></a>
          </div>
          <div className='TrinityContainer'>
            <p className='TrinityName'>Trinity</p>
            <a><img src={trinity} className="Trinity"/></a>
          </div>
          <div className='ValkaContainer'>
            <p className='ValkaName'>Valka</p>
            <a><img src={valka} className="Valka"/></a>
          </div>
          <div className='ArwenaContainer'>
            <p className='ArwenaName'>Arwena</p>
            <a><img src={arwena} className="Arwena"/></a>
          </div>
          <div className='YodaContainer'>
            <p className='YodaName'>Yoda</p>
            <a><img src={yoda} className="Yoda"/></a>
          </div>
          <div className='MisoContainer'>
            <p className='MisoName'>Miso</p>
            <a><img src={miso} className="Miso"/></a>
          </div>
          <div className='LeoContainer'>
            <p className='LeoName'>Leo</p>
            <a><img src={leo} className="Leo"/></a>
          </div>
          <div className='YenneferContainer'>
            <p className='YenneferName'>Yennefer</p>
            <a><img src={yennefer} className="Yennefer"/></a>
          </div>
          <div className='BibulContainer'>
            <p className='BibulName'>Bibul</p>
            <a><img src={bibul} className="Bibul"/></a>
          </div>
          <div className='TeddyContainer'>
            <p className='TeddyName'>Teddy</p>
            <a><img src={teddy} className="Teddy"/></a>
          </div>
        </div>
        <div className='Try'>
          <div className='Within'></div>
          <div className='Within2'></div>
        </div>
        <h1 className='Questionaries'>Zainteresowani?
        <a href={links.adoption_questionare} target="_blank" rel="noreferrer" className='QuestionaryAdoption'> Ankieta na ADOPCJĘ</a>
        <a href={links.temp_home_quiestionare} target="_blank" rel="noreferrer" className='QuestionaryTempHome'> A może dasz kotu dom tymczasowy? </a>
        </h1>

      </body>
      
    </div>
  );
}

export default App;

//border:5px solid black;
