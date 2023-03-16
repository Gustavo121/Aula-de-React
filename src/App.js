import './App.css';
import OutraLista from './components/OutraLista';

const meusItens = ['React', 'Vue', 'Angular']

function App() {  
  return (
    <div className="App">
      <h1>Renderização de Listas</h1>     
      <OutraLista itens={meusItens} />
      <OutraLista itens={[]} />
    </div>
  );
}

export default App;
