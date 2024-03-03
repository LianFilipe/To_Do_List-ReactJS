import React from 'react'
import "../App.css";

/* 
Este componente é responsável pela exibição da tarefa (todo) presente na aplicação, aqui
é onde são definidas as variáveis, botões e funcionalidades que cada tarefa exibirá.

variáveis:
    São as variáveis de cada tarefa (nomeada de "todo");
    todo.text(str): variável do tipo string que contém o texto do titulo da tarefa.
    
    todo.description(str): variável do tipo string que contém a descrição da tarefa.

    todo.category(str, opt): variável do tipo string (opções) que contém a categoria da tarefa, 
                        opções: Informática, Operacional, Geral e Organizacional.

botões e selects:
    Completar(botão): presente na tarefa que permite alterar a propriedade todo.isCompleted, alterando a tarefa para 
                      completa ou retirando ela deste status, caso torne completa isso irá alterar a cor do background 
                      e riscar a tarefa da lista. 

    Select(ClassName: task_status): caixa de seleção presente na tarefa que permite definir se a tarefa está 
                                    "Em progresso" ou "Inativa".

    x (botão): presente na tarefa é responsável por remover a tarefa da lista.
*/



const Todo = ({ todo, removeTodo, completeTodo, handleStatusChange }) => {
  return (
    <div 
    className='todo' 
    style={{
        textDecoration: todo.isCompleted ? "line-through" : "",
        backgroundColor: todo.isCompleted ? "green" : 'rgb(106, 111, 153)'
    }}
    >
    <div className='content'>
      <p>{todo.text}</p>
      <div className='description'>
      <p>{todo.description}</p>
      <p className='category'>({todo.category})</p>
      </div>
    </div>
    <div>
    <select className="task_status"  onChange={(e) => handleStatusChange(todo.id, e.target.value)} value={todo.status}>
      <option value=""></option>
      <option value="inprogress">Em progresso</option>
      <option value="inactive">Inativa</option>
    </select>
    <button className='complete' onClick={() => completeTodo(todo.id)}>
        Concluir
    </button>
    <button onClick={() => removeTodo(todo.id)}>x</button>
    </div>
  </div>
  )
}

export default Todo;