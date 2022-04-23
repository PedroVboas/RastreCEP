import { useState } from 'react';
import {FcSearch} from 'react-icons/fc' 
import './style.css'
import api from './services/api'


function App() {

  const [input, setInput] = useState(""); /*input = chama o valor do estado. setInput = passa um novo valor para o estado*/
  const [cep, setCep] = useState({});


  async function handleSearch(){

    if(input === ''){
      alert("O CEP não foi preenchido!")
      return;
    }

    try{ /* o que você quer fazer mais pode dar errado */
      const response = await api.get(`${input}/json`);
      setCep(response.data); /*passa pro usestate algum valor */
      setInput("")

  }catch{ /* caso der errado cai no catch */
    alert("Erro ao buscar!")  
    setInput("") /*limpa o campo de busca */
  } 
  }


  return (
    <div className="container">
      <h1 className="title">RastreCEP</h1>

      <div className="containerInput">
        <input type="text"
        placeholder="Digite o CEP que deseja rastrear" 
        value={input}
        onChange={(e) => setInput(e.target.value) }
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FcSearch size={30} Rastrear/>
        </button>

      </div>

    
      {Object.keys(cep).length > 0 && (
        <main className="main">
        <h2>CEP: {cep.cep}</h2>

          <span>{cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>

      </main>
   )} 
      
    </div>  /*o Object.keys().length é usado para verificar se existe algo dentro do objeto */
  );
}

export default App;
