import React from 'react'

/* 
Este componente é responsável pela barra de pesquisa. Aqui é onde estão as propriedades da search-bar.

Variáveis:

    search (str): variável do tipo string que será o filtro para busca. É definida atráves de uma
                  entrada solicitada ao usuário (input).

*/

const Search = ({search, setSearch}) => {
    
  return ( <div className='search'> 
  <h2>Pesquisar</h2>
  <input className='input_search'
  type="text" 
  value={search} 
  onChange={(e)=> setSearch(e.target.value)} 
  placeholder='Pesquisar'/>
  </div> 
  )
}

export default Search