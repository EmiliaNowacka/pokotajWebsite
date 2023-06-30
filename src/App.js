import './App.css';
import CurvedPokotajTitle from './components/curvedPokotajTitle/curvedPokotajTitle';
import momo from './catPhotos/momo.png';
import henry2 from './catPhotos/henry2.png';
import inka from './catPhotos/inka.png';
import pikotka from './catPhotos/pikotka.png';
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
        <h1 className='OurCats'> Poznaj nasze koty </h1>
        <div className='CatGallery'>
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
        <div className='Try'>
          <div className='Within'></div>
          <div className='Within2'></div>
        </div>
        <h1 className='Questionaries'>Zainteresowany?
        <a href={links.adoption_questionare} target="_blank" rel="noreferrer" className='QuestionaryAdoption'> Ankieta na ADOPCJĘ</a>
        <a href={links.temp_home_quiestionare} target="_blank" rel="noreferrer" className='QuestionaryTempHome'> A może dasz kotu dom tymczasowy? </a>
        </h1>

      </body>
      
    </div>
  );
}

export default App;
