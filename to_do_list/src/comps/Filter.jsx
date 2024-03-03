import React from 'react'
import "../App.css";

/* 
Este componente é responsável pelos filtros de ordenação e exibição. Aqui é onde estão as selects e os botões que 
permitem filtrar a exibição das tarefas em "Todas", "Completas" e "Incompletas", também permitindo alterar 
a ordem de exibição alfabética.

botões e selects:
    Select de status: é o que permite visualizar as tarefas desejadas, podendo transitar entre: Todas, Completas 
                      e Incompletas

    Botão ↓ (Classname='asc'): botão que ordena as tarefas em ordem alfabética ascendente (A-Z)
    Botão ↑ (Classname='des'): botão que ordena as tarefas em ordem alfabética descendente (Z-A)


*/

const Filter = ({filter, setFilter, setSort}) => {
  return (
    <div className='filter'>
        <h2>Filtrar</h2>
        <div className="filter-options">
            <div>
                <p>Status</p>
                <select name="" id="" value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Incomplete">Incompletas</option>
                    </select>
            </div>
            <div className='alf'>
                <p className='ord'>Ordem alfabética</p>
                <button className='asc' onClick={() => setSort("Asc")}>↓</button>
                <button className='des' onClick={() => setSort("Desc")}>↑</button>

            </div>
            </div>
    </div>
  )
}

export default Filter