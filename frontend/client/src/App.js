//Frontend

import React, { useEffect, useState } from 'react';

function App() {
  const [clientes, setClientes] = useState([]);
  const [novoCliente, setNovoCliente] = useState({
    nome: '',
    email: '',
    telefone: '',
    coordenadaX: 0,
    coordenadaY: 0,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/clientes')
      .then((response) => response.json())
      .then((data) => setClientes(data))
      .catch((error) => console.error('Erro ao Obter Clientes:', error));
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNovoCliente({ ...novoCliente, [name]: value });
  };

  const cadastrarCliente = () => {
    console.log('Cadastrar CLiente:', novoCliente);
    setLoading(true);

    fetch('http://localhost:3000/clientes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novoCliente),
    })
      .then((response) => response.json())
      .then((data) => {
        setClientes([...clientes, data]);
        setNovoCliente({
          nome: '',
          email: '',
          telefone: '',
          coordenadaX: 0,
          coordenadaY: 0,
        });
      })
      .catch((error) => console.error('Erro ao Cadastrar Cliente:', error))
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <h1>Clientes</h1>
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.id}>
            {cliente.nome} - {cliente.email} - {cliente.telefone} - {cliente.coordenadaX} - {cliente.coordenadaY}
          </li>
        ))}
      </ul>

      <h2>Cadastrar Novo Cliente</h2>
      <form>
        <label>Nome:</label>
        <input type="text" name="nome" value={novoCliente.nome} onChange={handleInputChange} />

        <label>Email:</label>
        <input type="text" name="email" value={novoCliente.email} onChange={handleInputChange} />

        <label>Telefone:</label>
        <input type="text" name="telefone" value={novoCliente.telefone} onChange={handleInputChange} />

        <label>Coordenada X:</label>
        <input type="number" name="coordenadaX" value={novoCliente.coordenadaX} onChange={handleInputChange} />

        <label>Coordenada Y:</label>
        <input type="number" name="coordenadaY" value={novoCliente.coordenadaY} onChange={handleInputChange} />

        <button type="button" onClick={cadastrarCliente} disabled={loading}>
          {loading ? 'Cadastrando...' : 'Cadastrar'}
        </button>
      </form>
    </div>
  );
}

export default App;
