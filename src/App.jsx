import Botao from "./componentes/Botao"
import Caixa from "./componentes/Caixa"
import Etiqueta from "./componentes/Etiqueta"

const App = () => {

  return (
    <>
      Aula de Componentes


      <Etiqueta  texto ="Texto enviado"/>
      <Etiqueta  texto= "Outro texto"/>
      <Etiqueta   texto= "mais um texto"/>
      <Caixa />
      <Botao />
    </>
  )
}

export default App