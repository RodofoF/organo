import Banner from './components/Banner';
import InputLabel from './components/InputLabel';

function App() {
  return (
    <div className="App">
      <Banner/>
      <InputLabel label="Nome:" placeholder={"Digite o seu nome"}/>
      <InputLabel label="Cargo:" placeholder={"Digite o seu cargo"}/>
      <InputLabel label="Imagem:" placeholder={"Informe o endereço da imagem"}/>
    </div>
  );
}

export default App;
