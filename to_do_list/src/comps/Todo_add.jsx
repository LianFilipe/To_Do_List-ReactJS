import React from 'react'
import { useState } from 'react';
import "../App.css";
/* 
Este componente é responsável pelo formulário de adição de novas tarefas "Todo_add", aqui é onde estão as
condições que permitem a adição de texto, descrição e caregoria.

variáveis:

    value(str): variável do tipo string que contém o texto do titulo da tarefa (todo.text), é definido atráves de uma
                entrada solicitada ao usuário (input), limitado a 50 caracteres.
            
    category(str, opt): variável do tipo string (opções) que contém a categoria da tarefa (todo.category), 
                        é definida atráves de uma caixa de seleção de opções (select),
                        opções: Informática, Operacional, Geral e Organizacional.

    valueDescription(str): variável do tipo string que contém a descrição da tarefa (todo.category), é definido
                           atráves de uma entrada solicitada ao usuário (input), limitado a 63 caracteres.

*/
const Todo_add = ({addTodo}) => {
    const [value, setValue]= useState("");
    const [category, setCategory]= useState("");
    const [valueDescription, setvalueDescription]= useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category || !valueDescription) return;
        addTodo(value, valueDescription, category);
        setValue("");
        setCategory("");
        setvalueDescription("")
    };

  return ( <div className='todo-add'>
    <h2>Adicionar atividade </h2>
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder='Nome da tarefa'
            value={value}
            maxLength={50}
            onChange={(e) => setValue(e.target.value)}/>
        

        <input 
            type="text" 
            placeholder='Descrição (até 60 caracteres)'
            maxLength={63}
            value={valueDescription}
            onChange={(e) => setvalueDescription(e.target.value)}/>
            
        <h2></h2>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value=''>Selecione uma categoria</option>
            <option value='Informática'> Informática </option>
            <option value='Operacional'> Operacional </option>
            <option value='Geral'>Geral</option>
            <option value='Organizacional'>Organizacional</option>
        </select>

        <button type='submit'>Adicionar</button>
    </form>
    </div>  
  )
}

export default Todo_add