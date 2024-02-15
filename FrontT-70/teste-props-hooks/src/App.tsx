import Contador from "./paginas/contador/Contador";
import Home from "./paginas/home/Home";
import Tarefa from "./paginas/tarefa/tarefa";

function App() {
  return (
    <>
      <Home
        titulo="Titulo derivado de props"
        texto="estamos trabalhando com props - componente chamado com sucesso"
      />

      <Contador />
      <Tarefa />
    </>
  );
}

export default App;
