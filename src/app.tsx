interface MeuBotaoProps {
  texto: string
}

function MeuBotao(props: MeuBotaoProps) {
  return <button className="bg-orange-400">{props.texto}</button>
}

export function App() {
  return (
    <div>
      <MeuBotao texto="Clique aqui"/>
      <MeuBotao texto="Botão 2"/>
      <MeuBotao texto="Botão 3"/>
      <MeuBotao texto="OI"/>
    </div>
  )
}