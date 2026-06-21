function App() {  // cria um componente react chamado App (função que retorna html).
  return (
    <div className="container"> {/* área que ocupará a tela inteira */}
      <div className="card"> {/* "caixa" do login */}
        <h1>Login</h1> {/* o react renderiza na tela. */}

        <input
          type="email"
          placeholder="Digite seu email"
        />

        <input
        type="password"
        placeholder="Digite sua senha"
        />

        <button>
          Entrar
        </button>
      </div>

    </div>
  )
}

export default App // permite que o componente criado seja usado em outras partes do projeto.

