import React, { useState, useEffect } from 'react';
import api from './servicos/api'

function App() {

  const [email, setEmail] = useState('')
  const [dadosEmail, setDadosEmail] = useState([])

  async function enviarDados(e) {
    e.preventDefault()

    await api.post('/teste', { email })
    setEmail('')
  }

  useEffect(() => {
    async function exibirDados() {
      const dados = await api.get('/teste')
      setDadosEmail(dados.data)
    }
    exibirDados()
  }, [dadosEmail])

  return (
    
    <>
      <form onSubmit={enviarDados}>
        <input value={email} onChange={e => setEmail(e.target.value)} />
        <input type='submit' />
      </form>

      {dadosEmail.map((dado) => (
        <p key={dado._id}>{dado.email}</p>
      ))}

    </>
  );
}

export default App;
